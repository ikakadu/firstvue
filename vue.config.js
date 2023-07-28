const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  ,lintOnSave:false // 关闭语法检查
  ,devServer:{
    port:8081,  // 端口号的配置
    host: 'localhost',
    // open:true,   // 自动打开浏览器
    proxy:{ //代理，解决跨域
      '/api':{
        target:'http://localhost:8080',
        // target:'http://www.baidu.com',
        changeOrigin:true,
        ws:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }

})
