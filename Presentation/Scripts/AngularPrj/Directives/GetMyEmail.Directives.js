/// <reference path="../Service/LocalStorage.Service.js" />
// Retrieve email address of logged user


//var email = $localstorage.get('Email');
//alert(email)

LoanApp.directive('myEmail', function ($localstorage) {

    if ($localstorage.get('Email') != null) {
        angular.element('#signin').html('');
        angular.element('#logout').html('<a href="#" ng-click="LogOut()">Log out</a>');
        return {
            template: 'Welcome, ' + $localstorage.get('Email')
        };
    }
});


