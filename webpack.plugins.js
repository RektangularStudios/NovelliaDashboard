const { VueLoaderPlugin } = require("vue-loader");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = [
  new VueLoaderPlugin(),
  new ForkTsCheckerWebpackPlugin()
];
