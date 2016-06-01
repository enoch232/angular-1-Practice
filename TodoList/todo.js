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
	$scope.finishTodo = function(todo){
		$.ajax({
			type: "PUT",
			url: "http://localhost:3000/api/todos/"+todo._id,
			data: {title: todo.title, finished: true}
		});
		todo.finished = true;

	};
	$scope.unfinishTodo = function(todo){
		$.ajax({
			type: "PUT",
			url: "http://localhost:3000/api/todos/"+todo._id,
			data: {title: todo.title, finished: false}
		});
		todo.finished = false;

	};
	var init = function(){
		$scope.getTodos();
	};
	init();

});