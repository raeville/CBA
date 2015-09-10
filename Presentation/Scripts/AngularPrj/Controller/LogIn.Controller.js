LoanApp.controller('LoginController', ['$scope', 'AspNetUser', '$location', '$localstorage', '$window', function ($scope, AspNetUser, $location, $localstorage, $window) {
   
    $scope.signIn = function () {
        var user = {};
     
        var username = $scope.user.username;
        var password = $scope.user.password;
        var access_token = $scope.user.access_token;
        var user = {
            "username": username,
            "password": password,
            "access_token": access_token
        };

        
        AspNetUser.login(user).then(function (response) {
            console.log(user);
            console.log(response);
            console.log(response.data);
            if ($scope.user.username != "") {
                //// Set Email and Token in $localstorage
                $localstorage.set('username', $scope.user.username);
                if ($scope.user.access_token != "") {
                    $localstorage.set('access_token', $scope.user.access_token);
                }
                else {
                    $localstorage.set('access_token', response.data.access_token);
                }
             angular.element('#myModal').hide();
                //$window.location.reload();
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