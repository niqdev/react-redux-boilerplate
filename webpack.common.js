const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.template.html',
      filename: 'index.html',
      inject: 'body',
      title: 'react-redux-boilerplate'
    })
  ],
  output: {
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
