LoanApp.controller('LoginController', function ($scope, $location, AspNetUser) {

    var sigIn = function () {
        var user = [];
        var username = $scope.user.username;
        var password = $scope.user.password;


        var user = {
            "username": username,
            "password": password
        };

        AspNetUser.login(user);
    };
    
});