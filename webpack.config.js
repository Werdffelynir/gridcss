const fs = require('fs');
const path = require('path');
const process = require('process');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const generator = require('./src/generator');


const isDevelopment = process.env.NODE_ENV === 'development';


const cssFile = '/var/www/gridcss/src/sass/generated.scss';

fs.writeFile(cssFile, generator ? generator.css : '', function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});



module.exports = {
    entry: './src/index.js',
    devtool: isDevelopment ? 'source-map' : 'hidden-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }, {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }

        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },

    plugins: [
        new MiniCssExtractPlugin({
            // [id].[name].[hash]
            filename: isDevelopment ? '[name].css' : '[name].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].css'
        })
    ]

};
