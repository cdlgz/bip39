const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    entry: [__dirname + '/src/bcoinsdk.js', __dirname + '/src/hdwsdk.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'allsdk.min.js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          keep_fnames: true
        }
      })
    ]
  },
  devtool: "source-map"
}