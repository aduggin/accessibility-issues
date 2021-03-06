'use strict';

module.exports = function(grunt) {
  grunt.config(
    'linkChecker', {
      options: {
        maxConcurrency: 20
      },
      dev: {
        site: 'localhost',
        options: {
          initialPort: '<%= config.port  %>',
          initialPath: '<%= config.basePath  %>'
        }
      }
    });
};