
LoanApp.controller('RegistrationController', ['$scope', 'AspNetUser', function ($scope, AspNetUser) {
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

        AspNetUser.registerUser(user).
        success(function (response) {
            console.log(response);
        }).
        error(function () {
            console.log("Error!")
        });
    };

}]);