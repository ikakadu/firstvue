const {defineConfig} = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')


module.exports = defineConfig({
    transpileDependencies: true
    , lintOnSave: false // 关闭语法检查
    , configureWebpack: {
        plugins: [new NodePolyfillPlugin()],
        resolve: {
            fallback: {
                "fs": false,
                "path": false,
            }
        }

    }
    , devServer: {
        port: 8081,  // 端口号的配置
        host: 'localhost',
        // open:true,   // 自动打开浏览器
        /*proxy: { //代理，解决跨域
            '/api': {
                target: 'http://localhost:8080',
                // target:'http://www.baidu.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }*/
    }

})
