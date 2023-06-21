const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: "file-loader",
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public'), 
        filename: 'bundle.js',
        publicPath: '',
        
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}