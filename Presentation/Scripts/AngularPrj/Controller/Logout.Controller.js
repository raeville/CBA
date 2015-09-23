LoanApp.controller('LogoutController', ['$scope', '$window', '$localStorage', function ($scope, $window, $localStorage) {
    $scope.LogOut = function () {
        $localStorage.remove('username');
        $localStorage.remove('access_token');
        $localStorage.remove('role');
        $window.location.reload();
    };
}]);

