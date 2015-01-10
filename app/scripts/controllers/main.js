'use strict';

/**
 * @ngdoc function
 * @name myRebrickApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myRebrickApp
 */
angular.module('myRebrickApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
