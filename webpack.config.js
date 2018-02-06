const path = require('path'),
    webpack = require('webpack');
const srcPath = path.join(__dirname, 'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './client/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread', 'async-to-promises'] }
                }],
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                  use: ['css-loader', 'sass-loader']
                })
              },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader?name=images/[name].[ext]"
            },
            // {
            //     test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            //     loader: require.resolve('file-loader'),
            //     options: {
            //       limit: 10000,
            //       name: 'assets/images/[name].[hash:8].[ext]',
            //     },
            //   },
            {
                test: /\.(eot|ttf|woff|otf|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.svg$/,
                include: path.join(srcPath, 'icons'),
                loaders: [
                  'svg-sprite-loader?' + JSON.stringify({
                    name: '[name].[hash]',
                    prefixize: true
                  }),
                  'svgo-loader?' + JSON.stringify({
                    plugins: [
                      { removeTitle: true },
                      { convertPathData: false },
                      { removeUselessStrokeAndFill: true }
                    ]
                  })
                ]
            }
            //loaders for other file types can go here
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true)
            }
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            Promise: 'bluebird'
        })
    ]
}
