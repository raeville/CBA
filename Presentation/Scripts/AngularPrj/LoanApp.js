///<reference path="../angular.min.js" />
///<reference path="../angular-route.min.js" />
var LoanApp = angular.module("LoanApp", ['ngRoute']);

LoanApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/loanCalculator', {
        templateUrl: 'Views/LoanCalculator.html',
        controller: 'LoanCalculatorController'
    });
    $routeProvider.otherwise({ redirectTo: '/loanCalculator' });
    $locationProvider.html5Mode(true);
}]);