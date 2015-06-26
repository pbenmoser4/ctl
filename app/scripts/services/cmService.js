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
		this.ws = ws;
		// Just doing this so that grunt stops throwing damn errors. 
		$rootScope.ws = ws;

		// var requestQueue = {};

		this.get = function(query) {

		};

		this.update = function(_item) {

		};

		this.create = function(item) {

		}

		this.delete = function(item) {
			
		}

	}]);