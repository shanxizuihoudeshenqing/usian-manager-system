const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 端口号
    port: 9999,
    // 主机名
    host: "localhost",
    // 是否自动打开浏览器
    open: true,
    // 是否开启https
    https: false,


    // 深入学习webpack --- 国庆作业

    

    // 配置跨域
    proxy:{
      // /dev-api  代理名称
      "/dev-api":{
        // 跨域地址
        target:"http://localhost:3000",
        // 开启跨域
        changeOrigin:true,
        // 路径重写
        pathRewrite :{
          "^/dev-api" :''
        }
      }
    }
  },

  // 关闭eslint
  lintOnSave:false
});
