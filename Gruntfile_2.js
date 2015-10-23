// Grunt base configuration
//
// This Gruntfile.js is based on "load-grunt-config" module.
// Config files are separated and put into `grunt/` directory.
// load-grant-config: <https://github.com/firstandthird/load-grunt-config>

'use strict';

module.exports = function(grunt) {

  // Display the execution time.
  require('time-grunt')(grunt);

  // Initialize with "load-grunt-config".
  require('load-grunt-config')(grunt, {
    // added assemble
    assemble: {
      options: {
        expand:'true',
        data:   "templates/data/config.json",   
        layoutdir:'cwd',
        marked:'index.html',
        assets: 'templates/assets',
        plugins: ['templates/permalinks'],
        partials: ['templates/includes/**/*.hbs'],
        layout: ['templates/layouts/default-layout.hbs'],
       // data: ['templates/data/*.{json,yml}']
      },
      
      main: {
    files: [{
      expand: true,
      cwd: '<%= config.pages %>',
      src: ['*.hbs'],
      dest: '<%= config.dest %>'
    }]},
      //files:{
      //  src: ['docs/**/*.hbs'],
      //  
      //dest: ['app']
      // // dest: 'C:/pj2/app/*.html'
      //}
        
      //site: {
      //  src: ['docs/index.hbs'],
      //  dest: 'app'
      //}
    },
    // Define variables for grunt config here.
    config: {
      path: {
        app: 'app',
        dist: 'dist',
        distIgnore: '**/_*/**', // Excluded directories or files of distribution, e.g. Sass directory.
        tmp: '.tmp/dist',
        markups: 'app',
        styles: 'app/css',
        scripts: 'app/js',
        images: 'app/img',
        sprites: 'app/img/_sprites',
        glyphs: 'app/img/_glyphs',
        html: 'app',
        css: '.tmp/dist/css',
        js: 'app/js',
        template: 'app/_template',
        pdf: 'pdf'
      }
    }

  });

  // Load additional plugins.
  grunt.loadNpmTasks('main-bower-files');
  // added grunt-assemble
  grunt.loadNpmTasks('grunt-assemble');

};