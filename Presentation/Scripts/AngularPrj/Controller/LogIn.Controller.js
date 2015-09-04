LoanApp.controller('LoginController', ['$scope', 'AspNetUser', '$location', function ($scope, AspNetUser, $location) {

    $scope.signIn = function () {
        var user = {};
        var username = $scope.user.username;
        var password = $scope.user.password;

        var user = {
            "username": username,
            "password": password
        };

        AspNetUser.login(user).success(function (response) {
            $location.path("/loanCalculator");
            $scope.user.username = "";
            $scope.user.password = "";

        }).error(function (response) {
            $scope.IncorrectPassword = response.error_description;
        });
    };
    $scope.ClearMessage = function () {
        $scope.IncorrectPassword = "";
    };
}]);