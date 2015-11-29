(function () {
	'use strict';

	angular
		.module('starterApp')
		.service('ProjectService', ['$q', function ($q) {
			var projects = [
				{
					id: 1,
					title: 'aaa'
				},
				{
					id: 2,
					title: 'bbb'
				}
			],
			project = projects[0];

			return {
				all: function () {
					return $q.when(projects);
				},
				get: function (id) {
					return $q.when(project);
				}
			};
		}]);
})();