module.exports = {
  
  // This code will be compiled 
  entry: "../src/app.jsx",

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ["react", "es2015"]
      }
    }],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
