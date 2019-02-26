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

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-ng-annotate");

  grunt.registerTask("default", ["build"]);
  grunt.registerTask("build", ["jshint", "ngAnnotate", "less", "copy"]);
};
