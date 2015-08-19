var LoanApp = angular.module("LoanApp", ['ngRoute']);
var ConsConnLoanApi = angular.module('ConsConLoanApi', [])
{
    ConsConnLoanApi.constant("http://localhost:50671/", loanApiConsUrl);
}