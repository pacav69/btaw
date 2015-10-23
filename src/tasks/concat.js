module.exports = {
  main: {
    files: [{
      'dist/assets/js/core.js': [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'src/assets/js/ie10-viewport-bug-workaround.js',
        'src/assets/js/carousel.js'

      ],
      'dist/assets/js/app.js': ['src/assets/js/app/*.js'],
    }]
  }
};
