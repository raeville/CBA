LoanApp.controller('CustomerProfileController', function ($scope, $location, CustomerProfileService,$filter) {

   
    $scope.Customers = [
            { SI: '1', IsDeleted: 'False', FullName: 'R.R.V', Gender: 'F', BirthDate: '1/1/2001', MaritalStatus: 'S', Address: 'Cebu City', SourceOfIncome: 'Business/Charcoal', IsActive: 'true' },
            { SI: '2', IsDeleted: 'False', FullName: 'J.A.M', Gender: 'F', BirthDate: '1/1/2001', MaritalStatus: 'M', Address: 'Cebu City', SourceOfIncome: 'Business/Charcoal', IsActive: 'false' },
            { SI: '3', IsDeleted: 'False', FullName: 'C.E.U', Gender: 'M', BirthDate: '1/1/2001', MaritalStatus: 'S', Address: 'Cebu City', SourceOfIncome: 'Business/Charcoal', IsActive: 'true' }];
    

    $scope.init = function () {
    }
    $scope.search = function (txtSearch)
    {

        return $filter($scope.Customers, txtSearch);
    }
 
});