LoanApp.controller('LoginController',  ['$scope', 'AspNetUser', function ($scope, AspNetUser) {

    $scope.signIn = function () {
        var user = { };
        var username = $scope.user.username;
        var password = $scope.user.password;


        var user = {
            "username": username,
            "password": password
        };

        AspNetUser.login(user).
            success(function (response) {
                console.log(response);
            }).
            error(function () {
                console.log("Error!")
            });
    };
}]);