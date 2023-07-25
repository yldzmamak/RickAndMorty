/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge")
const common = require("./webpack.common")

const webpack = require("webpack")

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 3001
  }
})