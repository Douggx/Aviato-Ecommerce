const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/api/products.json',
        {
            target: 'https://bob-teste-front-end.herokuapp.com',
            changeOrigin: true
        })
    )
}