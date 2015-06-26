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
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
