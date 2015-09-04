
LoanApp.controller('RegistrationController', ['$scope', 'AspNetUser', '$location', function ($scope, AspNetUser, $location) {
    // Do something with myService

    $scope.registerUser = function () {
        var user = {};
        var email = $scope.userData.inputEmail;
        var password = $scope.userData.inputPassword;
        var confirmpassword = $scope.userData.inputConfirmPassword;

        var user = {
            "Email": email,
            "Password": password,
            "ConfirmPassword": confirmpassword
        }

        AspNetUser.registerUser(user).then(function (response) {
            $location.path("/RegisterSuccessful");
            $scope.userData.inputEmail = "";
            $scope.userData.inputPassword = "";
            $scope.userData.inputConfirmPassword = "";

        }, function (response) {
            $scope.Message = response.modelState[""][1];
        });
    };
    $scope.ClearMessage = function () {
        $scope.Message = "";
    };

}]);