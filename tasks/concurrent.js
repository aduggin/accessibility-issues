'use strict';

module.exports = function(grunt) {
  grunt.config(
    'concurrent', {
      'connect-watch-open': {
        tasks: ['connect:keepalive', 'watch', 'open'],
        options: {
          logConcurrentOutput: true
        }
      }
    });
};