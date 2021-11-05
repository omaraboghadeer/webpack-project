const path = require('path');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";
const plugins = [
    new MiniCssExtractPlugin(),
    new ReactRefreshWebpackPlugin(),
];

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
} else {
    plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
    mode: mode,
    target: target,

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset", //resource "", inline "will add it in js bundle as base64"
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024,
                //     }
                // }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: { publicPath: "" },
                    },
                    "css-loader", 
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },

    plugins: plugins,

    resolve: {
        extensions: [".js", ".jsx"],
    },

    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true
    }
}