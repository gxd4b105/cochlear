const path = require('path'),
    srcPath = path.resolve(__dirname),
    distPath = path.resolve(__dirname, 'dist/assets');

module.exports = {
    context: srcPath,
    entry: './src/server/server.js',
    output: {
        path: path.resolve(__dirname,''),
        publicPath: '',
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        loaders: [
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
          ],
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread'] }
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
            }
            // {
            //     test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            //     loader: require.resolve('url-loader'),
            //     options: {
            //       limit: 10000,
            //       name: 'assets/images/[name].[hash:8].[ext]',
            //     },
            // },
            // {
            //     test: /\.(eot|svg|ttf|woff|otf|woff2)$/,
            //     loader: 'file?name=public/fonts/[name].[ext]'
            // }
            //loaders for other file types can go here
        ]
    },
    devtool: 'source-map'
};
