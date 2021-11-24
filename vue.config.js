const env = process.env.NODE_ENV;
const webpack = require("webpack");

module.exports = {
  publicPath: env === "production" ? "/basevue/" : "/",
  configureWebpack: () => {
    return {
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jquery: "jquery",
          "window.jQuery": "jquery",
          jQuery: "jquery",
        }),
      ],
    };
  },
  css: {
    sourceMap: true,
  },
};
