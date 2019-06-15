const path_prefix = '/AngularJSProject';
[
	'https://code.jquery.com/jquery-3.4.1.js',
	'http://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.js',
	'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js',
	'/app/config.js',
	'/app/angular/filters/pipes.js',
	'/app/angular/services/services.js',
	'/app/mvc/angularControllers.js',
	'/app/mvc/models.js',
	'/app/mvc/directives.js',
	'/app/modules.js',
	'/app/bootstrap.js'
].forEach(script => {
	let scriptToLoad = document.createElement('script');
	if(script.indexOf('http://') !== -1 || script.indexOf('https://') !== -1) {
		scriptToLoad.src = script;
	}
	else {
		scriptToLoad.src = path_prefix + script;
	}
	document.querySelector('head').append(scriptToLoad);
});