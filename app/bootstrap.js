for (let _module in modules) {
	let module = modules[_module];
	let directives = module.directives;
	let controllers = module.controllers;

	let app = angular.module(_module, module.dependencies);
	for(let component in components) app.component(component, components[component]);
	app.config(function ($routeProvider) {
		for(let route in routing) {
			$routeProvider
				.when(route, routing[route]);
		}
	});
	for(let service in services) app.service(service, services[service]);
	for(let controller in controllers) app.controller(controller, controllers[controller]);
	for(let directive in directives) {
		let _directive = directives[directive];
		app.directive(directive, function () {
			return _directive.func('/AngularJSProject' + _directive.templateUrl);
		})
	}
	for(let pipe in pipes) app.filter(pipe, pipes[pipe]);
}