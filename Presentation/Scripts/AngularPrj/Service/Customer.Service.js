///<reference path="../../angular.min.js" />
///<reference path="../LoanApp.js" />
LoanApp.service('CustomerService', ['$http', 'loanApiConsUrl', '$localStorage', function ( $http, loanApiConsUrl, $localStorage) {
    var URL = loanApiConsUrl;

    var maritalStatus = [ 
        { "value": "S", "status": "Single" },
        { "value": "M", "status": "Married" },
        { "value": "L", "status": "Legally Separated" },
        { "value": "D", "status": "Divorced" },
        { "value": "W", "status": "Widowed" }
    ];

    var sourceOfIncome = [
        { "id": "Business", "source": "Business" },
        { "id": "Employment", "source": "Employment" }
    ];


    var getMStatus = function () {

        return maritalStatus;
    }

    var getSIncome = function () {

        return sourceOfIncome;
    }

    var token = $localStorage.get('access_token', '');

    //Function to Read All Customers
    var getAll = function () {
        return $http({ method: 'GET', url: URL + "api/Customer", headers: { 'Authorization': 'Bearer ' + token } });
    };

    //Function to Read Customers By id
    var getById = function (userName) {
        return $http({ method: 'GET', url: URL + "api/Customer?userName=" + userName, headers: { 'Authorization': 'Bearer ' + token } });
    };

    //Function to create new Customer
    var post = function (Customer) {
        return $http({ method: "post", url: URL + "api/Customer", data: Customer, headers: { 'Authorization': 'Bearer ' + token } });
    };


    //Function  to Edit Customer 
    var put = function (Customer) {
        return $http({ method: "put", url: URL + "api/Customer", data: Customer, headers: { 'Authorization': 'Bearer ' + token } });
    };

    //Function to Delete Customer based upon id
    var deleteF = function (Customer) {
        return $http({ method: "delete", url: URL + "api/Customer", data: Customer, headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' } });
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