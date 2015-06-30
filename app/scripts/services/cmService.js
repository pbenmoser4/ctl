'use strict';

// var cloudmine = require('cloudmine');

/**
@ngdoc service
@name ctlApp.cmService
@description A CloudMine interface for the ctl application. 
*/

angular.module('ctlApp')
	.service('cmService', ['$rootScope', function($rootScope) {

		// Setting up the CloudMine options that we will use throughout the demo
		var cmOptions = {
			appid: 'd46948e3e8bb49aeac5716d84258d7dd',
			apikey: '82465b3934d04acd918f97ddbe034bd0',
			applevel: true // Change this if you want calls to become user-level
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
					successCallback(data);
				})
				.on('failure', function(error) {
					failureCallback(error);
				});
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

	}]);