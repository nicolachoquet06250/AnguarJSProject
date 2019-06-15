const components = {
	home: {
		template: '<h1>Home</h1><p>Hello, {{ $ctrl.name }} !</p>',
		bindings: {
			user: '<'
		},
		controller: function () {
			this.user = 'world';
		}
	}
};