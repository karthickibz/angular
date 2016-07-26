module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        uglify: {
        	options: {
        		mangle: true
        	},
        	build: {
        		src: "js/*.js",
        		dest: "js/min/script.js"
        	}
        },

       connect: {
          options: {
            port: 9000, // change to some different port
            hostname: 'localhost',
            livereload: 35730 // this also need to change to some different port
          }
       }    
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask('server', function (target) {
        grunt.task.run([
            'clean:server',
            'compass:server',
            'configureProxies:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch',
            'default',
            'uglify'

        ]);
    });

    grunt.registerTask('default', ["uglify"]);

    grunt.loadNpmTasks('grunt-connect-proxy');

    grunt.loadNpmTasks('grunt-http-server');

};