/// <reference path="../Service/$localstorage.Service.js" />
// Retrieve email address of logged user
LoanApp.directive('myEmail',['$localStorage', function ($localStorage) {

    var message = "";
    var username = $localStorage.get('username');

    if (username != null) {

        angular.element('#signin').html('');
        angular.element('#logout').html('<a href="#" ng-click="LogOut()">Log out</a>');
        message = 'Welcome, ' + username;
        angular.element('#MyProfile').html('<a href="#/MyProfile" ng-show="true" class="list-group-item">My Profile</a>');

    }
    return {
        template: message
    };
}]);


