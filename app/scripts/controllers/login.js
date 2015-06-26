'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('LoginController', function ($scope) {
    $scope.login = function(email, password) {
    	console.log(email + ' ' + password);
    };

  });
