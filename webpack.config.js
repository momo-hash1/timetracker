const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    entry: "./src/main.js",
    target: "electron-main",
    module: {
      rules: [
        {
          test: /\.(js)$/,
          include: /src/,
        },
      ],
    },
    output: {
      path: __dirname + "/dist",
      filename: "electron.js",
    },
  },
  {
    mode: "development",
    entry: "./src/ui/index.js",
    target: "electron-renderer",
    devtool: "source-map",
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
        template: "./public/index.html",
      }),
    ],
  },
];
