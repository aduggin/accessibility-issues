'use strict';

module.exports = function(grunt) {

  var httpBase = grunt.option('httpBase') || '<%= config.url  %>';
  var url = grunt.option('url') || '<%= config.url  %>' + '/components';

  grunt.config(
    'tenon', {
      options: {
        apiKey: process.env.TENON_API_KEY,
        timeout: 240000,
        httpBase: httpBase,
        apiOptions: {
          projectID: 'accessibility_issues',
          level: 'AAA',
          store: 1
        },
        force: true
      },
      all: {
        options: {
          contentPaths: '<%= config.arrays.paths  %>'
        }
      },
      single: {
        urls: [
          url
        ]
      }
    });
};