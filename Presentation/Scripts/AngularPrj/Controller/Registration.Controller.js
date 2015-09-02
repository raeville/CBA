
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

        AspNetUser.registerUser(user).success(function (response) {
            $('#myModalReg').modal('hide');
            $location.path("/RegisterSuccessful");
              
            }).error(function (response) {
             $scope.Message = response.Message;
        });
    };

}]);