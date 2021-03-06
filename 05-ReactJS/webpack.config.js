var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",  
    entry: "./src/index.js",
    output: {
        publicPath: "/",  // solved /movie/:id issue
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
        sourceMapFilename: 'main.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use:['style-loader', 'css-loader',{
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }}]
            },{
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devServer: {
      historyApiFallback: true
  }
}