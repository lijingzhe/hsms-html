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
  }
}