module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      files: ['build/*', '!build/lib']
    },

    watch: {
      files: 'src/**/*.*',
      tasks: ['clean', 'jshint', 'less', 'copy']
    },

    jshint: {
      dev: {
        src: ['src/js/**/*.js']
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: "deploy/", src: 'CNAME', dest: 'build/'},
          {expand: true, cwd: "src/", src: 'index.html', dest: 'build/'},
          {expand: true, cwd: "src/js/", src: '**', dest: 'build/js/'},
          {expand: true, cwd: "src/images/", src: '**', dest: 'build/images/'},
          {expand: true, cwd: "src/templates/", src: '**', dest: 'build/templates/'},
          {expand: true, cwd: "src/lib/angular-bootstrap-colorpicker/img/", src: '**', dest: 'build/images/colorpicker/'},
          {expand: true, cwd: "src/lib/angular-bootstrap-colorpicker/js/", src: '**', dest: 'build/lib/'},
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
    },

    'gh-pages': {
      options: {
        branch: 'gh-pages',
        base: 'build'
      },
      deploy: {
        options: {
          user: {
            name: 'Emmanouil Konstantinidis',
            email: 'manos@iamemmanouil.com'
          },
          repo: 'https://' + process.env.GH_TOKEN + '@github.com/ekonstantinidis/ui-color.git',
          message: 'Publish UIColor to Github Pages (Auto)' + getDeployMessage(),
          silent: true
        },
        src: ['**/*']
      }
    }

  });

  function getDeployMessage() {
    var ret = '\n\n';
    if (process.env.TRAVIS !== 'true') {
      ret += 'missing env vars for travis-ci';
      return ret;
    }
    ret += 'branch:       ' + process.env.TRAVIS_BRANCH + '\n';
    ret += 'SHA:          ' + process.env.TRAVIS_COMMIT + '\n';
    ret += 'range SHA:    ' + process.env.TRAVIS_COMMIT_RANGE + '\n';
    ret += 'build id:     ' + process.env.TRAVIS_BUILD_ID  + '\n';
    ret += 'build number: ' + process.env.TRAVIS_BUILD_NUMBER + '\n';
    return ret;
  }

  grunt.registerTask('check-deploy', function() {
    // need this
    this.requires(['build']);

    // only deploy under these conditions
    if (process.env.TRAVIS === 'true' && process.env.TRAVIS_SECURE_ENV_VARS === 'true' && process.env.TRAVIS_PULL_REQUEST === 'false') {
      grunt.log.writeln('executing deployment');
      // queue deploy
      grunt.task.run('gh-pages:deploy');
    }
    else {
      grunt.log.writeln('skipped deployment');
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['clean', 'jshint', 'less', 'copy']);
  grunt.registerTask('serve', ['build', 'connect:server']);

  grunt.registerTask('deploy', 'Publish from Travis', [
    'build',
    'check-deploy'
  ]);
};