/**
 * @ngdoc service
 * @name rebrickable.services.service:UserHashSrvc
 *
 * @description
 * Implements the rebrickable UserHash API call
 * 
 */
(function(services){
    'use strict';
    services.service('UserHashSrvc', ['$q', '$http', 'serviceConfig', 'ApiUtilSrvc', function($q, $http, serviceConfig, apiUtilSrvc) {
        var apiId = serviceConfig.apiIdMap.GET_USER_HASH,
            apiUrl = serviceConfig.apiUrl + apiId,
            apiKey = serviceConfig.apiKey,
            errorMap = serviceConfig.errorMap;
        /**
         * Transformer function for API responses
         * @param   {Array}  defaults The array of default transformer functions
         * @returns {Object} The response object containing the hash attribute 
         * or an error attribute when an error occures
         */
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
                    error = apiUtilSrvc.getErrorMsg(data.error) || errorMap.SERVICE_CALL_ERROR;
                    deferred.reject(error);
                }
            }).error(function() {
                deferred.reject(errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
    }]);
}(angular.module('rebrickable.services')));