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
  	var currentEmail = currentUser.email || currentUser.credentials.email || ''  ;
  	var currentLocation = currentUser.location || '';
  	var currentLang = currentUser.language || '';
    var currentOrg = currentUser.organization || '';

  	$scope.profileName = currentUser.name ? 'Profile Page for ' + currentUser.name : 'Profile Page';


  	// Setting up an array that represents the different profile fields that the users can interact with

    $scope.fields = {
      name: {title: 'Name', value: currentName, placeholder: 'Enter name'},
      email: {title: 'Email', value: currentEmail, placeholder: 'Enter email'},
      location: {title: 'Location', value: currentLocation, placeholder: 'Enter location'},
      language: {title: 'Language', value: currentLang, placeholder: 'Enter your favorite programming language!'},
      organization: {title: 'Organization', value: currentOrg, placeholder: 'Enter your organization'}
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
        language: $scope.fields.language.value,
        organization: $scope.fields.organization.value
      }
      cmService.updateUser(updateDict,
        function(updateSuccessData) {
          $window.alert('success\n' + JSON.stringify(updateSuccessData));
        },
        function(updateError){
          $window.alert('error\n' + JSON.stringify(updateError));
        });
    }

    $scope.cancelUpdate = function() {
      $scope.editing = 'false';
      $scope.fields.name.value = currentName;
      $scope.fields.email.value = currentEmail;
      $scope.fields.location.value = currentLocation;
      $scope.fields.language.value = currentLang;
      $scope.fields.organization.value = currentOrg;
    }

  }]);
