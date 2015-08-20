/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/angular-route.min.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />

it('should map routes to controllers', function () {
    module('LoanApp');

    inject(function ($route) {

        expect($route.routes['/home'].controller).toBe('HomeController');
        expect($route.routes['/home'].templateUrl).
          toEqual('Views/Home.html');

        expect($route.routes['/loanCalculator'].templateUrl).
          toEqual('Views/LoanCalculator.html');
        expect($route.routes['/loanCalculator'].controller).
          toEqual('LoanCalculatorController');

        // otherwise redirect to
        expect($route.routes[null].redirectTo).toEqual('/home')
    });
});