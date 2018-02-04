const path = require('path'),
    webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './client/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: './assets'
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
                test: /\.(scss)$/,
                use:
                [{
                    loader: 'style-loader'
                },
                {
                    loader : 'css-loader',
                    options:
                    {
                        importLoaders : 2,
                        sourceMap     : true
                    }
                },
                {
                    loader : 'sass-loader',
                    options:
                    {
                        outputStyle       : 'expanded',
                        sourceMap         : true,
                        sourceMapContents : true
                    }
                }]
            },
            {
                test: /\.(css)$/,
                use:
                [{
                    loader: 'style-loader'
                },
                {
                    loader : 'css-loader',
                    options:
                    {
                        importLoaders : 2,
                        sourceMap     : true
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=images/img-[hash:6].[ext]"
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
                test: /\.(eot|svg|ttf|woff|otf|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
            //loaders for other file types can go here
        ]
    },
    
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true)
            }
        })
    ]
}