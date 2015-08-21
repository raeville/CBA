///<reference path="../angular.min.js" />
///<reference path="../angular-route.min.js" />
var LoanApp = angular.module("LoanApp", ['ngRoute']);

LoanApp.constant("loanApiConsUrl", "http://localhost:50671/");

LoanApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'Views/Home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/loanCalculator', {
        templateUrl: 'Views/LoanCalculator.html',
        controller: 'LoanCalculatorController'
    });
    $routeProvider.when('/Register', {
        templateUrl: 'Views/Register.html',
    });
    $routeProvider.otherwise({ redirectTo: '/home' });
    //$locationProvider.html5Mode(true);
}]);

