const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',

  target: 'node',

  externals: [nodeExternals({
    whitelist: [/\.css$/],
  })],

  output: {
    path: path.join(__dirname, 'build/server'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },

  node: {
    __dirname: true,
  },


  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, 'src'),
                  path.resolve(__dirname, 'node_modules'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|otf|svg|png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
    ],
  },
};
