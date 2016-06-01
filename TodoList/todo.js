var todoList = angular.module('todoList',[]);
todoList.controller('todoController',function($scope,$http){
	$scope.todos;
	$scope.getTodos = function(){
		$http.get("http://localhost:3000/api/todos").success(function(response){
			$scope.todos = response;
		});
	};
	$scope.addTodo = function(){
		$scope.todos.push({title: $scope.todoInput});
		$.ajax({
			type: "POST",
			url: "http://localhost:3000/api/todos",
			data: {title: $scope.todoInput}
		});
		$scope.todoInput = "";
		$("#title").focus();
		$scope.getTodos();
	};
	$scope.finishTodo = function(id, title){
		$.ajax({
			type: "PUT",
			url: "http://localhost:3000/api/todos/"+id,
			data: {title: title, finished: true}
		});
		$scope.getTodos();
	};
	$scope.unfinishTodo = function(id, title){
		$.ajax({
			type: "PUT",
			url: "http://localhost:3000/api/todos/"+id,
			data: {title: title, finished: false}
		});
		$scope.getTodos();
	};
	var init = function(){
		$scope.getTodos();
	};
	init();

});