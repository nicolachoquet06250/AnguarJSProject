const AngularControllers = {
	TodoListController: function ($scope, $sce) {
		$scope.OnLoad = () => {
			$scope.initTodoList();
			$scope.TodoLoadedStyle = $scope.LoadStyle;
			$scope.Part2LoadedStyle = $scope.UnLoadStyle;
		};
		$scope.OnUnload = () => {
			$scope.TodoLoadedStyle = $scope.UnLoadStyle;
			$scope.Part2LoadedStyle = $scope.LoadStyle;
			$scope.unInitTodoList();
		};

		$scope.OnCopy = () => {
			console.log('copié');
		};

		$scope.OnPast = () => {
			console.log('collé')
		};

		$scope.LoadStyle = { display: 'block' };
		$scope.UnLoadStyle = { display: 'none' };

		$scope.initTodoList = () => {
			$scope.title = 'Todo List';
			$scope.todos = [{
				text:'learn AngularJS',
				done:true
			}, {
				text:'build an AngularJS app',
				done:false
			}];
			$scope.myHtmlVar = "<a href='http://benohead.com'>benohead.com</a>";
		};
		$scope.unInitTodoList = () => {
			$scope.title = 'Todo List';
			$scope.todos = [];
			$scope.myHtmlVar = "<a href='http://benohead.com'>benohead.com</a>";
		};

		$scope.loaded = true;
		$scope.initTodoList();

		$scope.addTodo = () => {
			$scope.todos.push({text:$scope.todoText, done:false});
			$scope.todoText = '';
		};
		$scope.trustAsHtml = html => $sce.trustAsHtml(html);
		$scope.remaining = () => {
			let count = 0;
			angular.forEach($scope.todos, function(todo) {
				count += todo.done ? 0 : 1;
			});
			return count;
		};
		$scope.archive = () => {
			let oldTodos = $scope.todos;
			$scope.todos = [];
			angular.forEach(oldTodos, function(todo) {
				if (!todo.done) $scope.todos.push(todo);
			});
		};

		$scope.$watch('loaded', function (newValue, oldValue, scope) {
			newValue ? $scope.OnLoad() : $scope.OnUnload();
		})
	}
};