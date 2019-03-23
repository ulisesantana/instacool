const path = require('path');

module.exports = {
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('react-scripts/config/webpack.config.js'),
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/utils/Wrapper')
  }
};