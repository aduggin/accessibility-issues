'use strict';

module.exports = function(grunt) {
  grunt.config(
    'gh-pages', {
      options: {
        base: 'dist' + '<%= config.basePath  %>'
      },
      src: ['**']
    });
};