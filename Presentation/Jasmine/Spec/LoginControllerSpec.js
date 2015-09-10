/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/jquery-1.10.2.js" />
/// <reference path="../../Scripts/AngularPrj/Controller/Login.Controller.js" />
/// <reference path="../../Scripts/AngularPrj/Service/LocalStorage.Service.js" />

describe('Login Controller', function () {
    beforeEach(module('LoanApp'));

    var loginCtrl;
    var scope;
    var service;
    var localStorage;
    var q;
    var deferred;
    var user;
    var $rootScope;

    beforeEach(function () {
        user = {
            "username": "test5@cba.com",
            "password": "Password1!",
            "access_token": "2974LErhmJIlyeewjp34lmfZaBpl"
        }
        service = {
            login:function () {
                deferred = q.defer();
                return deferred.promise;
            }
        };
    });

    beforeEach(inject(['$rootScope', '$controller', '$q', '$localstorage', function ($rootScope, $controller, $q, $localstorage) {
        q = $q;
        scope = $rootScope.$new();
        scope.user = user;
        loginCtrl = $controller('LoginController', {
            $scope: scope,
            AspNetUser: service,
            $localStorage: $localstorage
        });
    }]));

    it('should post to AspNetUser.login service when signIn is called', function () {
        spyOn(service, 'login').and.callThrough();
        scope.signIn();
        deferred.resolve(user);
        scope.$root.$digest();
        expect(service.login).toHaveBeenCalled();
    });
});