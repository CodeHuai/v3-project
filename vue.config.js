const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
      .set('utils', '@/utils')
      .set('components', '@/components')
      .set('asset', '@/asset')
      .set('store', '@/store')
      .set('router', '@/router')
  }
})
