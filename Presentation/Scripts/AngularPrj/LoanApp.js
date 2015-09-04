///<reference path="../angular.min.js" />
///<reference path="../angular-route.min.js" />
var LoanApp = angular.module("LoanApp", ['ngRoute']);

LoanApp.constant("loanApiConsUrl", "http://localhost:51361/");

LoanApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/ContactUs', {
        templateUrl: 'Views/ContactUs.html',
        controller: ''
    });
    //$routeProvider.when('/home', {
    //    templateUrl: 'Views/Index.html',
    //    controller: 'HomeController'
    //});
    $routeProvider.when('/loanCalculator', {
        templateUrl: 'Views/LoanCalculator.html',
        controller: 'LoanCalculatorController'
    });
    $routeProvider.when('/Register', {
        templateUrl: 'Views/Register.html',
        controller: ''
    });
    $routeProvider.when('/FinacialService', {
        templateUrl: 'Views/FinacialService.html',
        controller: ''
    });
    $routeProvider.when('/TermOfUse', {
        templateUrl: 'Views/TermOfUse.html',
        controller: ''
    });
    $routeProvider.when('/PrivacyPolicy', {
        templateUrl: 'Views/PrivacyPolicy.html',
        controller: ''
    });
    $routeProvider.when('/RegisterSuccessful', {
        templateUrl: 'Views/RegisterSuccessful.html',
        controller: ''
    });
    $routeProvider.when('/Index', {
        templateUrl: 'Views/Index.html',
        controller: ''
    });
    //$routeProvider.otherwise({ redirectTo: '/home' });
    //$locationProvider.html5Mode(true);
}]);



