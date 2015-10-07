'use strict';

/**
 * @ngdoc overview
 * @name jamApp
 * @description
 * # jamApp
 *
 * Main module of the application.
 */
angular
  .module('jamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

      // use the HTML5 History API
      // so we don't need a #/ in our url
      $locationProvider.html5Mode(true);
  });
