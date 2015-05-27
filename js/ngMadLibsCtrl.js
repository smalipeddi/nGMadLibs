myapp = angular.module('MyApp',[]);
myapp.controller('ngMadLibsCtrl',['$scope', function($scope) {
      
      $scope.keywords =[ 
         {ph: 'name',
         type:'text',
         name:'name',
         value: '' },
         {ph: 'city',
         type:'text',
         name:'city',
         value: '' },
         {ph: 'years',
         type:'number',
         name:'years',
         value: '' }];

     $scope.save=function(){
     	var result;
     	$scope.myVar = !$scope.myVar;
     }
     	
         
    
     $scope.save();
}]);