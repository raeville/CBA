/*global: describe, it, expect, inject*/
(function () {
    'use strict';

    describe('Loan Application', function () {
        beforeEach(module('LoanApp'));

        it('Is API config should be declare;', inject(function (loanApiConsUrl) {
            expect(loanApiConsUrl).toBe('http://localhost:50671/');
        }));
    });

})();