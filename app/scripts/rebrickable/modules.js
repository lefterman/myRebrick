(function(ng){
    'use strict';
    var apiKey;
    apiKey = sessionStorage.getItem('rebrickable.apiKey');
    ng.module('rebrickable.services', []);
    ng.module('rebrickable', ['rebrickable.services']).constant('serviceConfig', {
        apiUrl : 'http://rebrickable.com/api/',
        apiKey : apiKey,
        apiIdMap: {
            GET_USER_HASH : 'get_user_hash',
            GET_USER_DETAILS : 'get_user_details'
        },
        errorMap : {
            SERVICE_CALL_ERROR : 'Service communication error',
            INVALIDKEY : 'The API Key is invalid',
            INVALIDUSERPASS : 'Invalid user email or password'
        }
    });
}(angular));