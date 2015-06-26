'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ctlApp
 */

angular.module('ctlApp').controller('MenuController', ['$scope', 'appFunctions', function($scope, appFunctions) {
	$scope.sections = ['profile', 'search', 'health', 'log_out'];

	$scope.toReadableText = function(inputText) {
		inputText = inputText || '';
		var strArray = inputText.split('_');

		return appFunctions.capitalizeStrArray(strArray);
	};

	$scope.path = function(section){
		if (this.sections.indexOf(section) === -1){
			// Not in the sections array.
			return '#/';
		} else {
			return '#/' + section;
		}
	};	
}]);