angular
	.module('starterApp', ['ngRoute', 'ngMaterial', 'users'])
	.run(['$location', '$rootScope', function ($location, $rootScope) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			if (current.hasOwnProperty('$$route'))
			{

				$rootScope.title = current.$$route.title;
			}
		});
	}])
	.config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {

		$mdIconProvider
			.defaultIconSet("./assets/svg/avatars.svg", 128)
			.icon("menu", "./assets/svg/menu.svg", 24)
			.icon("share", "./assets/svg/share.svg", 24)
			.icon("google_plus", "./assets/svg/google_plus.svg", 512)
			.icon("hangouts", "./assets/svg/hangouts.svg", 512)
			.icon("twitter", "./assets/svg/twitter.svg", 512)
			.icon("phone", "./assets/svg/phone.svg", 512);

		var newYellowMap = $mdThemingProvider.extendPalette('yellow', {
			'500': '727272'
		});
		$mdThemingProvider
			.definePalette('newYellow', newYellowMap)
			.theme('default')
			.primaryPalette('newYellow');

		$routeProvider
			.when('/home', {
				controller: 'HomeController as home',
				templateUrl: 'src/templates/home.html',
				title: 'Welcome'
			})
			.when('/about', {
				controller: 'AboutController as about',
				templateUrl: 'src/templates/about.html',
				title: 'Some words about me'
			})
			.when('/projects', {
				controller: 'ProjectsController as projects',
				templateUrl: 'src/templates/projects.html',
				resolve: {
					projects: function (ProjectService) {
						return ProjectService
							.all()
							.then(function (projects) {
								return projects;
							});
					}
				},
				title: 'My Projects History'
			})
			.when('/projects/:projectID', {
				controller: 'ProjectController as project',
				templateUrl: 'src/templates/project.html',
				resolve: {
					project: function (ProjectService, $route) {
						return ProjectService
							.get($route.current.params.projectID)
							.then(function (project) {
								return project;
							});
					}
				},
				title: 'My Projects'
			})
			.when('/contact', {
				controller: 'ContactController as contact',
				templateUrl: 'src/templates/contact.html',
				title: 'Stay in touch'
			})
			.otherwise({
				redirectTo: '/home'
			});

	});
