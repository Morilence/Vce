// const path = require("path");

module.exports = {
    publicPath: "./",
    outputDir: "docs",
    assetsDir: "assets",
    productionSourceMap: false,
    filenameHashing: false,
    pages: {
        index: {
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "Vce"
        }
    },

    lintOnSave: true,

    devServer: {
        open: true,
        host: "0.0.0.0",
        port: 3000,
        https: false,
        hotOnly: true,
        disableHostCheck: true,
        historyApiFallback: false
    },

    css: {
        requireModuleExtension: true,
        extract: false,
        sourceMap: false
    },

    chainWebpack: config => {
        config.module
            .rule("vue")
            .test(/\.vue$/)
            .use("vue-loader")
            .loader("vue-loader")
            .end()
            .use("iview-loader")
            .loader("iview-loader")
            .options({
                prefix: true
            })
            .end();
    }

    // chainWebpack: config => {
    //     config.module
    //         .rule("stylus")
    //         .oneOf("vue")
    //         .use("style-resource")
    //         .loader("style-resources-loader")
    //         .options({
    //             patterns: [
    //                 path.resolve(__dirname, "./src/style/styl/variables.styl"),
    //                 path.resolve(__dirname, "./src/style/styl/mixins.styl")
    //             ]
    //         });
    // }
};
