///<reference path="../../angular.min.js" />
///<reference path="../LoanApp.js" />
LoanApp.controller('CustomerController', ['$scope', '$location', 'CustomerService', '$localStorage', function ($scope, $location, CustomerService, $localStorage) {
    // Customers Profile 
    var username = "";
    $scope.init = function () {
        $scope.maritalstatus = CustomerService.getMaritalStatus();
        $scope.sourceofincome = CustomerService.getSourceOfIncome();        
        $scope.emailAddress = $localStorage.get('username', '');
        username = $scope.emailAddress;
        $scope.getCustomer(username);
        //$scope.getAllCustomers();        
        //$scope.save();
        //$scope.update();
        //$scope.delete();
    }

    $scope.search = function (txtSearch) {
        return $filter($scope.Customers, txtSearch);

    }

     //Function to Load all Employees Records.   
    $scope.getCustomer = function (userName) {

        //var id = "13132";
        var CustomersById = CustomerService.getCustomerById(userName);

        CustomersById.then(function (results) {
            $scope.CustomerByUser = results.data;

            if ($scope.CustomerByUser != '' || $scope.CustomerByUser != null) {

                $scope.hideUpdateButton = true;
                $scope.hideSaveButton = false;

                $scope.firstName = $scope.CustomerByUser.firstName;
                $scope.lastName = $scope.CustomerByUser.lastName;
                $scope.middleName = $scope.CustomerByUser.middleName;
                $scope.homeAddress = $scope.CustomerByUser.address;
            }

            else {

                $scope.hideUpdateButton = false;
                $scope.hideSaveButton = true;

                $scope.firstName = '';
                $scope.lastName = '';
                $scope.middleName = '';
                $scope.homeAddress = '';
            }
            
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });
    }

    //Function to Save Record   
    $scope.save = function () {

        var customerdummy = {
            Id: 1,
            Email: "User@cba.com",
            FirstName: "User First Name",
            MiddleName: "U",
            LastName: "User Last Name",
            Gender: "M",
            Address: "The World",
            BirthDate: new Date(),
            MaritalStatus: "M",
            SourceOfIncome: "Employed",
            IsDeleted: false,
            CreateDate: new Date(),
            UpdateDate: new Date()
        };

        var CustomersToAdd = CustomerService.postCustomer(customerdummy);

        CustomersToAdd.then(function (results) {
            $scope.addConfirmation = results;
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });
    }

    //Function to Save Record   
    $scope.update = function () {

        var customerdummy = {
            Id: 13132,
            Email: "User@cba.com",
            FirstName: "User First Name",
            MiddleName: "U",
            LastName: "User Last Name",
            Gender: "M",
            Address: "The World",
            BirthDate: new Date(),
            MaritalStatus: "M",
            SourceOfIncome: "Employed",
            IsDeleted: false,
            CreateDate: new Date(),
            UpdateDate: new Date()
        };

        var CustomersToUpdate = CustomerService.putCustomer(customerdummy);

        CustomersToUpdate.then(function (results) {
            $scope.updateConfirmation = results;
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });
    }

    //Function to Load all Employees Records.   
    $scope.delete = function () {

        var id = "13132";
        var deleteCustomersById = CustomerService.deleteCustomer(id);
        deleteCustomersById.then(function (results) {
            $scope.confirmationConfirmation = results;
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });

    }

    //Customers List
    $scope.customersInit = function () {
        var customersList = CustomerService.getCustomers();
        customersList.then(function (results) {
            $scope.Customers = results.data;
        }).catch(function (errorResults) {
            //to do for not found here
            $scope.error = 'failure loading Employee', errorResults;
        });
    }
}]);