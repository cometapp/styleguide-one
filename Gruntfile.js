
// Possible optim: postcss-colorblind

'use strict';

module.exports = function(grunt) {

	var tasks = {

		// Compiles LESS files to CSS
		less: {
			dev: {
				src: './main.less',
				dest: 'styleguide/styles.css'
			},
			dist: {
				src: ['./main.less'],
				dest: 'dist/styles.min.css',
				options: {
					plugins: [
						new (require('less-plugin-autoprefix'))({ browsers: ['> 0.1%'] }),
						new (require('less-plugin-clean-css'))({})
					]
				}
			}
		},

		// Generate a styleguide
		livingcss: {
			dev: {
				src: ['styleguide/styles.css'],
				dest: 'styleguide'
			}
		},

		// Watch
		watch: {
			options: {
				atBegin: true,
				livereload: true
			},
			less: {
				files: ['./**/*.less'],
				tasks: ['less:dev', 'livingcss:dev']
			},
		},

		// Auto reload
		connect: {
			website: {
				options: {
					hostname: 'localhost',
					port: 9000,
					protocol: 'http',
					base: 'styleguide',
					livereload: true
				}
			}
		}
	};

	grunt.initConfig(tasks);

	// Load packages
	var ref = ['grunt-contrib-less', 'grunt-contrib-watch', 'grunt-contrib-connect', 'grunt-livingcss'];
	var i, len;
	for (i = 0, len = ref.length; i < len; i++) {
		var plugin = ref[i];
		grunt.loadNpmTasks(plugin);
	}

	// Register tasks
	grunt.registerTask('default', [
		'less:dev', 'livingcss', 'connect', 'watch'
	]);

};