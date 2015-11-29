(function () {

	angular
		.module('starterApp')
		.controller('AppController', ['$mdSidenav', '$location', function ($mdSidenav, $location) {
			var self = this;

			self.pages = [
				{
					title: 'Home',
					path: '/home'
				},
				{
					title: 'About',
					path: '/about'
				},
				{
					title: 'Projects',
					path: '/projects'
				},
				{
					title: 'Contact',
					path: '/contact'
				}
			];

			self.isCurrentPath = function (path) {
				return $location.path() == path;
			};

			self.navigate = function (path) {
				$location.path(path);

				self.toggleSidenav('right');
			};

			self.toggleSidenav = function (menuId) {
				$mdSidenav(menuId).toggle();
			};
		}]);
})();
