'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
