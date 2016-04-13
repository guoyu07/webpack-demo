var webpack=require('webpack')
module.exports={
    /*入口文件*/
    entry:'./entry.js',
    /*输出文件*/
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    /*模块加载器*/
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'}
        ]
    },
    /*插件*/
    plugins:[
        /*这个插件用于在编译的bundle.js文件输出中添加头信息*/
        new webpack.BannerPlugin('This file is created by zhaoda')
    ]
}