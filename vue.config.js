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
  },

  // 关闭eslint
  lintOnSave:false
});
