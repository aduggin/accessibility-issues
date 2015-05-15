'use strict';

module.exports = function(grunt) {
  grunt.config(
    'accessibility', {
      options: {
        accessibilityLevel: 'WCAG2AAA',
        force: true,
        reportLevels: {
          notice: false,
          warning: true,
          error: true
        }
      },
      test: {
        src: ['<%= config.allHtml  %>']
      }
    });
};