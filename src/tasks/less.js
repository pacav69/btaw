module.exports = {
  options: {
    paths: ['bower_components/bootstrap/less']
  },
  development: {
    files: {
      'dist/assets/css/main.css': ['src/assets/less/main/layout/custom.less']
    }
  },
  theme: {
    files: {
      'dist/assets/css/theme.css': ['src/assets/less/theme.less']
    }
  },
  production: {
    options: {
      compress: true
    },
    files: {
      'dist/assets/css/main.min.css': ['src/assets/less/style.less']
    }
  }
};
