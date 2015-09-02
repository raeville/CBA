/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Controller/Login.Controller.js" />

describe('LoginController', function () {
    beforeEach(module('LoanApp'));

    var loginCtrl;
    var scope;
    var service;
    var q;
    var deferred;
    var user;

    beforeEach(function () {
        user = {
            "username": "test5@cba.com",
            "password": "Password1!"
        }
        service = {
            login: function () {
                deferred = q.defer();
                return deferred.promise;
            }
        };
    });

    beforeEach(inject(function ($controller, $rootScope, $q) {
        q = $q;
        scope = $rootScope.new();
        loginCtrl = $controller('LoginController', {
            $scope: scope,
            mockService: service
        });
    }));

    it('should post to AspNetUser.login service when signIn is called', function () {
        spyOn(service, 'login').andCallThrough();
        scope.signIn();
        deferred.resolve(user);
        scope.$root.$digest();
        expect(apiService.getStatus).toHaveBeenCalled();
    });
});