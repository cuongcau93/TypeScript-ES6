module.exports = {
    entry: ["./libs/sammy.mustache.js", "./app.ts"],
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
}