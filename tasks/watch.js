'use strict';

module.exports = function(grunt) {
  grunt.config(
    'watch', {
      assemble: {
        files: ['src/views/**/*.html', 'src/content/*.md'],
        tasks: ['assemble'],
        options: {
          livereload: true
        }
      },
      css: {
        files: 'src/assets/stylesheets/**/*',
        tasks: ['css'],
        options: {
          livereload: true
        }
      }
    });
};