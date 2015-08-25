/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/angular-route.min.js" />
/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
(function () {
    'use strict';

    describe('Loan Application', function () {
        beforeEach(module('LoanApp'));

        it('Is API config should be declare;', inject(function (loanApiConsUrl) {
            expect(loanApiConsUrl).toBe('http://localhost:50671/');
        }));
    });

})();