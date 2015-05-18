'use strict';

module.exports = function(grunt) {
  grunt.config(
    'gh-pages', {
      options: {
        base: 'dist' + '<%= config.basePath  %>',
        repo: 'https://' + process.env.GH_TOKEN + '@github.com/aduggin/accessibility-issues.git',
        user: {
          name: 'Alistair Duggin',
          email: 'alistair.duggin@btinternet.com'
        }
      },
      src: ['**']
    });
};