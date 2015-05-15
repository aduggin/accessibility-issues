'use strict';

module.exports = function(grunt) {
  grunt.config(
    'clean', {
      tmp: {
        src: '<%= config.arrays.clean  %>'
      }
    });
};