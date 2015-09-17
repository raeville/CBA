LoanApp.controller('LogoutController', ['$scope', '$window', '$localStorage', function ($scope, $localStorage, $window) {
    $scope.LogOut = function () {
        $localStorage.remove('username');
        $localStorage.remove('access_token');
        $window.location.reload();
    };
}]);

