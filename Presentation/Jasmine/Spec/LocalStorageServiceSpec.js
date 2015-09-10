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
            "Email": "test5@cba.com",
            "access_token": "2974LErhmJIlyeewjp34lmfZaBpl"
      }
      User = user;
    });
    
    beforeEach(inject(['$localstorage', function ($localstorage) {
        localstorage = $localstorage;
       }]));

    it('should have a Local Storage service to be defined', function () {
        expect(localstorage).toBeDefined();
    });
    //Email
    it('should not have a existing Email upon starting up', function () {
        localstorage.remove('Email');
        expect(localstorage.get('Email')).toBeUndefined();
    });
    //Token
    it('should not have a existing Token upon starting up', function () {
        localstorage.remove('Token');
        expect(localstorage.get('Token')).toBeUndefined();
    });
    //Email
    it('should Set and Get an Email in the local storage', function () {
        localstorage.set('Email', User.Email);
        expect(localstorage.get('Email')).toBe(User.Email);
    });
    //Token
    it('should Set and Get a Token in the local storage', function () {
        localstorage.set('Token', User.access_token);
        expect(localstorage.get('Token')).toBe(User.access_token);
    });
    //Email
    it('should have an Email in local storage after calling Set Local Storage', function () {
        localstorage.set('Email', User.Email);
        expect(localstorage.get('Email')).toBe(User.Email);
    });
    //Token
    it('should have a Token in local storage after calling Set Local Storage', function () {
        localstorage.set('Token', User.access_token);
        expect(localstorage.get('Token')).toBe(User.access_token);
    });
    //Email
    it('should remove the Email from local storage after logging out', function () {
        localstorage.set('Email', User.Email);
        expect(localstorage.get('Email')).toBe(User.Email);
        localstorage.remove('Email');
        expect(localstorage.get('Email')).toBeUndefined();
    });
    //Token
    it('should remove the Token from local storage after logging out', function () {
        localstorage.set('Token', User.access_token);
        expect(localstorage.get('Token')).toBe(User.access_token);
        localstorage.remove('Token');
        expect(localstorage.get('Token')).toBeUndefined();
    });

});
