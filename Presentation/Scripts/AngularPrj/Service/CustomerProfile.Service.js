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


    var getMaritalStatus = function () {

        return maritalStatus;
    }

    var getSourceOfIncome = function () {

        return sourceOfIncome;
    }

    var token = "";
    //Function to Read All Customers
    var getCustomers = function () {
        return $http({ method: 'GET', url: URL + "/api/Customer", headers: { 'Authorization': 'Bearer ' + token } });
    };

    //Function to Read Customers By id
    var getCustomerById = function (id) {
        return $http.get(URL + "/api/Customer/" + id);
    };

    //Function to create new Customer
    var postCustomer = function (Customer) {
        var request = $http({
            method: "post",
            url: URL + "api/Customer",
            data: Customer
        });
        return request;
    };


    //Function  to Edit Customer 
    var putCustomer = function (Customer) {
        var request = $http({
            method: "put",
            url: URL + "api/Customer",
            data: Customer
        });
        return request;
    };

    //Function to Delete Customer based upon id
    var deleteCustomer = function (id) {
        var request = $http({
            method: "delete",
            url: URL + "/api/Customer/" + id
        });
        return request;
    };

    return {
        getCustomers: authenticate,
        getCustomerById: register,
        postCustomer: authenticate,
        putCustomer: register,
        deleteCustomer: authenticate,
        getMaritalStatus: register,
        getSourceOfIncome : getIncome
    }

}]);