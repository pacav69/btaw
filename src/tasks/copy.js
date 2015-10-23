module.exports = {
  main: {
    files: [{
      expand: true,
      cwd: 'src/assets/less',
      src: ['theme.less'],
      dest: 'dist/assets/less'
    }, {
      expand: true,
      cwd: 'src/assets/css',
      src: ['./**/*.*'],
      dest: 'dist/assets/css'
    }, {
      expand: true,
      cwd: 'src/assets/fonts',
      src: ['./**/*.*'],
      dest: 'dist/assets/fonts'
    }, 
    {
      expand: true,
      cwd: 'src/assets/js',
      src: ['./**/*.*'],
      dest: 'dist/assets/js'
    }, {
      expand: true,
      cwd: 'src/assets/img',
      src: ['./**/*.*'],
      dest: 'dist/assets/img'
    }]
  }
  // ,
  // lib: {
  //   files: [{
  //     expand: true,
  //     cwd: 'bower_components',
  //     src: ['./**/*.*'],
  //     dest: 'dist/assets/lib'
  //   }]
  // }
};
