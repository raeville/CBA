LoanApp.controller('LoanCalculatorController', function ($scope, $location, CalculatorService) {

    $scope.init = function () {
        $scope.hideResults = true;        
    }

    $scope.calculateLoan = function () {
        var amountOfTheLoan = $scope.amountLoan;
        var annualInterest = $scope.annualInterest;
        var repaymentPeriod = $scope.repaymentPeriod * 12;

        if (amountOfTheLoan.length != 0 && annualInterest.length != 0 && repaymentPeriod.length != 0) {
            Interest = CalculatorService.divide(annualInterest, 100);
            InterestResults = CalculatorService.multiply($scope.amountLoan, Interest);
            Balance = CalculatorService.add(parseInt($scope.amountLoan), parseInt(InterestResults));
            $scope.monthlyPayment = CalculatorService.divide(Balance, parseInt(repaymentPeriod));
            $scope.totalPayment = Balance;
            $scope.totalInterest = InterestResults;
            $scope.hideResults = false;
        }
                  
    };

});