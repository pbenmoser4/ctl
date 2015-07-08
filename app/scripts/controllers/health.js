'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:HealthController
 * @description
 * # HealthController
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('HealthController', ['$scope', '$rootScope', '$interval', '$window', 'cmService', 'cmAuthService', 
  	function ($scope, $rootScope, $interval, $window, cmService, cmAuthService) {

	  	$scope.date = Date();

	    $scope.placeholder = 'Tell us about something healthy you did!!';

	    $scope.currentItem = {};

	    $scope.healthyItems = {};

	    $scope.submitHealthItem = function() {
	    	// Submit the healthy habit that you entered into the text field
	    	$scope.currentItem = healthItemFromScope();

	    	cmService.create($scope.currentItem, {}, 
	    		function(successData) {
	    			$window.alert('success submitting health item\n\n' + JSON.stringify(successData, null, 2));
		    	}, 
		    	function(error) {
		    		$window.alert('couldn\'t submit health item\n\n' + JSON.stringify(error, null, 2));
		    	});
	    };

	    $scope.getHealthItems = function() {

	    };

	    var healthItemFromScope = function() {
	    	return {
	    		__class__: 'HealthItem',
	    		createdDate: $scope.date,
	    		data: $scope.healthItem
	    	}
	    }

	    // Set up an update function that updates the time once every 0.1 seconds
	   	$interval(function() {
	   		$scope.date = Date();
	   	}, 100);

	}]);
