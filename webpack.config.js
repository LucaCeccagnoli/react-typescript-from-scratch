const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /(node_modules|browser_components)/,
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        publicPath: "/dist/",
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },

    plugins: [new webpack.HotModuleReplacementPlugin()]
  };
