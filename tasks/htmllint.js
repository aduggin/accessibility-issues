'use strict';

module.exports = function(grunt) {
  grunt.config(
    'htmllint', {
      all: {
        options: {
          ignore: 'Element “head” is missing a required instance of child element “title”.'
        },
        src: ['<%= config.allHtml  %>']
      }
    });
};