const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
            args[0].title = "Muhammad Rajah - Porfolio"; 
            return args;
          });
  },
  pwa: {
      iconPaths: {
          favicon32: "img/icons/favicon.ico", 
          favicon16: "img/icons/favicon.ico"  
      }
  }
});
