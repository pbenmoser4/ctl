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

		// var requestQueue = {};

		this.get = function(query) {
			console.log(query);
		};

		this.search = function(query, successCallback, failureCallback) {
			console.log(query);
			successCallback('success');
			failureCallback('failure');
		};

		this.update = function(_item) {
			console.log(_item);
		};

		this.create = function(item) {
			console.log(item);
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

			$window.alert('cmService about to try updating the user, st: ' + JSON.stringify(this.cmWebService.options, null, 2) + 
				'\n\ndict: ' + JSON.stringify(updateDict) + '\n');

			this.cmWebService.updateUser(updateDict)
				.on('success', function(data) {
					$window.alert('cmService success updating user');
					if (typeof successCallback == 'function') {
						successCallback(data);
					}
				})
				.on('error', function(error, results) {
					$window.alert('cmService error updating users \n' + JSON.stringify(error, null, 2));
					$window.alert('results: ' + JSON.stringify(results, null, 2));
					if (typeof failureCallback == 'function') {
						failureCallback(error);
					}
				});
			
		};

	}]);