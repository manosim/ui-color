module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      files: ["build/*", "!build/lib"]
    },

    watch: {
      files: "src/**/*.*",
      tasks: ["build"]
    },

    jshint: {
      dev: {
        src: ["src/js/**/*.js"]
      }
    },

    copy: {
      main: {
        files: [
          { expand: true, cwd: "deploy/", src: "CNAME", dest: "build/" },
          { expand: true, cwd: "src/", src: "index.html", dest: "build/" },
          {
            expand: true,
            cwd: "src/images/",
            src: "**",
            dest: "build/images/"
          },
          {
            expand: true,
            cwd: "src/templates/",
            src: "**",
            dest: "build/templates/"
          },

          {
            expand: true,
            cwd: "src/lib/ng-clip/",
            src: "*.min.js",
            dest: "build/lib/"
          },
          {
            expand: true,
            cwd: "src/lib/ng-clip/",
            src: "*.swf",
            dest: "build/images/"
          },

          {
            expand: true,
            cwd: "node_modules/angular-bootstrap-colorpicker/img/",
            src: "**",
            dest: "build/images/colorpicker/"
          },
          {
            expand: true,
            cwd: "node_modules/font-awesome/css/",
            src: "**",
            dest: "build/css/"
          },
          {
            expand: true,
            cwd: "node_modules/font-awesome/fonts/",
            src: "**",
            dest: "build/fonts/"
          },
          {
            expand: true,
            cwd: "node_modules/bootstrap/fonts/",
            src: "**",
            dest: "build/fonts/"
          },
          {
            expand: true,
            cwd: "src/lib/ui-bootstrap/",
            src: "**",
            dest: "build/lib/"
          },

          {
            expand: true,
            cwd: "node_modules/zeroclipboard/dist/",
            src: "ZeroClipboard.swf",
            dest: "build/images/"
          }
        ]
      }
    },

    ngAnnotate: {
      src: {
        files: {
          "build/js/main.js": [
            "node_modules/angular/angular.js",
            "node_modules/angular-route/angular-route.js",
            "node_modules/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js",
            "node_modules/angular-ui-bootstrap/ui-bootstrap.js",
            "node_modules/zeroclipboard/dist/ZeroClipboard.js",
            "node_modules/ng-clip/dest/ng-clip.min.js",

            "src/js/*.js",
            "src/js/controllers/*.js"
          ]
        }
      }
    },

    less: {
      main: {
        expand: true,
        flatten: true,
        src: ["src/less/*.less"],
        dest: "build/css/",
        ext: ".css"
      }
    }
  });

  function getDeployMessage() {
    var ret = "\n\n";
    if (process.env.TRAVIS !== "true") {
      ret += "missing env vars for travis-ci";
      return ret;
    }
    ret += "branch:       " + process.env.TRAVIS_BRANCH + "\n";
    ret += "SHA:          " + process.env.TRAVIS_COMMIT + "\n";
    ret += "range SHA:    " + process.env.TRAVIS_COMMIT_RANGE + "\n";
    ret += "build id:     " + process.env.TRAVIS_BUILD_ID + "\n";
    ret += "build number: " + process.env.TRAVIS_BUILD_NUMBER + "\n";
    return ret;
  }

  grunt.registerTask("check-deploy", function() {
    // need this
    this.requires(["build"]);

    // only deploy under these conditions
    if (
      process.env.TRAVIS === "true" &&
      process.env.TRAVIS_SECURE_ENV_VARS === "true" &&
      process.env.TRAVIS_PULL_REQUEST === "false"
    ) {
      grunt.log.writeln("executing deployment");
      // queue deploy
      grunt.task.run("gh-pages:deploy");
    } else {
      grunt.log.writeln("skipped deployment");
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-ng-annotate");
  grunt.loadNpmTasks("grunt-gh-pages");

  grunt.registerTask("default", ["build"]);
  grunt.registerTask("build", ["jshint", "ngAnnotate", "less", "copy"]);

  grunt.registerTask("deploy", "Publish from Travis", [
    "build",
    "check-deploy"
  ]);
};
