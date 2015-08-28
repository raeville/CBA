///<reference path="../../angular.min.js" />
///<reference path="../LoanApp.js" />
angular.module("LoanApp").service('AspNetUser', function loginService($http, loanApiConsUrl) {
    var URL = loanApiConsUrl;
    var authenticate = function (user) {
        return $http({ method: 'POST', url: URL + 'Token/', data: user });
    };
    var register = function (user) {
        return $http({ method: 'POST', url: URL + 'api/Account/Register/', data: user });
    };
    return {
        login: authenticate,
        registerUser: register
    }
});