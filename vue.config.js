module.exports = {
    configureWebpack: {
      resolve: {
        //设置别名
        alias: {
          'assets': '@/assets',
          'components': '@/components',
          'views': '@/views',
          'store': '@/store',
          'utils':'@/utils',
          'api':'@/api',
          'config':'@/config'
        }
      }
    },
}