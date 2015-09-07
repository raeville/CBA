/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Controller/Registration.Controller.js" />

describe('Registration Controller', function () {
    beforeEach(module('LoanApp'));

    var regCtrl;
    var scope;
    var mockService;
    var q;
    var deferred;
    var user;
    var $rootScope;
    
    beforeEach(function () {
        user = {
            "Email": "test5@cba.com",
            "Password": "Password1!",
            "ConfirmPassword": "Password1!"
        }
        mockService = {
            registerUser: function () {
                deferred = q.defer();
                return deferred.promise;
            }
        };
    });

    beforeEach(inject(['$rootScope', '$controller', '$q', function ($rootScope, $controller, $q) {
        q = $q;
        scope = $rootScope.$new();
        scope.user = user;

        loginCtrl = $controller('RegistrationController', {
            $scope: scope,
            AspNetUser: mockService
        });
    }]));

    it('should post to AspNetUser.register service when registerUser is called', function () {
        spyOn(mockService, 'registerUser').and.callThrough();        
        scope.registerUser();
        deferred.resolve(user);
        scope.$root.$digest();
        expect(mockService.registerUser).toHaveBeenCalled();
    });


    
});