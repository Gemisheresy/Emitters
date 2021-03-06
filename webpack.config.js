module.exports = {
    entry: './src/emitter.js',
    output:{
        path:'./bin',
        filename: 'emitters.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','es2016']
                }
            }
        ]
    }
}