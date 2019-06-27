const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/icym.php', { target: 'https://icy.design',changeOrigin:true }));
  // https://icy.design/m.php?method=Userinfo.get&appId=4
  // https://icy.design/icym.php?method=icy.getHome&appId=4&page=1&pageSize=20
  app.use(proxy('/m.php', { target: 'https://icy.design',changeOrigin:true }));
}
