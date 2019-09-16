const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
    chainWebpack: config => {
        config.plugin('provide').use(new MonacoWebpackPlugin);
    }
};