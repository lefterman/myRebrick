(function(services){
    'use strict';
    services.service('UserHashSrvc', ['$q', '$http', 'serviceConfig', 'ApiUtil', function($q, $http, serviceConfig, apiUtil) {
        var apiId = serviceConfig.apiIdMap.GET_USER_HASH,
            apiUrl = serviceConfig.apiUrl + apiId,
            apiKey = serviceConfig.apiKey,
            errorMap = serviceConfig.errorMap;
        
        function transformResponse (defaults) {
            defaults = angular.isArray(defaults) ? defaults : [defaults];
            defaults.unshift(function(response) {
                var data = {};
                if (response && response.length === 32) {
                    data.hash = response;
                } else {
                    data.error = response;
                } 
                return data; 
            });
            return defaults;
        }
        this.getUserHash = function (email, password) {
            var deferred = $q.defer();
            var options = {
                transformResponse : transformResponse($http.defaults.transformResponse),
                params : {
                    key: apiKey,
                    email : email,
                    pass: password,
                    format: 'json',
                 }
            };
            $http.get(apiUrl,options).success(function(data){
                var error;
                if (data.hash) {
                    deferred.resolve(data);
                } else {
                    error = apiUtil.getErrorMsg(data.error) || errorMap.SERVICE_CALL_ERROR;
                    deferred.reject(error);
                }
            }).error(function() {
                deferred.reject(errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
    }]);
}(angular.module('rebrickable.services')));