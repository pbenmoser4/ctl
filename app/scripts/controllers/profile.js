'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:ProfileController
 * @description
 * # ProfileController
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('ProfileController', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
