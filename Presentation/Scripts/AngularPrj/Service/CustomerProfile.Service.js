///<reference path="../../angular.min.js" />
///<reference path="../LoanApp.js" />
LoanApp.service('CustomerProfileService',['$http', 'loanApiConsUrl', function ($http, loanApiConsUrl) {
    var URL = loanApiConsUrl;

    var maritalStatus = [ 
        { "value": 1, "status": "Single" },
        { "value": 2, "status": "Married" },
        { "value": 3, "status": "Legally Separated" },
        { "value": 3, "status": "Divorced" },
        { "value": 3, "status": "Widowed" }
    ];

    var sourceOfIncome = [
        { "id": 1, "source": "Business" },
        { "id": 2, "source": "Employment" }
    ];


    this.getMaritalStatus = function () {

        return maritalStatus;
    }

    this.getSourceOfIncome = function () {

        return sourceOfIncome;
    }

  
    //Function to Read All Customers
    this.getCustomers = function () {
        return $http.get(URL + "/api/Customer");
    };

    //Function to Read Customers By id
    this.getCustomerById = function (id) {
        return $http.get(URL + "/api/Customer/" + id);
    };

    //Function to create new Customer
    this.postCustomer = function (Customer) {
        var request = $http({
            method: "post",
            url: URL + "api/Customer",
            data: Customer
        });
        return request;
    };


    //Function  to Edit Customer 
    this.putCustomer = function (Customer) {
        var request = $http({
            method: "put",
            url: URL + "api/Customer",
            data: Customer
        });
        return request;
    };

    //Function to Delete Customer based upon id
    this.deleteCustomer = function (id) {
        var request = $http({
            method: "delete",
            url: URL + "/api/Customer/" + id
        });
        return request;
    };



}]);