
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
            $('#myModalReg').modal('hide');
            $('#myModalReg').on('hidden.bs.modal', function (e) { $(this).find('input').val('').end() })
            $location.path("/RegisterSuccessful");
              
        }, function (response) {
         $scope.Message = response.modelState[""][1];
        });
    };
    $scope.ClearMessage = function ()
    {
        $scope.Message = "";
    };

}]);