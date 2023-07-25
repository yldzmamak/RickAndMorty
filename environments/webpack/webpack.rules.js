const path = require("path");
const fs = require('fs');
const lessToJs = require("less-vars-to-js");

module.exports = [
  {
    test: /\.tsx?$/,
    loader: "babel-loader",
    exclude: "/node_modules/"
  },
  {
    test: /\.css$/i,
    use: [
      "style-loader", "css-loader", "less-loader"
    ]
  },
  {
    test: /\.less$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    ]
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  },
  {
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  }
];