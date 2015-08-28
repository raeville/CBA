///<reference path="../../angular.min.js" />
///<reference path="../LoanApp.js" />
angular.module("LoanApp").service('AspNetUser', function loginService($http, loanApiConsUrl) {
    var authenticate = function (user) {
        var URL = loanApiConsUrl + 'Token/';
        return $http({ method: 'POST', url: URL, data: user });
    };

    return {
        login: authenticate
    }
});