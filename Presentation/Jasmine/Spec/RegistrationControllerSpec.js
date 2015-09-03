/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/jquery-1.10.2.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Controller/Registration.Controller.js" />

describe('Registration Controller', function () {
    beforeEach(module('LoanApp'));

    var regCtrl;
    var scope;
    var service;
    var q;
    var deferred;
    var user;
    var $rootScope;

    beforeEach(function () {
        user = {
            "inputEmail": "test5@cba.com",
            "inputPassword": "Password1!",
            "inputConfirmPassword": "Password1!"

        }
        service = {
            registerUser: function () {
                deferred = q.defer();
                return deferred.promise;
            }
        };
    });

    beforeEach(inject(function ($rootScope, $controller, $q) {
        q = $q;
        scope = $rootScope.$new();
        scope.userData = user;
        regCtrl = $controller('RegistrationController', {
            $scope: scope,
            AspNetUser: service
        });
    }));

    it('should post to AspNetUser.registerUser service when registerUser is called', function () {
        spyOn(service, 'registerUser').and.callThrough();
        scope.registerUser();
        deferred.resolve(user);
        scope.$root.$digest();
        expect(service.registerUser).toHaveBeenCalled();
    });
});