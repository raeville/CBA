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
	$scope.delete = function (Customers) {
	
		var id = "13132";
		var deleteCustomersById = CustomerService.deleteCustomer(id);
	//	angular.forEach(Customers, function (value, key) {
		console.log(Customers);
	//	});
		CustomerService.deleteCustomer(id).then(function (results) {
			$scope.confirmationConfirmation = results;
		}).catch(function (errorResults) {
			//to do for not found here
			$scope.error = 'failure loading Customer List', errorResults;
		});


		//angular.forEach($scope.albums, function (album) {
		//	if (!!album.selected) $scope.albumNameArray.push(album.name);
		//})

	}
	$scope.setValue = function (isActive) {
		//$scope.Customers.isActive = false;
		var a = isActive;
		
	};

}]);