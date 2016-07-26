'use strict';

/**
 * @ngdoc function
 * @name sportsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportsApp
 */
angular.module('sportsApp')
  .controller('MainCtrl', ['$scope', '$window', function($scope, $window) {
      $scope.greeting = 'Hello, World!';
      $scope.doGreeting = function(greeting) {
        $window.alert(greeting);
      };
  }]);
