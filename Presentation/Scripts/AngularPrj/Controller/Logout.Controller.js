LoanApp.controller('LogoutController', ['$scope', '$localstorage', '$window', function ($scope, $localstorage, $window) {
    $scope.LogOut = function () {
        $localstorage.remove('username');
        $localstorage.remove('access_token');
        $window.location.reload();
    };
}]);

