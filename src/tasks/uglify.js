module.exports = {
  core: {
    options: {
      sourceMap: true,
      sourceMapName: 'dist/assets/js/core.js.map'
    },
    files: {
      'dist/assets/js/core.min.js': ['dist/assets/js/core.js']
    }
  },
  app: {
    options: {
      sourceMap: true,
      sourceMapName: 'dist/assets/js/app.js.map'
    },
    files: {
      'dist/assets/js/app.min.js': ['dist/assets/js/app.js']
    }
  }
};
