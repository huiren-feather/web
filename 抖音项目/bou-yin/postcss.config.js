module.exports = {
    plugins: {
      autoprefixer: {
        // browsers: [
        //   'Android >= 4.0',
        //   'iOS >= 8'
        // ]
        overrideBrowserslist: ['> 0.15% in CN']
      },
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: [
          '*'
        ]
      },
      'postcss-px2rem': {
        remUnit: 37.5
      }
    }
  }