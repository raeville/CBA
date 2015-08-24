/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/angular-route.min.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />

describe('Routing Config', function () {
    beforeEach(module('LoanApp'));

    it('should map /home to HomeController', function () {
        inject(function ($route) {
            expect($route.routes['/home'].controller).toBe('HomeController');
            expect($route.routes['/home'].templateUrl).
              toEqual('Views/Home.html');
        });
    });

    it('should map /loanCalculator to LoanCalculatorController', function () {
        inject(function ($route) {
            expect($route.routes['/loanCalculator'].templateUrl).
              toEqual('Views/LoanCalculator.html');
            expect($route.routes['/loanCalculator'].controller).
              toEqual('LoanCalculatorController');
        });
    });

    it('should map everything else to HomeController', function () {
        inject(function ($route) {
            expect($route.routes[null].redirectTo).toEqual('/home')
        });
    });
});