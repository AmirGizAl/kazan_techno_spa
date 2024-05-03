const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/kazan_techno_spa/' // Замените на путь, по которому ваше приложение будет доступно в браузере
      : '/',
  transpileDependencies: true
}

