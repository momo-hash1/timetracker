const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = [
  {
    mode: "development",
    entry: "./src/ui/index.js",
    devtool: "source-map",
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          include: /src/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    output: {
      path: __dirname + "/dist",
      filename: "react.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        publicPath: "/",
        template: "./public/index.html",
      }),
    ],
  },
];
