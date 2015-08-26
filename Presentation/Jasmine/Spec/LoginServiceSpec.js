/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Service/LoginService.js" />

describe('log-in service', function () {
    beforeEach(module('LoanApp'));

    var loginService, $httpBackend;

    beforeEach(inject(function ($injector) {
        loginService = $injector.get('loginService');
        $httpBackend = $injector.get('$httpBackend');
    }));

    it('should have a Token api call', function () {
        var data = {
            "email": "test@cba.com",
            "password": "password",
            "grant_type": "password"
        };
        $httpBackend.expectPOST('/Token/', data).respond(201, '');
        loginService.authenticate(data);
        $httpBackend.flush();
    });

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});