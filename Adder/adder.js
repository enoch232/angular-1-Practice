var app1 = angular.module('app1',[]);
app1.controller('adderController',function($scope){
	$scope.increment = function(){
		$scope.number = $scope.number + 1;
	}
});