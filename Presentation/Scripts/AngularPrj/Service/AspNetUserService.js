///<reference path="../../angular.min.js" />
angular.module("LoanApp").service('AspNetUser', function loginService($http) {
    var authenticate = function (info) {
        return $http({ method: 'POST', url: '/Token/', data: info });
    };

    return {
        authenticate: authenticate
    }

    function registerUser(userData) {
        var serverBaseUrl = "http://localhost:51361/";
        var register = serverBaseUrl + 'api/Account/Register';
        $http({
            method: 'POST',
            url: register,
            data: userData
        }).done(function (data) {
            console.log("success!");
        }).fail(showError);
    }
    
});