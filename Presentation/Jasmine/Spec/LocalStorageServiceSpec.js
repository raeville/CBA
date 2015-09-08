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
            "Email": "test5@cba.com"
            //"Password": "Password1!"
      }
      User = user;
    });
    
    beforeEach(inject(['$localstorage', function ($localstorage) {
        localstorage = $localstorage;
       }]));

    it('should have a Local Storage service to be defined', function () {
        expect(localstorage).toBeDefined();
    });
    it('should not have a existing Email upon starting up', function () {
        localstorage.remove('Email');
        expect(localstorage.get('Email')).toBeUndefined();
    });
    it('should Set and Get an Email', function () {
        localstorage.set('Email', User.Email);
        expect(localstorage.get('Email')).toBe(User.Email);
    });
    it('should have an Email in local storage after calling Set Local Storage', function () {
        localstorage.set('Email', User.Email);
        expect(localstorage.get('Email')).toBe(User.Email);
    });

    it('should remove the Email from local storage after logging out', function () {
        localstorage.set('Email', User.Email);
        expect(localstorage.get('Email')).toBe(User.Email);
        localstorage.remove('Email');
        expect(localstorage.get('Email')).toBeUndefined();
    });
});
