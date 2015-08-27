///<reference path="../../angular.min.js" />
angular.module("LoanApp").service('AspNetUser', function loginService($http) {
    var authenticate = function (info) {
        return $http({ method: 'POST', url: '/Token/', data: info });
    };

    return {
        authenticate: authenticate
    }
});