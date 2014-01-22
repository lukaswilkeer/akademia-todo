
var todoApp = angular.module('todoApp',[]);

todoApp.controller('TodoCtrl', function($scope) {

    $scope.todos = [
	    
	    {id: 1,text: 'Nexus S', done:"fast phone"},
	    {id: 2, text: 'Iphone 5 S', done:"Best phone ever"},
	    {id: 33, text: 'Geeks phone Peak', one:"A new breed of phone"}
	 ];

	 $scope.addTodo = function() {

	 }

});