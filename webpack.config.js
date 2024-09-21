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
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpe?g|png|gif|svg)$/i,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
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
