LoanApp.controller('LoginController', ['$scope', 'AspNetUser', '$location', '$localstorage', '$window', function ($scope, AspNetUser, $location, $localstorage, $window) {

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
                $localstorage.set('Email', $scope.user.username);
                $localstorage.set('Token', response.data.access_token);

                angular.element('#myModal').modal('hide');
                $window.location.reload();
                $location.path("/loanCalculator");
            }
            $scope.user.username = "";
            $scope.user.password = ""

        }).catch(function (response) {
            if ($scope.user.username != "" && $scope.user.password!= "")
            { $scope.IncorrectPassword = response.data.error_description; }
        
        });
    };
    $scope.ClearMessage = function () {
        $scope.IncorrectPassword = "";
    };

}]);