LoanApp.controller('CustomerListController', ['$scope', 'CustomerService', function ($scope, CustomerService) {

    //Customer List
    $scope.customersListInit = function () {
        CustomerService.getCustomers().then(function (results) {
            $scope.Customers = results.data;
            angular.forEach($scope.Customers, function (value, key) {
                if (value.gender == "M") {
                    value.gender = 'Male';
                } else {
                    value.gender = 'Female';
                }
                if (value.maritalStatus == 'S') {
                    value.maritalStatus = 'Single';
                }
                else if (value.maritalStatus == 'M') {
                    value.maritalStatus = 'Married';
                }
                else if (value.maritalStatus == 'L') {
                    value.maritalStatus = 'Legally Separated';
                }
                else if (value.maritalStatus == 'D') {
                    value.maritalStatus = 'Divorced';
                }
                else if (value.maritalStatus == 'W') {
                    value.maritalStatus = 'Widowed';
                }
                value.OrgDelStatus = value.isDeleted;
            });

        }).catch(function (errorResults) {

            $scope.error = 'failure loading Customer List', errorResults;
        });
    }

    //Delete Customer.
   
    $scope.delete = function () {
        $scope.ids = [];
        if ($scope.Customers != null) {
            angular.forEach($scope.Customers, function (customer) {
                if (customer.isDeleted != customer.OrgDelStatus) {
                    $scope.ids.push(customer.id);
                }
            });
            if ($scope.ids != 0) {
                {
                    CustomerService.deleteCustomer($scope.ids).then(function (results) {
                        $scope.confirmationConfirmation = results;
                      //  alert("Deleted Successfully!!");
                    }).catch(function (errorResults) {
                        $scope.error = 'failure loading Customer List', errorResults;
                    });
                }
            }
        }
    };
}]);