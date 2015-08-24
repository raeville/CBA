/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/angular-route.min.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Service/LoanCalculator.Service.js" />
/// <reference path="../../Scripts/AngularPrj/Controller/LoanCalculator.Controller.js" />

describe('Calculator Service test', function () {
    describe('when I call CalculatorService', function () {

        it('should add two numbers', function () {

            myTestFunction = function (calcService) {
                var r = calcService.add(2, 3);
                expect(r).toEqual(5);
            }
            //we only need the following line if the name of the 
            //parameter in myTestFunction is not 'CalculatorService' or if
            //the code is going to be minify.
            myTestFunction.$inject = ['CalculatorService'];

            var myInjector = angular.injector(['LoanApp']);
            myInjector.invoke(myTestFunction);            
        })

        it('should subtract two numbers', function () {

            myTestFunction = function (calcService) {
                var r = calcService.subtract(3, 2);
                expect(r).toEqual(1);
            }
            //we only need the following line if the name of the 
            //parameter in myTestFunction is not 'CalculatorService' or if
            //the code is going to be minify.
            myTestFunction.$inject = ['CalculatorService'];

            var myInjector = angular.injector(['LoanApp']);
            myInjector.invoke(myTestFunction);
        })

        it('should divide two numbers', function () {

            myTestFunction = function (calcService) {
                var r = calcService.divide(6, 2);
                expect(r).toEqual(3);
            }
            //we only need the following line if the name of the 
            //parameter in myTestFunction is not 'CalculatorService' or if
            //the code is going to be minify.
            myTestFunction.$inject = ['CalculatorService'];

            var myInjector = angular.injector(['LoanApp']);
            myInjector.invoke(myTestFunction);
        })

        it('should multiply two numbers', function () {

            myTestFunction = function (calcService) {
                var r = calcService.multiply(3, 3);
                expect(r).toEqual(9);
            }
            //we only need the following line if the name of the 
            //parameter in myTestFunction is not 'CalculatorService' or if
            //the code is going to be minify.
            myTestFunction.$inject = ['CalculatorService'];

            var myInjector = angular.injector(['LoanApp']);
            myInjector.invoke(myTestFunction);
        })      
    })
});