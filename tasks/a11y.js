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
              baseUrl = config.baseUrl,
              basePath = config.basePath,
              urls = [];

            for (var i = 0; i < paths.length; i++) {
              urls[i] = baseUrl + ':' + port + basePath + paths[i];
            }

            return urls;
          })()
        }
      }
    });
};