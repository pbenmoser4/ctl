'use strict';

/**
@ngdoc service
@name ctlApp.cmAuthService
@description
Very simple CloudMine authorization service. 
*/

angular.module('ctlApp')
	.factory('cmAuthService', ['$rootScope', '$location', '$window', function($rootScope, $location, $window) {

		// Auth Service Options, stores the paths that we will redirect to.
		var opts = {
			rootPath: '/',
			loginPath: '/login',
			logoutPath: '/logout',
			profilePath: '/profile'
		};

		var callbacks = {

		};

		var self = this;

		return {

			init : function(cmWebService, _opts, _callbacks) {
				
				// Storing the WebService within the Authorization Service
				self.cm = cmWebService;

				// Extending the options and callbacks dict above with the options passed into the init function, if any
				_opts = _opts || {};
				angular.extend(opts, _opts);

				_callbacks = _callbacks || {};
				angular.extend(callbacks, _callbacks);	

				// Storing the fact that this Auth Service has been init'ed 
				opts.inited = true;

				// This is angular's way to watch for route changes. We're basically looking to see if we need
				// to redirect to the login page, and to do so if necessary. This is the main point of having this
				// Auth Service: to watch what the user is doing, and make sure they aren't trying to go somewhere they
				// shouldn't.
				$rootScope.$on('$routeChangeStart', function(event, next, current) {

					if($location.path() === opts.loginPath || $location.path() === opts.rootPath || $location.path() === opts.aboutPath) {
						// The user doesn't need to be authenticated, because they're not going anywhere
						return;
					} 

					if (!self.cm.options.session_token || $rootScope.currentUser == null) {
						// There is no session token associated with the auth service's CloudMine Webservice,
						// or there is no currentUser stored at the root scope.
						// Send them to the login page.
						return $location.path(opts.loginPath);
					}

				});
			},

			createUser: function(credentials, successCallback, failureCallback) {
				if (!opts.inited) {
					// We haven't init'ed the Auth Service, throw an error
					throw 'Must initialize cmAuthService before calling its functions';
				}

				if (!credentials.email) {
					// there's no email, don't go any farther
					$window.alert('Please enter a valid email to create a user');
					return;
				}

				if (!credentials.password) {
					// No password supplied, don't go any farther
					$window.alert('Please enter a password to create a user');
					return;
				}

				// We are going to need to search through the existing users to make sure that the one
		        // We are trying to create doesn't exist yet. 
				var queryString;
		        if (newUser.email) {
		            queryString = '[email = "' + newUser.email + '"]';
		        } else if (newUser.username) {
		            queryString = '[username = "' + newUser.username + '"]';
		        }

		        // Making the actual search call to our cm webservice object.
		        self.cm.searchUsers(queryString, function(successData) {
		            // This user already exists.
		            console.log(successData);
		            if (JSON.stringify(successData) === '{}') {
		                $window.alert('empty object');
		                self.cm.createUser(credentials.email, credentials.password)
							.on('success', function(data){

								// If there is no currentUser object attached to the rootScope, create an empty dict
								$rootScope.currentUser = $rootScope.currentUser || {};

								// We don't want the password getting out!
								delete credentials.password;

								// Add the login credentials (should just be a username or email) to the currentUser
								$rootScope.currentUser.credentials = credentials;

								if (typeof successCallback === 'function'){
									successCallback(data);
								}

								// Redirecting to the profile page once the user has logged in.
								$location.path(opts.profilePath);
								$rootScope.$apply();
							})
							.on('failure', function(error) {
								if (typeof failureCallback === 'function'){
									failureCallback(error);
								}
							});
		            }
		        }, function(errorData) { 
		            // This user does not exist, create a new user.
		            console.log(errorData);
		            $window.alert('the user doesn\'t exist');
		        });

				
			},

			login : function(credentials, successCallback, failureCallback) {
				if (!opts.inited) {
					// We haven't init'ed the Auth Service, throw an error
					throw 'Must initialize cmAuthService before calling its functions';
				}

				self.cm.login(credentials).on('success', function(data) {
					// If there is no currentUser object attached to the rootScope, create an empty dict
					$rootScope.currentUser = $rootScope.currentUser || {};

					// We don't want the password getting out!
					delete credentials.password;

					// Add the login credentials (should just be a username or email) to the currentUser
					$rootScope.currentUser.credentials = credentials;

					// Fire off the success callback
					if (typeof successCallback === 'function'){
						successCallback(data);
					}

					// Redirecting to the profile page once the user has logged in.
					$location.path(opts.profilePath);
					$rootScope.$apply();

				}).on('unauthorized', function(error) {
					// Fire off the failureCallback for the unauthorized error.
					if (typeof failureCallback === 'function'){
						failureCallback(error);
					}
				}).on('error', function(error) {
					// Some sort of error occured
					if (typeof failureCallback === 'function'){
						failureCallback(error);
					}
				});
			},

			logout : function() {
				if (!opts.inited) {
					// We haven't init'ed the Auth Service, throw an error
					throw 'Must initialize cmAuthService before calling its functions';
				}

				if ($rootScope.currentUser || self.cm.options.session_token) {
					// There is a user
					self.cm.logout().on('complete', function() {
						// After a successful WebService logout, set the root scope's current user to null, and 
						// Then re-route to the login page. 
						$rootScope.currentUser = null;
						$location.path(opts.loginPath);
						$rootScope.$apply();
					});
				} else {
					$window.alert('You can only log out if you\'re logged in!');
				}
			}
		};
	}]);