module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      files: 'src/**/*.*',
      tasks: ['jshint', 'less', 'copy']
    },

    jshint: {
      dev: {
        src: ['src/js/**/*.js']
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: "src/templates/", src: '**', dest: 'build/templates/'},
          {expand: true, cwd: "src/", src: 'index.html', dest: 'build/'},
          {expand: true, cwd: "src/js/", src: '**', dest: 'build/js/'},
          {expand: true, cwd: "src/images/", src: '**', dest: 'build/images/'},
          {expand: true, cwd: "src/lib/font-awesome/css/", src: '**', dest: 'build/css/'},
          {expand: true, cwd: "src/lib/font-awesome/fonts/", src: '**', dest: 'build/fonts/'},
          {expand: true, cwd: "src/lib/bootstrap/fonts/", src: '**', dest: 'build/fonts/'},
          {expand: true, cwd: "src/lib/angular/", src: '**', dest: 'build/lib/'},
          {expand: true, cwd: "src/lib/ui-bootstrap/", src: '**', dest: 'build/lib/'},
        ]
      }
    },

    less: {
      main: {
        expand: true,
        flatten: true,
        src:  ['src/less/*.less'],
        dest: 'build/css/',
        ext: '.css'
      }
    },

    connect: {
      server: {
        options: {
          open: true,
          base: 'build',
          keepalive: true,
          useAvailablePort: true,
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['jshint', 'less', 'copy']);
  grunt.registerTask('serve', ['build', 'connect:server']);
};