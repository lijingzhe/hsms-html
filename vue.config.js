const path = require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      //extensions: ['.js','.css','.vue'], //配置省略的后缀，vue已默认配置过
      alias: {
        //’@‘: 'src',内部已配置过
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname,'./src/assets/css')]
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({ //配置项，详见官方文档
            remUnit: 192 // 换算的基数
          })
        ]
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  }
}
