/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/angular-route.min.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Service/LocalStorage.Service.js" />
/// <reference path="../../Scripts/AngularPrj/Controller/Logout.Controller.js" />

describe('Logout Controller Test', function () {
    beforeEach(module('LoanApp'));

    var LogoutController;
    var scope;
    var localStorage;
    var q;
    var deferred;
    var $rootScope;
    var window;

    beforeEach(function () {
        localStorage = {
            remove: function () {
            }
        };
        window = {
            location: {
                reload: function () {

                }
            }
        }
    });

    beforeEach(inject(['$rootScope', '$controller', '$localstorage', function ($rootScope, $controller, $localstorage) {
        scope = $rootScope.$new();
        LogoutController = $controller('LogoutController', {
            $scope: scope,
            $localstorage: localStorage,
            $window: window
        });
    }]));

    it('should call localstorage.remove', function () {
        spyOn(localStorage, 'remove').and.callThrough();
        scope.LogOut();
        scope.$root.$digest();
        expect(localStorage.remove).toHaveBeenCalled();
    });

    it('should perform location.reload ', function () {
        spyOn(window.location, 'reload').and.callThrough();
        scope.LogOut();
        scope.$root.$digest();
        expect(window.location.reload).toHaveBeenCalled();
    });
});