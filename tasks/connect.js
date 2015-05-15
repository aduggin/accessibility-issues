'use strict';

module.exports = function(grunt) {
  grunt.config(
    'connect', {
      options: {
        port: '<%= config.port  %>',
        base: './dist/'
      },
      dev: {
      },
      keepalive: {
        options: {
          keepalive: true,
        }
      }
    });
};