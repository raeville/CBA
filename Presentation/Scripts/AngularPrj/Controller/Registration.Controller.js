LoanApp.controller('RegistrationController', function ($scope, $location, AspNetUser) {

    var registerUser = function () {
        var user = [];
        var email = $scope.userData.inputEmail;
        var password = $scope.userData.inputPassword;
        var confirmpassword = $scope.userData.inputConfirmPassword;

        var user = {
            "Email": email,
            "Password": password,
            "confirmPassword": confirmpassword
        };
        angular.injector(['ng', 'LoanApp']).get("AspNetUser").registerUser(user).success(function () { console.log(response); })
    .error(function () { console.log("Error!") });

    };
    
});