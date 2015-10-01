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
            });

        }).catch(function (errorResults) {

            $scope.error = 'failure loading Customer List', errorResults;
        });
    }

    //Delete Customer.
    $scope.delete = function () {
        if ($scope.checkIndexs.count != 0) {
            CustomerService.deleteCustomer($scope.checkIndexs).then(function (results) {
                $scope.confirmationConfirmation = results;
            }).catch(function (errorResults) {
                $scope.error = 'failure loading Customer List', errorResults;
            });
        }
    }
    $scope.checkIndexs = [];
    $scope.checkIndex = function (customers) {
        if ($scope.checkIndexs.indexOf(customers) === -1) {
            $scope.checkIndexs.push(customers);
            var a = $scope.checkIndexs.indexOf(customers);
        }
        else {
            $scope.checkIndexs.splice($scope.checkIndexs.indexOf(customers), 1)
            $scope.checkIndexs.push(customers);
        }
    };
}]);