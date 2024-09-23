const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    main: join(__dirname, "./src/index.tsx"),
  },
  output: {
    path: join(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpe?g|png|gif|svg)$/i,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".mjs"],
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js",
    },
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
      cache: true,
      template: join(__dirname, "./src/index.html"),
    }),
  ],
  devServer: {
    contentBase: join(__dirname, "./dist/"),
    compress: true,
    port: 3000,
  },
};

module.exports = config;
