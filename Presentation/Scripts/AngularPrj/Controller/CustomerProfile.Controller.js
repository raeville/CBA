///<reference path="../../angular.min.js" />
///<reference path="../LoanApp.js" />
LoanApp.controller('CustomerProfileController',['$scope', '$location', 'CustomerProfileService', function ($scope, $location, CustomerProfileService) {

    $scope.init = function () {

        $scope.maritalstatus = CustomerProfileService.getMaritalStatus();
        $scope.sourceofincome = CustomerProfileService.getSourceOfIncome();
    }


  

    
}]);