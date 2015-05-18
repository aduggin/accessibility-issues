'use strict';

module.exports = function(grunt) {
  grunt.config(
    'open', {
      server: {
        path: '<%= config.baseUrl  %>' + ':' + '<%= config.port  %>' + '<%= config.basePath  %>'
      }
    });
};