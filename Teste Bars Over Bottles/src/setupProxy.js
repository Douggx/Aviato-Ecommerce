const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/api',
        {
            target: 'https://bob-teste-front-end.herokuapp.com',
            changeOrigin: true
        })
    )
}