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
            then(function (response) {
                console.log(response);

            }, function (response) {
                console.log(response)
                $scope.IncorrectPassword = response.error_description;
            });
    };
  $scope.ClearMessage = function ()
    {
      $scope.IncorrectPassword = "";
    };
}]);