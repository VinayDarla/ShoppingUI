const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/app1', {
      //target: 'http://localhost:8082', // API endpoint 1
     target: 'http://shoppingappuserservice-env.eba-8cpg2smd.ap-northeast-1.elasticbeanstalk.com/',
      changeOrigin: true,
      pathRewrite: {
        "^/app1": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/app2', {
      //target: 'http://localhost:8083', // API endpoint 2
     target: 'http://shoppingappproductservice-env.eba-sgamrgvi.ap-northeast-1.elasticbeanstalk.com/',
      changeOrigin: true,
      pathRewrite: {
        "^/app2": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}
