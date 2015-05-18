'use strict';

module.exports = function(grunt) {
  grunt.config(
    'assemble', {
      options: {
        layout: 'main.html',
        layoutdir: './src/views/layouts/',
        partials: './src/views/partials/**/*.html'
      },
      pages: {
        files: [{
          cwd: './src/content/',
          dest: './dist' + '<%= config.basePath  %>',
          expand: true,
          src: '**/*.md'
        }]
      }
    });
};