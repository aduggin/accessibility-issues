'use strict';

module.exports = function(grunt) {
  grunt.config(
    'concurrent', {
      'connect-watch': {
        tasks: ['connect:keepalive', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    });
};