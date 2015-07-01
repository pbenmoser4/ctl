'use strict';

/**
 * @ngdoc function
 * @name ctlApp.controller:ProfileController
 * @description
 * # ProfileController
 * Controller of the ctlApp
 */

angular.module('ctlApp')
  .controller('ProfileController', ['$scope', '$rootScope', '$window', function ($scope, $rootScope, $window) {
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
  	var currentEmail = currentUser.email || '';
  	var currentLocation = currentUser.location || '';
  	var currentLang = currentUser.language || '';

  	$scope.profileName = 'Profile Page';

  	// Setting up an array that represents the different profile fields that the users can interact with
    $scope.fields = [
    	{name: 'Name', value: currentName, placeholder: 'Enter name'},
    	{name: 'Email', value: currentEmail, placeholder: 'Enter email'},
    	{name: 'Location', value: currentLocation, placeholder: 'Enter location'},
    	{name: 'Language', value: currentLang, placeholder: 'Enter your favorite programming language!'}
    ];
    
    $scope.editing = 'true';

    $scope.edit = function(index) {
    	if (fields[index].editable === 'true') {
    		fields[index].editable = 'false';
    	} else {
    		fields[index].editable = 'true';
    	}
    }

  }]);
