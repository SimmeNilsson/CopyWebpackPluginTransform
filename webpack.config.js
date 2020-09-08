const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function () {
    return {
        entry: {
            "main": "./main.js"
        },
        mode: "production",
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        ecma: 6
                    }
                })
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: "./filetocopy.js", to: "./" }
                ]
            })
        ]
    };
};