/**
 * @ngdoc service
 * @name rebrickable.services.service:ApiUtil
 *
 * @description
 * Gives common utility functions for the components of the rebrickable module
 */
(function(services){
    'use strict';
    services.service('ApiUtil', ['serviceConfig', function(serviceConfig){
        var errorMap = serviceConfig.errorMap;
        if (typeof errorMap !== 'object') {
            throw 'Missing config parameter exception in ApiUtil.js: errorMap';
        }
        /**
         * Retrieves an error message from the error map bY the given key
         * @param {string} errorId The key of the error message
         * @return {string} The error message or an empty string
         */
        this.getErrorMsg = function (errorKey) {
            if (errorKey && errorMap[errorKey] !== undefined) {
                return errorMap[errorKey];
            } else {
                return '';
            }
        };
    }]);
}(angular.module('rebrickable.services')));