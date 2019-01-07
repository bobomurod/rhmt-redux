'use strict';

var path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        "index": "./index.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            }
        ]
    },
    devtool: "source-map",
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    }
};
