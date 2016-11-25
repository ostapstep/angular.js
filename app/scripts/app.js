'use strict';

/**
 * @ngdoc overview
 * @name helloangularworldApp
 * @description
 * # helloangularworldApp
 *
 * Main module of the application.
 */
angular
  .module('helloangularworldApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('helloangularworldApp')
  .directive('myheader', function () {
    return {
      templateUrl: 'views/myheader.html',
      controller: 'MyheaderCtrl',
      controllerAs: 'myheader'
    }
  });
