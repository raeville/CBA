LoanApp.controller('LoanCalculatorController', function ($scope, $location, CalculatorService) {
    $scope.onlyNumbers = /^\d+$/;
    $scope.init = function () {
        $scope.hideResults = true;        
    }

    $scope.calculateLoan = function () {
        var amountOfTheLoan = $scope.amountLoan;
        var annualInterest = $scope.annualInterest;
        var repaymentPeriod = $scope.repaymentPeriod;

        if (amountOfTheLoan.length != 0 && annualInterest.length != 0 && repaymentPeriod.length != 0) {
            InterestResults = CalculatorService.multiply($scope.amountLoan, CalculatorService.divide(annualInterest, 100));
            Balance = CalculatorService.add($scope.amountLoan, InterestResults);
            $scope.monthlyPayment = CalculatorService.divide(Balance, $scope.repaymentPeriod);
            $scope.totalPayment = Balance;
            $scope.totalInterest = InterestResults;
            $scope.hideResults = false;

        }
       
       
    

    };

});