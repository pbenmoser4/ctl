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
            cmAuthService.login({
                email: newUser.email,
                password: newUser.password
            }, function (loginSuccessData){

                cmService.updateUser({email: newUser.email, createdDate:Date()}, function(d){
                    console.log(d);
                }, function(d){
                    console.log(d);
                });

            }, function (loginError){
                console.log(loginError);
            });
        }, function(errorData) {
            $window.alert('did not create user\n\n' + JSON.stringify(errorData));
            console.log(errorData);
        });
    };

  }]);