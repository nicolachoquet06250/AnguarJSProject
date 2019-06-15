const ViewExt = 'html';

const modules = {
	TodoList: {
		dependencies: ["ngRoute"],
		controllers: {
			TodoListController: AngularControllers.TodoListController
		},
		directives: {
			ngMenu: {
				templateUrl: '/app/mvc/views/menu.html',
				func: Directives['menu']
			}
		}
	}
};