'use strict';

var ngrok = require('ngrok');

module.exports = function(grunt) {
  require('dotenv').load(); // load environmental variables in .env
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.config.merge({
    config: {
      arrays: {
        clean: ['.sass-cache', 'dist'],
        paths: [
          '/index.html',
          '/missing-h1.html',
          '/anchor-with-id-no-href-or-text.html'],
        js: ['Gruntfile.js', 'tasks/*.js']
      },
      allHtml: 'dist/**/*.html',
      allcss: 'dist/stylesheets/**/*.css',
      allSass: 'src/assets/stylesheets/**/*.scss',
      cssFile: 'dist/stylesheets/style.css',
      scssFile: 'src/assets/stylesheets/main.scss',
      port: 5000
    }
  });

  grunt.task.loadTasks('tasks');

  grunt.registerTask('default', ['clean', 'build', 'connect:keepalive']);
  grunt.registerTask('build', ['assemble', 'css']);
  grunt.registerTask('test', ['html', 'css', 'js', 'links']);

  grunt.registerTask('html', ['htmllint']);
  grunt.registerTask('css', ['sass', 'autoprefixer', 'scsslint', 'csslint']);
  grunt.registerTask('js', ['jshint', 'jscs']);
  grunt.registerTask('links', ['connect:dev', 'linkChecker']);

  grunt.registerTask('access', ['html-codesniffer', 'tenon-api']);
  grunt.registerTask('html-codesniffer', ['clean', 'build',  'accessibility']);
  grunt.registerTask('tenon-api', ['connect:dev', 'tenon-ngrok']);
  grunt.registerTask('chrome-access', ['connect:dev', 'a11y']);

  grunt.registerTask('tenon-ngrok', 'Run tenon with ngrok', function() {
    var done = this.async();

    ngrok.connect({
      port: 5000,
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