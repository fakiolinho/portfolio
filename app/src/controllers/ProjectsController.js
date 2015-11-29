(function () {

	angular
		.module('starterApp')
		.controller('ProjectsController', ['projects', function (projects) {
			var self = this;

			self.projects = projects;
			console.log(self.projects);
		}]);
})();