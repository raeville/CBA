/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Service/AspNetUserService.js" />
/// <reference path="../../Scripts/AngularPrj/Controller/Registration.Controller.js" />

describe("Register Controller", function () {

    //Arrange;
    var scope;
    var controller;
    var service;

    beforeEach(module('LoanApp'));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, $http, $provide) {
        mockScope = $rootScope.$new();
        service = jasmine.createSpyObj("service", ["registerUser"]);
        service.registerUser.and.callThrough();
        $provide.value("service", service);

        $controller('RegistrationController', {
            $scope: scope,
            $http: $http
        });


        it("Should retrieve the customer API", function () {
            var expectedURL = {
                apiUrl: 'http://localhost:51361/'
            };
            $http.expectGET(expectedURL.apiUrl);
        });

        it("should call the register method on AspNetUser", function () {
            expect(service.registerUser).toHaveBeenCalled();
        });
        
    }));



});
