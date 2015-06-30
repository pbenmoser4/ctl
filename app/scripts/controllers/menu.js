'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ctlApp
 */

angular.module('ctlApp').controller('MenuController', ['$rootScope', '$scope', 'appFunctions', 'cmAuthService', function($rootScope, $scope, appFunctions, cmAuthService) {
	$scope.sections = ['profile', 'search', 'health'];

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

	$scope.logout = function() {
		cmAuthService.logout();
	};
}]);