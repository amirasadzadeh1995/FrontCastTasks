const path = require("path");

Module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: "bundle.js",
  },
};
