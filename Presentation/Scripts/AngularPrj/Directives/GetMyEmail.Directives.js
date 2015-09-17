﻿/// <reference path="../Service/$localstorage.Service.js" />
// Retrieve email address of logged user
LoanApp.directive('myEmail', function ($localstorage) {

    var message = "";
    if ($localstorage.get('username') != null) {

        angular.element('#signin').html('');
        angular.element('#logout').html('<a href="#" ng-click="LogOut()">Log out</a>');
        message = 'Welcome, ' + $localstorage.get('username');
        angular.element('#MyProfile').html('<a href="#/MyProfile" ng-show="true" class="list-group-item">My Profile</a>');
    }
    return {
        template: message
    };
});


