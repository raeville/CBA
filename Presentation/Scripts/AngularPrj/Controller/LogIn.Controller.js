LoanApp.controller('LoginController', ['$scope', 'AspNetUser', '$location','$localStorage', '$window', function ($scope, AspNetUser, $location, $localstorage, $window) {

    $scope.signIn = function () {
        var user = {};

        var username = $scope.user.username;
        var password = $scope.user.password;
        var user = {
            "username": username,
            "password": password
        };
        AspNetUser.login(user).then(function (response) {

            if ($scope.user.username != "") {
                //// Set Email and Token in $localstorage
                $localstorage.set('username', $scope.user.username);
                if (angular.isObject($scope.user.access_token) == true || $scope.user.access_token == null)
                    $localstorage.set('access_token', response.data.access_token);

                angular.element('#myModal').hide();
                $window.location.reload();
                $location.path("/loanCalculator");
            }
            $scope.user.username = "";
            $scope.user.password = ""

        }).catch(function (response) {
            if ($scope.user.username != "" && $scope.user.password != "")
            { $scope.IncorrectPassword = response.data.error_description; }
        });
    };
    $scope.ClearMessage = function () {
        $scope.IncorrectPassword = "";
    };
}]);