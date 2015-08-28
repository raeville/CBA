/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Service/AspNetUserService.js" />

describe('AspNetUser service', function () {
    beforeEach(module('LoanApp'));

    var loginService, $httpBackend, apiUrl;

    beforeEach(inject(function ($injector, loanApiConsUrl) {
        loginService = $injector.get('AspNetUser');
        $httpBackend = $injector.get('$httpBackend');
        apiUrl = loanApiConsUrl;
    }));

    it('should have a Token api POST call', function () {
        var data = {
            "email": "test@cba.com",
            "password": "password",
            "grant_type": "password"
        };
        $httpBackend.expectPOST(apiUrl + 'Token/', data).respond(201, '');
        loginService.login(data);
        $httpBackend.flush();
    });

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});