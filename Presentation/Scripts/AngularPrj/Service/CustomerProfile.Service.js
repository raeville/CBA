///<reference path="../../angular.min.js" />
///<reference path="../LoanApp.js" />
LoanApp.service('CustomerProfileService',['$http', 'loanApiConsUrl', function ($http, loanApiConsUrl, $localStorage) {
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


    var getMStatus = function () {

        return maritalStatus;
    }

    var getSIncome = function () {

        return sourceOfIncome;
    }

    var token = $localstorage.get('access_token', '');
    //Function to Read All Customers
    var getAll = function () {
        return $http({ method: 'GET', url: URL + "/api/Customer", headers: { 'Authorization': 'Bearer ' + token } });
    };

    //Function to Read Customers By id
    var getById = function (id) {
        return $http({ method: 'GET', url: URL + "/api/Customer" + id, headers: { 'Authorization': 'Bearer ' + token } });
    };

    //Function to create new Customer
    var post = function (Customer) {
        return $http({ method: "post", url: URL + "api/Customer", data: Customer, headers: { 'Authorization': 'Bearer ' + token } });
    };


    //Function  to Edit Customer 
    var put = function (Customer) {
        request = $http({ method: "put", url: URL + "api/Customer", data: Customer, headers: { 'Authorization': 'Bearer ' + token } });
    };

    //Function to Delete Customer based upon id
    var deleteF = function (id) {
        request = $http({ method: "delete", url: URL + "/api/Customer/" + id, headers: { 'Authorization': 'Bearer ' + token } });
    };

    return {
        getCustomers: getAll,
        getCustomerById: getById,
        postCustomer: post,
        putCustomer: put,
        deleteCustomer: deleteF,
        getMaritalStatus: getMStatus,
        getSourceOfIncome: getSIncome
    }

}]);