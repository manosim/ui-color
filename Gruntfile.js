module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      dest: "build/js/app.js",
      src: ['src/js/app.js'],
      options: {
        transform:  [ require('grunt-react').browserify ]
      },
    },

    less: {
      options: {
        cleancss: true
      },
      main: {
        files: {
          'build/css/style.css': 'src/less/style.less'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: "src/", src: 'index.html', dest: 'build/'},
          {expand: true, cwd: "src/images/", src: '**', dest: 'build/images/'},
        ]
      }
    },

    watch: {
      files: 'src/**/*.*',
      tasks: 'build',
    },

    clean: {
        files: ["build/"]
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-react');

  // Default task(s).
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['less', 'copy', 'browserify']);

};