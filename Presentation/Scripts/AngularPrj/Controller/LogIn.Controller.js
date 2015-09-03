LoanApp.controller('LoginController', ['$scope', 'AspNetUser', '$location', function ($scope, AspNetUser, $location) {

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
                $('#myModal').modal('hide');
                $('#myModal').on('hidden.bs.modal', function (e) { $(this).find('input').val('').end() })
                $location.path("/loanCalculator");

            }).
            error(function (response) {
                console.log(response)
                $scope.IncorrectPassword = response.error_description;
            });
    };
  $scope.ClearMessage = function ()
    {
      $scope.IncorrectPassword = "";
    };
}]);