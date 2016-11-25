'use strict';

/**
 * @ngdoc function
 * @name helloangularworldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloangularworldApp
 */
angular.module('helloangularworldApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.name = 'Veronica';
    this.students = ['Lena', 'Anna'];

    this.getName = function(someName){
    	return '<< ' + someName + ' >>';
    };
  });

angular.module('helloangularworldApp')
  .directive('profileDetails', function () {
    return {
    	templateUrl: 'views/profileDetails.html',
    	scope: {
    		herNameIs: '='
    	}
    }
  });

