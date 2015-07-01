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

        cmAuthService.createUser({
            email: newUser.email,
            username: newUser.username,
            password: newUser.password,
            profile: {
                email: newUser.email,
                username: newUser.username
            }
        }, function(successData) {

            cmAuthService.login({
                email: newUser.email,
                password: newUser.password
            }, function (loginSuccessData){

                $window.alert('login successful after user creation');

                cmService.updateUser({email: newUser.email}, function(d){
                    console.log(d);
                }, function(d){
                    console.log(d);
                });

            }, function (loginError){
                console.log(loginError);
            });
        }, function(errorData) {
            console.log(errorData);
        });
    };

  }]);