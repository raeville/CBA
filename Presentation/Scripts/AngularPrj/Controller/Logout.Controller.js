LoanApp.controller('LogoutController', ['$scope', '$localstorage', '$window', function ($scope, $localstorage, $window) {
    $scope.LogOut = function () {
        $localstorage.remove('Email');
        $localstorage.remove('Token');
        $window.location.reload();
    };
}]);

