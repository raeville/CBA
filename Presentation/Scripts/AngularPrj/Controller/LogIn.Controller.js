LoanApp.controller('LoginController', ['$scope', 'AspNetUser', '$location', '$localstorage', function ($scope, AspNetUser, $location, $localstorage) {

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
                //// Set Email and Token to $localstorage
                $localstorage.set('Email', $scope.user.username);
                $localstorage.set('Token', response.data.access_token);
              
                //// Get Email Token to $localstorage
                //* $localstorage.get('Email');
                //* $localstorage.get('Token');

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
    $scope.LogOut = function ()
    {
        $localstorage.$reset();
        $localstorage.remove('Email');
        $location.path("/Index");
    };
}]);