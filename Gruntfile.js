'use strict';

var ngrok = require('ngrok');
var basePath = '/accessibility-issues/';

module.exports = function(grunt) {
  require('dotenv').load(); // load environmental variables in .env
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.config.merge({
    config: {
      arrays: {
        clean: ['.sass-cache', 'dist'],
        paths: [
          basePath + '/anchor-with-id-no-href-or-text.html',
          basePath + '/contribute.html',
          basePath + '/index.html',
          basePath + '/insufficient-color-contrast.html',
          basePath + '/missing-h1.html',
          basePath + '/missing-lang.html',
          basePath + '/missing-title.html'
        ],
        js: ['Gruntfile.js', 'tasks/*.js']
      },
      allHtml: 'dist/**/*.html',
      allcss: 'dist/' + basePath + '/stylesheets/**/*.css',
      cssFile: 'dist/' + basePath + '/stylesheets/style.css',
      allSass: 'src/assets/stylesheets/**/*.scss',
      scssFile: 'src/assets/stylesheets/main.scss',
      baseUrl: 'http://localhost',
      basePath: basePath,
      port: 5000
    }
  });

  grunt.task.loadTasks('tasks');

  grunt.registerTask('default', ['develop']);

  grunt.registerTask('develop', ['clean', 'build', 'concurrent:connect-watch-open']);
  grunt.registerTask('build', ['assemble', 'css']);
  grunt.registerTask('test', ['html', 'css', 'js', 'links']);
  grunt.registerTask('test:ci', ['clean', 'build', 'html', 'css', 'js', 'links']);
  grunt.registerTask('access', ['html-codesniffer', 'connect:dev', 'a11y', 'tenon-ngrok']);
  grunt.registerTask('deploy', ['gh-pages']);

  grunt.registerTask('html', ['htmllint']);
  grunt.registerTask('css', ['sass', 'autoprefixer', 'scsslint', 'csslint']);
  grunt.registerTask('js', ['jshint', 'jscs']);
  grunt.registerTask('links', ['connect:dev', 'linkChecker']);
  grunt.registerTask('html-codesniffer', ['clean', 'build',  'accessibility']); 
  grunt.registerTask('chrome-access', ['connect:dev', 'a11y']);
  grunt.registerTask('tenon-api', ['connect:dev', 'tenon-ngrok']);

  grunt.registerTask('tenon-ngrok', 'Run tenon with ngrok', function() {
    var done = this.async();

    ngrok.connect({
      port: grunt.config.get().config.port
    }, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.log.write('Exposing a local server: ' + url);
      grunt.config.set('tenon.options.httpBase', url);
      grunt.task.run('tenon:all');
      done();
    });
  });
};