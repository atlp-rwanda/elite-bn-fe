const path = require('path')
const Dotenv = require('dotenv-webpack')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = dotenv.config().parsed
const vercelEnv = process.env
const envKeys = env
  ? Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next])
      return prev
    }, {})
  : Object.keys(vercelEnv).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(vercelEnv[next])
      return prev
    }, {})
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash].[ext]',
          esModule: false,
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      systemvars: true,
    }),
  ],
}
