describe('Service: rebrickable.ApiUtilSrvc',function(){
    'use strict';
    var apiUtil;
    // required modules
    beforeEach(function(){
        module('rebrickable');
        module('rebrickable.services');
    });
    beforeEach(inject(function(ApiUtilSrvc){
        apiUtil = ApiUtilSrvc; 
    }));
    // checking the service existence
    it('should be instantiated', function() {
        expect(apiUtil).toBeDefined();
    });
    
    describe('Tesing Error Message Utlity', function(){
        
        it('should give empty string when there is no error mesage for the given key', function (){
            expect(apiUtil.getErrorMsg('kuytagumi')).toEqual('');
        });
        
        it('should retrieves the appropriate error message for the given key', function(){
            // SERVICE_CALL_ERROR : 'Service communication error',
            expect(apiUtil.getErrorMsg('SERVICE_CALL_ERROR')).toEqual('Service communication error');
        });
    });
});