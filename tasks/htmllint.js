'use strict';

module.exports = function(grunt) {
  grunt.config(
    'htmllint', {
      all: {
        options: {
          ignore: ['Element “head” is missing a required instance of child element “title”.',
          'An “img” element must have an “alt” attribute, except under certain conditions.' +
          ' For details, consult guidance on providing text alternatives for images.',
          'Element “title” must not be empty.']
        },
        src: ['<%= config.allHtml  %>']
      }
    });
};