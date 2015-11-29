module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'app/assets/css/sass',
					cssDir: 'app/assets/css',
					outputStyle: 'compressed'
				}
			},
			dev: {
				options: {
					sassDir: 'app/assets/css/sass',
					cssDir: 'app/assets/css',
					outputStyle: 'expanded',
				}
			}
		},
		watch: {
			files: ['app/assets/css/sass/*.sass'],
			tasks: ['compass:dev']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
	// grunt.registerTask('final', ['compass:dist', 'concat', 'uglify', 'cssmin']);
};
