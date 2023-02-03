import path from "path";

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: path.resolve(__dirname, "./server/server.ts"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  target: "node",
};
