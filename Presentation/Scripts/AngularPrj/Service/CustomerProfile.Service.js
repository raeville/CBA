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








}]);