const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/',
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin('provide').use(new MonacoWebpackPlugin);
    }
};