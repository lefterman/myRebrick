(function(services) {
    'use strict';
    services.service('UserDetailsSrvc', ['$q', '$http', 'serviceConfig', function($q, $http, serviceConfig) {
        var apiId = serviceConfig.apiIdMap.GET_USER_DETAILS;
        this.getUserDetails = function (hash) {
            var deferred = $q.defer();
            
        };
    }]);
}(angular.module('myRebrickApp')));