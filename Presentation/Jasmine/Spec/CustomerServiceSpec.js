/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Service/Customer.Service.js" />

describe('CustomerService service', function () {
    beforeEach(function () {
        module(function ($provide) {
            $provide.service('$localStorage', function () {
                this.get = jasmine.createSpy('get').and.callFake(function () {
                    return '2974RArhyMUlmeewjp34lmfDaBpl';
                });
            });
        });
        module('LoanApp');
    });

    var customerService, $httpBackend, apiUrl, $localStorage;

    beforeEach(inject(function ($injector, loanApiConsUrl) {
        customerService = $injector.get('CustomerService');
        $httpBackend = $injector.get('$httpBackend');
        apiUrl = loanApiConsUrl;
    }));

    it('should have a /api/Customer api GET call', function () {
        $httpBackend.expectGET(apiUrl + 'api/Customer', { 'Authorization': 'Bearer ' + '2974RArhyMUlmeewjp34lmfDaBpl', 'Accept': 'application/json, text/plain, */*' }).respond(200, '');
        customerService.getCustomers();
        $httpBackend.flush();
    });

    it('should have a /api/Customer/id api GET call', function () {
        var username = "test";
        $httpBackend.expectGET(apiUrl + 'api/Customer?userName=' + username, { 'Authorization': 'Bearer ' + '2974RArhyMUlmeewjp34lmfDaBpl', 'Accept': 'application/json, text/plain, */*' }).respond(200, '');
        customerService.getCustomerById(username);
        $httpBackend.flush();
    });

    it('should have a /api/Customer api POST call', function () {
        var data = {
            "Email": "User@cba.com",
            "FirstName": "User First Name",
            "MiddleName": "U",
            "LastName": "User Last Name",
            "Gender": "M",
            "Address": "The World",
            "BirthDate": "1/1/2015",
            "MaritalStatus": "M",
            "SourceOfIncome": "Employed"
        };
        $httpBackend.expectPOST(apiUrl + 'api/Customer', data, { 'Authorization': 'Bearer ' + '2974RArhyMUlmeewjp34lmfDaBpl', 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json;charset=utf-8' }).respond(201, '');
        customerService.postCustomer(data);
        $httpBackend.flush();
    });

    it('should have a /api/Customer api PUT call', function () {
        var data = {
            "Email": "User@cba.com",
            "FirstName": "User First Name",
            "MiddleName": "U",
            "LastName": "User Last Name",
            "Gender": "M",
            "Address": "The World",
            "BirthDate": "1/1/2015",
            "MaritalStatus": "M",
            "SourceOfIncome": "Employed"
        };
        $httpBackend.expectPUT(apiUrl + 'api/Customer', data, { 'Authorization': 'Bearer ' + '2974RArhyMUlmeewjp34lmfDaBpl', 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json;charset=utf-8' }).respond(201, '');
        customerService.putCustomer(data);
        $httpBackend.flush();
    });

    it('should have a /api/Customer/id api Delete call', function () {
        var id = 5;
        $httpBackend.expectDELETE(apiUrl + 'api/Customer/' + id, { 'Authorization': 'Bearer ' + '2974RArhyMUlmeewjp34lmfDaBpl', 'Accept': 'application/json, text/plain, */*' }).respond(200, '');
        customerService.deleteCustomer(id);
        $httpBackend.flush();
    });

    it('should have a /api/Customer api GET call', function () {
        $httpBackend.expectGET(apiUrl + 'api/Customer', { 'Authorization': 'Bearer ' + '2974RArhyMUlmeewjp34lmfDaBpl', 'Accept': 'application/json, text/plain, */*' }).respond(200, '');
        customerService.getCustomers();
        $httpBackend.flush();
    });

    it('should have Marital Status service', function () {
        var maritalStatus = [
        { "value": 1, "status": "Single" },
        { "value": 2, "status": "Married" },
        { "value": 3, "status": "Legally Separated" },
        { "value": 3, "status": "Divorced" },
        { "value": 3, "status": "Widowed" }
        ];
        expect(customerService.getMaritalStatus()).toEqual(maritalStatus);
    });

    it('should have source of income service', function () {
        var sourceOfIncome = [
        { "id": 1, "source": "Business" },
        { "id": 2, "source": "Employment" }
        ];
        expect(customerService.getSourceOfIncome()).toEqual(sourceOfIncome);
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});