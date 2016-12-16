'use strict';

alert('world!!!');


angular.module('helloangularworldApp')
  	.controller('MyHeaderCtrl', function($scope) {
        $scope.checkMyForm = function() {
          alert('Hello My Friend!!!');       
        }
  	});
