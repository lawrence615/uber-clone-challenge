module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.js'
        ],
        alias: {
          actions: './src/application/actions',
          middleware: './src/application/middleware',
          reducers: './src/application/reducers',
          selectors: './src/application/selectors',
          views: './src/presentation'
        }
      }
    ]
  ]
};
