const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss', '.vue'],
    modules: ["node_modules"],
  },
  devtool: 'inline-source-map',
};
