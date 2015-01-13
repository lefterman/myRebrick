(function(services) {
    'use strict';
    services.service('UserDetailsSrvc', ['$q', '$http', 'serviceConfig', 'ApiUtil', function($q, $http, serviceConfig, apiUtil) {
        var apiUrl = serviceConfig.apiUrl;
        var apiId = serviceConfig.apiIdMap.GET_USER_DETAILS;
        var apiKey = serviceConfig.apiKey;
        
        this.getUserDetails = function (hash) {
            var deferred = $q.defer();
            var url = apiUrl + apiId;
            var options = {
                format : 'json',
                hash : hash,
                key : apiKey
            };
            $http.get(url, options).success(function(response){
                var error;
                if (typeof response === 'object') {
                    deferred.resolve(response);
                } else {
                    error = apiUtil.getErrorMsg(response) || serviceConfig.errorMap.SERVICE_CALL_ERROR;
                    deferred.reject(error);
                }
            }).error(function(){
                deferred.reject(serviceConfig.errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
    }]);
}(angular.module('rebrickable.services')));