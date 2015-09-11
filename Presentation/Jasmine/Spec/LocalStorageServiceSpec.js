/// <reference path="../lib/jasmine.js" />
/// <reference path="../../Scripts/angular.min.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/AngularPrj/LoanApp.js" />
/// <reference path="../../Scripts/AngularPrj/Service/LocalStorage.Service.js" />




describe('Local Storage Service Unit Tests', function () {
    beforeEach(module('LoanApp'));
    var localstorage;
    var User;
    beforeEach(function () {
      var  user = {
          "username": "test5@cba.com",
          "access_token": "2974RArhyMUlmeewjp34lmfDaBpl"
      }
      User = user;
    });
    
    beforeEach(inject(['$localstorage', function ($localstorage) {
        localstorage = $localstorage;
       }]));

    it('should have a Local Storage service to be defined', function () {
        expect(localstorage).toBeDefined();
    });
    //username
    it('should not have a existing username upon starting up', function () {
        localstorage.remove('username');
        expect(localstorage.get('username')).toBeUndefined();
    });
    //access_token
    it('should not have a existing access_token upon starting up', function () {
        localstorage.remove('access_token');
        expect(localstorage.get('access_token')).toBeUndefined();
    });
    //username
    it('should Set and Get an username in the local storage', function () {
        localstorage.set('username', User.username);
        expect(localstorage.get('username')).toBe(User.username);
    });
    //access_token
    it('should Set and Get a access_token in the local storage', function () {
        localstorage.set('access_token', User.access_token);
        expect(localstorage.get('access_token')).toBe(User.access_token);
    });
    //username
    it('should have an username in local storage after calling Set Local Storage', function () {
        localstorage.set('username', User.username);
        expect(localstorage.get('username')).toBe(User.username);
    });
    //access_token
    it('should have a access_token in local storage after calling Set Local Storage', function () {
        localstorage.set('access_token', User.access_token);
        expect(localstorage.get('access_token')).toBe(User.access_token);
    });
    //access_token
    it('should remove the username from local storage after logging out', function () {
        localstorage.set('username', User.username);
        expect(localstorage.get('username')).toBe(User.username);
        localstorage.remove('username');
        expect(localstorage.get('username')).toBeUndefined();
    });
    //access_token
    it('should remove the access_token from local storage after logging out', function () {
        localstorage.set('access_token', User.access_token);
        expect(localstorage.get('access_token')).toBe(User.access_token);
        localstorage.remove('access_token');
        expect(localstorage.get('access_token')).toBeUndefined();
    });

});
