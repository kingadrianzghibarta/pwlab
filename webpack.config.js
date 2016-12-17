var config = {
  entry: './react-app/main.js',

  output: {
    path:'./',
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 12121
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',

        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;