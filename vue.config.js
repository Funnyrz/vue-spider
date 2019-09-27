const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/',
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin('provide').use(new MonacoWebpackPlugin);
    },
    devServer: {
        proxy: {
            'auth': {
                target: 'http://52.198.230.119:8089', //后端接口地址
                changeOrigin: true, //是否允许跨越
            }
        }
    }
};