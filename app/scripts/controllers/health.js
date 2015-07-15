'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:HealthController
 * @description
 * # HealthController
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('HealthController', ['$scope', '$rootScope', '$interval', '$log', '$window', 'cmService', 'cmAuthService', 
  	function ($scope, $rootScope, $interval, $log, $window, cmService, cmAuthService) {

  		// Setting up logging
  		$log.log('health');

	  	$scope.date = Date();

	  	$scope.titlePlaceholder = 'Give your item a title!'
	    $scope.placeholder = 'Tell us about something healthy you did!!';

	    $scope.currentItem = {};
	    $scope.healthyItems = {};
	    
	    // getHealthItems();

	    $scope.submitHealthItem = function() {
	    	// Submit the healthy habit that you entered into the text field
	    	$scope.currentItem = healthItemFromScope();

	    	cmService.create($scope.currentItem, {}, 
	    		function(successData) {
	    			updateHealthyItems(Object.keys(successData)[0]);
	    			$scope.healthItemData = '';
	    			$scope.healthItemTitle = '';
		    	}, 
		    	function(error) {
		    		console.log(error);
		    	});
	    };

	    $scope.getHealthItems = function() {
	    	// Searching for all of the healthy thingies.
	    	cmService.search('[__class__="HealthItem"]', {sort: 'createdDate:desc'}, 
	    		function(successData) {
	    			// Updating the scope's healthyItems array
	    			$scope.healthyItems = successData;
	    		},
	    		function(error) {

	    		});
			return null;
	    };

    	// getHealthItems();
    	$scope.getHealthItems();

	    var healthItemFromScope = function() {
	    	return {
	    		__class__: 'HealthItem',
	    		createdDate: $scope.date,
	    		data: $scope.healthItemData,
	    		title: $scope.healthItemTitle
	    	}
		}

		var updateHealthyItems = function(newId) {
			// Updating the current item from the information that is stored in the scope
			$scope.currentItem = healthItemFromScope();

			// Adding on the new item to the list of healthy Items that we already have stored.
			$scope.healthyItems = angular.extend({}, {newId: $scope.currentItem}, $scope.healthyItems);
		}

	    // Set up an update function that updates the time once every 0.1 seconds
	   	$interval(function() {
	   		$scope.date = Date();
	   	}, 100);

	}]);
