describe('service: UserHashSrvc', function () {
    'use strict';
    var $rootScope,
        $q,
        $httpBackend,
        userHashSrvc; 
    beforeEach(function(){
        module('rebrickable');
        module('rebrickable.services');
        inject(function(_$rootScope_,_$q_,_$httpBackend_, UserHashSrvc) {
            $rootScope = _$rootScope_;
            $q = _$q_;
            $httpBackend = _$httpBackend_;
            userHashSrvc = UserHashSrvc;
        });
    });
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    
    it('should be instantiated', function(){
        expect(userHashSrvc).toBeDefined();
    });
    
});