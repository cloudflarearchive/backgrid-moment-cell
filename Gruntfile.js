/*
  backgrid-moment-cell
  http://github.com/wyuenho/backgrid-moment-cell

  Copyright (c) 2013-present-present Cloudflare, Inc and contributors
  Licensed under the MIT license.
*/

// jshint globalstrict:true, node:true

"use strict";

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    clean: {
      options: {
        force: true
      },
      api: [
        "api/**/*"
      ],
      "default": [
        "*.min.*",
        "test/coverage/**/*"
      ]
    },

    karma: {
      unit: {
        configFile: "karma.conf.js",
        singleRun: true
      }
    },

    jsduck: {
      main: {
        src: ["backgrid-moment-cell.js"],
        dest: "api",
        options: {
          "title": "backgrid-moment-cell",
          "no-source": true,
          "categories": "categories.json",
          "pretty-json": true
        }
      }
    },

    csscomb: {
      "default": {
        files: {
          "backgrid-moment-cell.css": ["backgrid-moment-cell.css"]
        }
      }
    },

    cssnano: {
      options: {
        safe: true
      },
      "default": {
        files: {
          "backgrid-moment-cell.min.css": ["backgrid-moment-cell.css"]
        }
      }
    },

    uglify: {
      options: {
        mangle: true,
        compress: true,
        preserveComments: "some"
      },
      "default": {
        files: {
          "backgrid-moment-cell.min.js": ["backgrid-moment-cell.js"]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-csscomb");
  grunt.loadNpmTasks("grunt-cssnano");
  grunt.loadNpmTasks("grunt-jsduck");
  grunt.loadNpmTasks("grunt-karma");

  grunt.registerTask("dist", ["uglify", "csscomb", "cssnano"]);
  grunt.registerTask("default", ["clean", "jsduck", "dist", "karma"]);
};
