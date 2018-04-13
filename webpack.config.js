const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV !== 'production';
const config = {
  devtool: isDev ? 'source-map' : false,
  entry: ['babel-polyfill', './src/components/Root.js'],
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader!css-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: JSON.stringify(process.env.API_HOST)
    })
  ]
};

module.exports = config;
