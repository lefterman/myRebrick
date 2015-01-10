'use strict';

/**
 * @ngdoc function
 * @name myRebrickApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myRebrickApp
 */
angular.module('myRebrickApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
