(function(controllers){
    'use strict';
    controllers.controller('UserLoginCtrl', ['$scope', 'UserHashSrvc', function($scope, userHashSrvc) {
        console.log($scope);
        
        function getUserDetails (hash) {
            
        }
        $scope.login = function () {
            var user,
                promise;
            // , 'UserHashSrvc'
            user = $scope.user || {email : '', password : ''};
            promise = '';
            promise = userHashSrvc.getUserHash(user.email, user.password);
            promise.then(function(data){
                if (!angular.isUndefined(data.hash)) {
                    $scope.user.hash = data.hash;
                } else {
                    
                }
                console.log(!$scope.user.hash);
                console.log(data);
            },function(resp){
                $scope.error = resp;
                console.log(resp);
            });
            
        };
    }]);
}(angular.module('myRebrickApp.controllers')));