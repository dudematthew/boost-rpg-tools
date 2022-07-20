const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir: 'assets',
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/boost-rpg-tools'
    : "/"
})
