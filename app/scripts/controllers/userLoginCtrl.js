(function(controllers){
    'use strict';
    controllers.controller('UserLoginCtrl', ['$q','$scope', 'UserHashSrvc', 'UserDetailsSrvc', function($q, $scope, userHashSrvc, userDetailsSrvc) {
        if($scope.user === undefined) {
            $scope.user = {};
        }
        $scope.login = function () {
            var promise;
            $scope.serviceError = '';
            promise = userHashSrvc.getUserHash($scope.user.email, $scope.user.password);
            promise.then(function(data){
                $scope.user.hash = data.hash;
            },function(error){
                $scope.serviceError = error;
            });
            /*
            then(function(){
                var promise = userDetailsSrvc.getUserDetails($scope.user.hash);
                promise.then(function(result){
                    $scope.user.details = result;
                },function(error){
                    $scope.serviceError = error;
                });
            });*/
        };
    }]);
}(angular.module('myRebrickApp.controllers')));