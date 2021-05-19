/* use webpack to bundle and transpile the client */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  devtool: "inline-source-map",
  devServer: {
    hotOnly: true,
    contentBase: "./dist",
    port: 3000,
    open: true,
    /* run node server on port 8080 to proxy api requests */
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template/index.html",
      favicon: "./template/favicon.ico",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  /* loaders to handle bundling file types other than js in our bundle*/
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset' 
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
