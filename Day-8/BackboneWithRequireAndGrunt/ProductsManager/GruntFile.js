module.exports = function(grunt){
	grunt.initConfig({
		'uglify' : {
			'dev-target' : {
				files : [{
          			expand: true,
          			src: 'app/**/*.js',
          			dest: 'dest'
      			}]	
			}
		},
		coffee: {
		  compile: {
		    files: {
		      'app/coffeejs/test.js': 'app/coffee/test.coffee'
		    }
		  }
		},
		watch: {
		  scripts: {
		    files: ['**/*.*'],
		    tasks: ['uglify:dev-target','coffee:compile'],
		    options: {
		      spawn: false,
		      livereload : true
		    },
		  },
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['uglify:dev-target','coffee']);
};