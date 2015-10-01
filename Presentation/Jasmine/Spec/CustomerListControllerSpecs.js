/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Service/Customer.Service.js" />
/// <reference path="../../Scripts/AngularPrj/Controller/CustomerList.Controller.js" />

describe('Customer List Controller', function () {
    beforeEach(function () {
        module(function ($provide) {
            $provide.service('response', function () {
                this.data = { "role": "Admin" };
            });
        });
        module('LoanApp');
    });
    var CustomerListCtrl;
    var scope;
    var service;
    var q;
    var deferred;
    var user;
    var response;
    var $rootScope;
    var _date = new Date();
    beforeEach(function () {
        user = {
            "username": "Admin@cba.com",
            "password": "P@ssw0rd"
        }
        response = {
            "data": {
                "Id": 1,
                "Email": "User@cba.com",
                "FirstName": "User First Name",
                "MiddleName": "User Middle Name",
                "LastName": "User Last Name",
                "Gender": "M",
                "Address": "The World",
                "BirthDate": _date.toUTCString(),
                "MaritalStatus": "S",
                "SourceOfIncome": "Business",
                "IsDeleted": "0",
                "CreateDate": _date.toUTCString(),
                "UpdateDate": _date.toUTCString()
            }
        }
        service = {
            getCustomers: function () {
                deferred = q.defer();
                return deferred.promise;
            },
            deleteCustomer: function () {
                deferred = q.defer();
                return deferred.promise;
            }
        };
    });

    beforeEach(inject(['$rootScope', '$controller', '$q', function ($rootScope, $controller, $q) {
        q = $q;
        scope = $rootScope.$new();
        scope.user = user;

        CustomerListCtrl = $controller('CustomerListController', {
            $scope: scope,
            CustomerService: service
        });
    }]));
    it('should GET to CustomerService.getCustomers when customersListInit is called', function () {
        spyOn(service, 'getCustomers').and.callThrough();
        scope.customersListInit();
        deferred.resolve(response);
        scope.$root.$digest();
        expect(service.getCustomers).toHaveBeenCalled();
    });

    it('should Delete to CustomerService.deleteCustomer when delete is called', function () {
        spyOn(service, 'deleteCustomer').and.callThrough();
        scope.delete();
        deferred.resolve(response);
        scope.$root.$digest();
        expect(service.deleteCustomer).toHaveBeenCalled();
    });
    it('should Add Index to $scope.checkIndex when checkIndex is called', function () {
        spyOn(scope, 'checkIndex').and.callThrough();
        scope.checkIndex(response)
        deferred.resolve(response);
        scope.$root.$digest();
        expect(scope.checkIndex).toHaveBeenCalled();
    });
});