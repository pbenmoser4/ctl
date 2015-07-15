'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:SearchController
 * @description
 * # SearchController
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('SearchController', ['$scope', '$window', 'cmService', function($scope, $window, cmService) {
    // Setting up the search controller

    $scope.searchType = 'user';
    $scope.searchPlaceholder = 'Users';
    $scope.query = '';

    $scope.searchResults = {};

    // Updating what we're searching on. Between user and health objects
    $scope.setSearch = function(searchType) {
    	$scope.searchType = searchType;

    	// Also updating the display.
    	$scope.searchPlaceholder = searchType === 'user' ? 'Users' : 'Health Items';
    };

    // Simple method to determine whether to search users or items
    $scope.search = function() {
    	if ($scope.searchType === 'user') {
    		userSearch(queryFromSearchString('email', $scope.query));
    	} else if ($scope.searchType === 'health') {
    		healthItemSearch(queryFromSearchString('title', $scope.query));
    	} else {
    		// Do nothing
    	}
    };

    // Custom user search method
    function userSearch(query) {
    	cmService.searchUsers(query,
    		function(successData) {
    			
				$scope.searchResults = dataArrayFromResult(successData);
				$scope.$apply();

    		},
    		function(error) {
    			$window.alert('unsuccessful user search\n\n' + JSON.stringify(error));
    		});
    };

    // Custom health item search method
    function healthItemSearch(query) { 
    	cmService.search(query, {},
    		function(successData) {

    			$scope.searchResults = dataArrayFromResult(successData);
    			$scope.$apply();

    		},
    		function(error) {
    			$window.alert('unsuccessful item search\n\n' + JSON.stringify(error));
    		});
    };

    function queryFromSearchString(field, searchString) {
    	return '[' + field + '=/' + searchString + '/i]';
    }

    function dataArrayFromResult(jsonResult) {
    	jsonResult = jsonResult || {};
    	var retArray = [];

    	for (var key in jsonResult) {
    		retArray.push(jsonResult[key]);
    	}

    	return retArray;
    }

  }]);
