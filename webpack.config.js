const path = require("path");
const webpack = require("webpack");
const { name, version, author, license } = require("./package.json");

const TerserPlugin = require("terser-webpack-plugin");

function getEntryConfig(isAll) {
  if (isAll) {
    return "./src/indexAll.js";
  }

  return "./src/index.js";
}

function getOutputConfig(isProduction, isCDN, isAll, minify) {
  const filename = `toastui-${name.replace(/@leeonfield\//, "")}`;

  if (!isProduction || isCDN) {
    const config = {
      library: ["toastui", "Editor", "plugin", "codeSyntaxHighlight"],
      libraryExport: "default",
      libraryTarget: "umd",
      path: path.resolve(__dirname, "dist/cdn"),
      filename: `${filename}${isAll ? "-all" : ""}${minify ? ".min" : ""}.js`,
    };

    if (!isProduction) {
      config.publicPath = "dist/cdn";
    }

    return config;
  }

  return {
    libraryExport: "default",
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "dist"),
    filename: `${filename}.js`,
  };
}

function getOptimizationConfig(isProduction, minify) {
  const minimizer = [];

  if (isProduction && minify) {
    minimizer.push(
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: false,
      })
    );
  }

  return { minimizer };
}

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const minify = !!argv.minify;
  const isCDN = !!argv.cdn;
  const isAll = !!argv.all;
  const config = {
    mode: isProduction ? "production" : "development",
    entry: getEntryConfig(isAll),
    output: getOutputConfig(isProduction, isCDN, isAll, minify),
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules|dist/,
          loader: "eslint-loader",
          enforce: "pre",
          options: {
            failOnError: isProduction,
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules|dist/,
          loader: "babel-loader?cacheDirectory",
          options: {
            rootMode: "upward",
          },
        },
      ],
    },
    optimization: getOptimizationConfig(isProduction, minify),
  };

  if (isProduction) {
    config.plugins = [
      new webpack.BannerPlugin(
        [
          "TOAST UI Editor : Video plugin",
          `@version ${version} | ${new Date().toDateString()}`,
          `@author ${author}`,
          `@license ${license}`,
        ].join("\n")
      ),
    ];
  }

  return config;
};
