'use strict';

/**
 * @ngdoc overview
 * @name ctlApp
 * @description
 * # ctlApp
 *
 * Main module of the application.
 */
angular
  .module('ctlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
        redirectTo: '/login'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
      })
      .when('/health', {
        templateUrl: 'views/health.html',
        controller: 'HealthController'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileController'
      })
      .when('/log_out', {
        redirectTo: '/login'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
