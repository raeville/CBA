LoanApp.controller('LoginController', ['$scope', 'AspNetUser', '$location', function ($scope, AspNetUser, $location) {

    $scope.signIn = function () {
        var user = {};
        var username = $scope.user.username;
        var password = $scope.user.password;

        var user = {
            "username": username,
            "password": password
        };

        AspNetUser.login(user).then(function (response) {
            $location.path("/loanCalculator");
            if ($scope.user.username != "") {
                //// Set Email to $localstorage
                //$localstorage.set('Email', $scope.user.username);

                //// Get Email to $localstorage
                //* $localstorage.get('Email');

            }
            $scope.user.username = "";
            $scope.user.password = ""

        }).catch(function (response) {
            $scope.IncorrectPassword = response.error_description;
        });
    };
    $scope.ClearMessage = function () {
        $scope.IncorrectPassword = "";
    };
    $scope.LogOut = function ()
    {
        $localStorage.$reset();
        $localstorage.remove('Email');
        $location.path("/Index");
    };
}]);