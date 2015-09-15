///<reference path="../../angular.min.js" />
///<reference path="../LoanApp.js" />
angular.module("LoanApp").service('CustomerProfileService', function customerProfileService($http, $q, loanApiConsUrl) {
    var URL = loanApiConsUrl;
  
    //Function to Read All Marital Status
    //this.getMaritalStatus = function () {
    //    var deferred = $q.defer();
    //    $http.get('data/MaritalStatus.json').success(function (data, s) {
    //        deferred.resolve(data);
    //    }).error(function (err, s) {
    //        deferred.reject(err);
    //    });
    //    return deferred.promise;
    //}

});