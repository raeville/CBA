'use strict';

LoanApp.controller('LoanCalculatorController', function ($scope, $location) {
    
    $scope.init = function () {
        $scope.hideResults = true;        
    }

    $scope.calculateLoan = function () {

        var amountOfTheLoan = $scope.amountLoan;
        var annualInterest = $scope.annualInterest;
        var repaymentPeriod = $scope.repaymentPeriod;
       

        $scope.monthlyPayment = add;
        $scope.totalPayment = payments;
        $scope.totalInterest = interest;

        $scope.hideResults = false;

    };

});