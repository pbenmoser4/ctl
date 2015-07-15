'use strict';

/**
@ngdoc service
@name ctlApp.cmService
@description A CloudMine interface for the ctl application. 
*/

angular.module('ctlApp')
	.service('cmService', ['$rootScope', '$window', function($rootScope, $window) {

		// Setting up the CloudMine options that we will use throughout the demo
		var cmOptions = {
			appid: 'd46948e3e8bb49aeac5716d84258d7dd',
			apikey: 'CC05B5846DC445ECA848F35AB11EE70F',
		};

		var ws = new cloudmine.WebService(cmOptions);
		this.cmWebService = ws;

		console.log(this.cmWebService);

		// Just doing this so that grunt stops throwing damn errors. 
		$rootScope.ws = ws;

		this.get = function(query, successCallback, failureCallback) {
			console.log(query);
			ws.get(query)
				.on('success', function(successData) {
					$window.alert('success getting object\n' + JSON.stringify(successData, null, 2));
					if (typeof successCallback == 'function') {
						successCallback(successData);
					}
				})
				.on('error', function(error) {
					$window.alert('error getting object\n' + JSON.stringify(error, null, 2));
					if (typeof failureCallback == 'function'){
						failureCallback(error);
					}
				});
		};

		this.search = function(queryString, options, successCallback, failureCallback) {
			console.log(queryString);
			var req = ws.search(queryString, options);
			$window.alert(JSON.stringify(req["headers"], null, 2));

			req.on('success', function(data) {
					successCallback(data);
				})
				.on('error', function(error) {
					failureCallback(error);
				})
		};

		this.update = function(item, options, successCallback, failureCallback) {
			console.log(item);
			console.log(options);
			successCallback('success');
			failureCallback('failure');
		};

		this.create = function(item, options, successCallback, failureCallback) {
			// If the options passed into the function have applevel:true, add it to the 'set' call.
			var setOptions = options.applevel === true ? {applevel : true} : {};

			// Call to CloudMine to create an object. We use '' so that CloudMine automatically
			// generates a unique pin for us
			this.cmWebService.set('', item, setOptions)
				.on('success', function(data) {
					// Successful set callback
					successCallback(data);
				})
				.on('error', function(error) {
					// failed set callback
					failureCallback(error);
				});
		};

		this.delete = function(item) {
			console.log(item);
		};

		/**
		Calls the cmWebService searchUsers function. 

		@param query The search query used to search through application CMUser objects
		@param successCallback Callback triggered on successful search, takes the data returned as an argument
		@param failureCallback Callback triggered on failed search, takes the error returned as an argument
		*/
		this.searchUsers = function(query, successCallback, failureCallback) {
			// Make sure that there is actually a query, even if it's blank.
			query = query || '[]';

			// Make the actual searchUsers call, and trigger callbacks on success or failure.
			this.cmWebService.searchUsers(query)
				.on('success', function(data) {
					if (typeof successCallback == 'function') {
						successCallback(data);
					}
				})
				.on('failure', function(error) {
					if (typeof failureCallback == 'function') {
						failureCallback(error);
					}
				});
		};

		this.updateUser = function(updateDict, successCallback, failureCallback) {

			successCallback = successCallback || {};
			failureCallback = failureCallback || {};

			if (!updateDict) {
				// If they haven't passed in any updates, then don't update anything!
				return;
			}

			this.cmWebService.updateUser(updateDict)
				.on('success', function(data) {
					if (typeof successCallback == 'function') {
						successCallback(data);
					}
				})
				.on('error', function(error, results) {
					if (typeof failureCallback == 'function') {
						failureCallback(error);
					}
				});
			
		};

	}]);