'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:ProfileController
 * @description
 * # ProfileController
 * Controller of the ctlApp
 */

angular.module('ctlApp')
  .controller('ProfileController', ['$scope', '$rootScope', '$window', 'cmService', function ($scope, $rootScope, $window, cmService) {
  	// $window.alert(' start');

  	/**
  	Custom initialization function that we will use to get the currentUser's information. We will use this information
  	to populate the fields in the user's profile page.
  	*/
  	var init = function(){
  		
  	}

  	// Getting the current user so that we can populate the fields when we open the page.
  	var currentUser = $rootScope.currentUser || {};
  	var currentName = currentUser.name || '';
  	var currentEmail = currentUser.email || $rootScope.currentUser.credentials.email;
  	var currentLocation = currentUser.location || '';
  	var currentLang = currentUser.language || '';

  	$scope.profileName = 'Profile Page';

  	// Setting up an array that represents the different profile fields that the users can interact with
    // $scope.fields = [
    // 	{name: 'Name', value: currentName, placeholder: 'Enter name'},
    // 	{name: 'Email', value: currentEmail, placeholder: 'Enter email'},
    // 	{name: 'Location', value: currentLocation, placeholder: 'Enter location'},
    // 	{name: 'Language', value: currentLang, placeholder: 'Enter your favorite programming language!'}
    // ];

    $scope.fields = {
      name: {title: 'Name', value: currentName, placeholder: 'Enter name'},
      email: {title: 'Email', value: currentEmail, placeholder: 'Enter email'},
      location: {title: 'Location', value: currentLocation, placeholder: 'Enter location'},
      language: {title: 'Language', value: currentLang, placeholder: 'Enter your favorite programming language!'}
    };
    
    $scope.editing = 'false';

    $scope.edit = function() {
    	$scope.editing = 'true';
    }

    $scope.update = function() {
      $scope.editing = 'false';
      var updateDict = {
        name: $scope.fields.name.value,
        email: $scope.fields.email.value,
        location: $scope.fields.location.value,
        language: $scope.fields.language.value
      }
      cmService.updateUser(updateDict,
        function(updateSuccessData) {
          $window.alert('success\n' + JSON.stringify(updateSuccessData));
        },
        function(updateError){
          $window.alert('error\n' + JSON.stringify(updateError));
        });
    }

  }]);
