(function () {

	angular
		.module('starterApp')
		.controller('ProjectController', ['project', function (project) {
			var self = this;

			self.project = project;
			console.log(self.project);
		}]);
})();