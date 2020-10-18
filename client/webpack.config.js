const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const getWebpackRules = require('./webpack.utils');

const env = process.env.NODE_ENV;
const isDevelop = env === 'development';
const date = new Date();
const formattedDate = `
  ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;

module.exports = {
  entry: {
    admin: [
      './src/Admin',
    ],

    landing: [
      './src/Landing',
    ],

    standardCleaning: [
      './src/StandardCleaning',
    ],
    officeCleaning: [
      './src/OfficeCleaning',
    ],
    repairCleaning: [
      './src/RepairCleaning',
    ],
    windowCleaning: [
      './src/WindowCleaning',
    ],
    dryCleaning: [
      './src/DryCleaning',
    ],

    cleaning: [
      './src/Cleaning',
    ],
    job: [
      './src/Job',
    ],
    discount: [
      './src/Discount',
    ],
    contract: [
      './src/Contract',
    ],
    aboutUs: [
      './src/AboutUs',
    ],
    faq: [
      './src/FAQ',
    ],

    develop: [
      './src/Develop',
    ],
  },

  output: {
    path: path.join(__dirname, 'build/client'),
    filename: isDevelop ? '[name].js' : '[name]-[chunkhash].js',
    publicPath: '/',
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parallel: true,
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules|ui-libs/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },

  devtool: isDevelop ? 'inline-source-map' : false,

  devServer: {
    host: 'localhost',
    port: 3000,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3003/',
      },
    },
  },

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
    ],
    extensions: [
      '.js',
      '.jsx',
    ],
  },

  module: {
    rules: getWebpackRules(),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[name]-[contenthash].css',
    }),

    new CopyPlugin({
      patterns: [
        { from: 'public/img', to: path.join(__dirname, 'build/client/img') },
        { from: 'public/font', to: path.join(__dirname, 'build/client/font') },
      ],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/admin.html',
      filename: 'admin.html',
      inject: 'body',
      chunks: ['vendor', 'admin'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'landing.html',
      inject: 'body',
      chunks: ['vendor', 'landing'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'standardCleaning.html',
      inject: 'body',
      chunks: ['vendor', 'standardCleaning'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'officeCleaning.html',
      inject: 'body',
      chunks: ['vendor', 'officeCleaning'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'repairCleaning.html',
      inject: 'body',
      chunks: ['vendor', 'repairCleaning'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'windowCleaning.html',
      inject: 'body',
      chunks: ['vendor', 'windowCleaning'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'dryCleaning.html',
      inject: 'body',
      chunks: ['vendor', 'dryCleaning'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'cleaning.html',
      inject: 'body',
      chunks: ['vendor', 'cleaning'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'job.html',
      inject: 'body',
      chunks: ['vendor', 'job'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'discount.html',
      inject: 'body',
      chunks: ['vendor', 'discount'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'contract.html',
      inject: 'body',
      chunks: ['vendor', 'contract'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'aboutUs.html',
      inject: 'body',
      chunks: ['vendor', 'aboutUs'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'faq.html',
      inject: 'body',
      chunks: ['vendor', 'faq'],
    }),

    new HtmlPlugin({
      buildDate: `<!-- Build date: ${formattedDate} -->`,
      template: 'public/index.html',
      filename: 'develop.html',
      inject: 'body',
      chunks: ['vendor', 'develop'],
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};
