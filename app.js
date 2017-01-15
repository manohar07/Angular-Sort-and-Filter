angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchname   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'Sai', type: 'awesome 1', marks: 100 },
    { name: 'Manu', type: 'awesome 2', marks: 100 },
    { name: 'Ravi', type: 'awesome 3', marks: 100 },
    { name: 'Abhi', type: 'awesome 4', marks: 100}
  ];
  
});