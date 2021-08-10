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
          components: './src/presentation/components',
          navigation: './src/presentation/navigation',
          views: './src/presentation/views',
        }
      }
    ],
    [
      'module:react-native-dotenv',
      {
        "moduleName": "@env",
        "path": ".env",
      }
    ]
  ]
};
