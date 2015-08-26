///<reference path="../../angular.min.js" />
LoanApp.service('loginService', function loginService($http) {
    var authenticate = function (info) {
        return $http({ method: 'POST', url: '/Token/', data: info });
    };

    return {
        authenticate: authenticate
    }
});