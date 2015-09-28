/// <reference path="../Service/$localstorage.Service.js" />
// Retrieve email address of logged user
LoanApp.directive('myEmail',['$localStorage', function ($localStorage) {

    var emaildropdown = "";
    var username = $localStorage.get('username');
    var role = $localStorage.get('role');


    if (username != null) {

        angular.element('#signin').html('');
        angular.element('#MyProfile').html('<a href="#/MyProfile" ng-show="true" class="list-group-item">My Profile</a>');
 
        if (role.indexOf("Admin") > 1) {
            emaildropdown = '<div class="dropdown"><span class="" type="button" id="dropdownMenu1" data-toggle="dropdown">' + username + '<span class="caret arrowdown"></span></span><ul class="dropdown-menu"><li><a href="#/MyProfile">Profile</a></li><li><a href="#/Customers">Administer User</a></li><li role="separator" class="divider"></li><li><a href="#" ng-click="LogOut()">Log Out</a></li></ul></div>';
            
        } else {
            emaildropdown = '<div class="dropdown"><span class="" type="button" id="dropdownMenu1" data-toggle="dropdown">' + username + '<span class="caret arrowdown"></span></span><ul class="dropdown-menu"><li><a href="#/MyProfile">Profile</a></li><li role="separator" class="divider"></li><li><a href="#" ng-click="LogOut()">Log Out</a></li></ul></div>';
        }      
    }
    return {
        template: emaildropdown
    };
}]);


