'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the ctlApp
 */
angular.module('ctlApp')
  .controller('LoginController', ['$scope', '$rootScope', '$window', 'cmAuthService', 'cmService', function ($scope, $rootScope, $window, cmAuthService, cmService) {

    $scope.login = function(user) {
    	cmAuthService.login({
    		email: user.email,
    		password: user.password
    	}, function(successData){
    		// Successful login!
    		$window.alert('success logging in!\n' + JSON.stringify(successData));

            $rootScope.currentUser = angular.extend({}, $rootScope.currentUser, successData.profile || {});

    	}, function(error){
    		$window.alert('Error logging in ' + JSON.stringify(error, null, 2));
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

            $window.alert('create user success:\n' + JSON.stringify(successData, null, 2));

            cmAuthService.login({
                email: newUser.email,
                password: newUser.password
            }, function (loginSuccessData){

                $window.alert('login successful after user creation:\n' + JSON.stringify(loginSuccessData, null, 2));
                $window.alert('Web Service: ' + JSON.stringify($rootScope.currentUser, null, 2));

                cmService.updateUser({something: 'something'}, function(d){
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