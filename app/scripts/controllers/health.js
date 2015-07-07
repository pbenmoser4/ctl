'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:HealthController
 * @description
 * # HealthController
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('HealthController', function ($scope) {

    $scope.placeHolder = 'Tell us about something healthy!!';

    $scope.submit = function() {
    	// Submit the healthy habit that you entered into the text field
    }

  });
