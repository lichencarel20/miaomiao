module.exports = {
    devServer: {
      proxy: {
        '/ajax': {
          target: "https://m.maoyan.com",
          changeOrigin: true
        },
        '/data': {
          target: "http://www.weather.com.cn",
          changeOrigin: true
        }
      }
    }

  }