'use strict';

module.exports = function(grunt) {
  grunt.config(
    'a11y', {
      dev: {
        options: {
          urls: (function() {
            var config = grunt.config.get().config,
              paths = config.arrays.paths,
              port = config.port,
              urls = [];

            for (var i = 0; i < paths.length; i++) {
              urls[i] = 'http://localhost:' + port + '/' + paths[i];
            }

            return urls;
          })()
        }
      }
    });
};