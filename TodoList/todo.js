var todoList = angular.module('todoList',[]);
todoList.controller('todoController',function($scope,$http){
	$scope.todos;
	$scope.getTodos = function(){
		$http.get("http://localhost:3000/api/todos").success(function(response){
			$scope.todos = response;
		});
	}

	$scope.addTodo = function(){
		$scope.todos.push({title: $scope.todoInput});
		$.ajax({
			type: "POST",
			url: "http://localhost:3000/api/todos",
			data: {title: $scope.todoInput},
		});
	}
	var init = function(){
		$scope.getTodos();
	};
	init();

});