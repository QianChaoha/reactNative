module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public", // 本地服务器所加载的页面所在的目录  
        colors: true, // 终端中输出结果为彩色  
        historyApiFallback: true, // 不跳转  
        inline: true // 实时刷新  
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            }
        ]
    }
};

