module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
    /**
     * react-dev-inspector plugin, options docs see:
     * https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
     */
    'react-dev-inspector/plugins/babel',
  ],
};
