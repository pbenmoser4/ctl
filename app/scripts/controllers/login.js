'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('LoginController', ['$scope', '$window', 'cmAuthService', 'cmService', function ($scope, $window, cmAuthService, cmService) {
    $scope.login = function(user) {
    	cmAuthService.login({
    		email: user.email,
    		password: user.password
    	}, function(successData){
    		// success!
    		console.log(successData);
    	}, function(error){
    		$window.alert(error);
    	});
    };

    $scope.createUser = function(newUser) {
        var queryString;
        if (newUser.email) {
            queryString = '[email = "' + newUser.email + '"]';
        } else if (newUser.username) {
            queryString = '[username = "' + newUser.username + '"]';
        }
        $window.alert(queryString);
        cmService.searchUsers(queryString, function(successData, response) {
            // This user already exists.
            console.log(successData);
            if (JSON.stringify(successData) === '{}') {
                $window.alert('empty object');
                cmAuthService.createUser(newUser, function(successData) {
                    console.log(successData);
                }, function (errorData) {
                    console.log(errorData);
                });
            }
        }, function(errorData) { 
            // This user does not exist, create a new user.
            console.log(errorData);
            $window.alert('the user doesn\'t exist');
        });
    }

  }]);