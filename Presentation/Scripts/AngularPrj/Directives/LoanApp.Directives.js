LoanApp.directive('validPassword', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {

            ctrl.$setValidity('notMatch', true);

            attrs.$observe('validPassword', function (newVal) {
                if (newVal === 'true') {
                    ctrl.$setValidity('notMatch', true);
                } else {
                    ctrl.$setValidity('notMatch', false);
                }
            });
        }
    }
})

