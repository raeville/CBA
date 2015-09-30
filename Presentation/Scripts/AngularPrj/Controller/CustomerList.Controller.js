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
			//to do for not found here
			$scope.error = 'failure loading Customer List', errorResults;
		});
	}
   
    //Delete Customer.
   
    $scope.delete = function (customers) {
        if (customers.length.count != 0)
        {
            
            angular.forEach(customers, function (_customers) {
                CustomerService.deleteCustomer(_customers).then(function (results) {
                    $scope.confirmationConfirmation = results;
                }).catch(function (errorResults) {
                    $scope.error = 'failure loading Customer List', errorResults;
                });
             });

            

	    }
	}
	//$scope.checkIndexs = [];
	//$scope.checkIndex = function (customers) {
	//    if ($scope.checkIndexs.indexOf(customers) === -1) {
	//        if (customers.isDeleted == true) {
	//            $scope.checkIndexs.push(customers);
	//        }	       
	//    }	     
	//    else {
	//        $scope.checkIndexs.splice($scope.checkIndexs.indexOf(customers), 1)
	//        }
	//};
}]);