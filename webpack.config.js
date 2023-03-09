const path = require('path')
const PugPlugin = require('pug-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.pug'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    filename: 'js/[name]-bundle.js',
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      css: {
        filename: 'css/[name]-bundle.css'
      }
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'], // подставление префиксов для старых браузеров
                  'postcss-import', // объединяет css
                  'css-mqpacker', // объединяет медиа запросы
                  'cssnano' // минификация css
                ]
              }
            }
          }, 
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|ico|svg)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]'
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  stats: 'errors-only',
}