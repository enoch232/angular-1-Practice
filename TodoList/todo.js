var todoList = angular.module('todoList',[]);
todoList.controller('todoController',function($scope){
	$scope.todos = ["Nothing","much","todo"];
});