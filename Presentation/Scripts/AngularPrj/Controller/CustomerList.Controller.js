LoanApp.controller('CustomerListController', ['$scope', 'CustomerService', function ($scope, CustomerService) {

    //Customer List
    $scope.customersListInit = function () {
        CustomerService.getCustomers().then(function (results) {
            $scope.Customers = results.data;
            angular.forEach($scope.Customers, function (value, key) {
                if (value.gender == "M") {
                    value.gender = 'Male';
                } else {
                    vvalue.gender = 'Female';
                }
                if (value.maritalStatus == 'M') {
                    value.maritalStatus = 'Married';
                }
            });

        }).catch(function (errorResults) {

            $scope.error = 'failure loading Customer List', errorResults;
        });
    }

    //Delete Customer.
    $scope.delete = function () {
        if ($scope.checkIndexs.count != 0) {
            angular.forEach($scope.checkIndexs, function (customer) {
                CustomerService.deleteCustomer(customer).then(function (results) {
                    $scope.confirmationConfirmation = results;
                }).catch(function (errorResults) {
                    $scope.error = 'failure loading Customer List', errorResults;
                });
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