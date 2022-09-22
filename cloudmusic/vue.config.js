const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '128.0.0.1',
   port: 8080,
   client: {
     webSocketURL: 'ws://192.168.0.103:8080/ws',
   },
    headers: {
     'Access-Control-Allow-Origin': '*',
  }
},
})

// vant按需引入插件
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
};
