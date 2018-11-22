/*
cnpm i -D
webpack webpack-cli
style-loader css-loader
less-loader less
postcss-loader autoprefixer
url-loader file-loader
babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env
vue-loader vue-template-compiler vue
html-webpack-plugin
mini-css-extract-plugin
string-replace-loader
filemanager-webpack-plugin
webpack-dev-server

cnpm i -S
vue vue-router
*/
/*
"dev": "webpack-dev-server --config webpack.config.js --mode development",
"open": "webpack-dev-server --open --config webpack.config.js --mode development",
"build": "webpack --env.production --config webpack.config.js --progress",
*/

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = function (env, args) {
  // $ webpack --env.production
  // console.log('webpack args:', args)

  env = env || {}
  return {
    // --mode=production webpack 4+ 压缩输出
    mode: 'production',
    // 打包入口
    entry: {
      // 一个入口对应一个包
      // 入口包不能同时是子chunk
      main: './src/index.js',
    },
    // 输出配置
    output: env.production ?
      // production
      {
        // [path]/[entry.name]
        // 输出包[entry.name] 
        // filename:[chunkhash]不能和热替换插件同用
        filename: '[name].js____[hash:5].js',
        // [path]/js/[chunk]
        chunkFilename: 'js/[name].js____.[hash:5].js',
        // [path]: output file root
        path: path.resolve(__dirname, 'dist/assets'),
        // [path]/sourcemaps
        sourceMapFilename: 'sourcemaps/[file].map',
        // [index.html]./assets/[filename]
        publicPath: './assets/',
      } :
      // dev
      {
      },
    // 模块加载配置
    module: {
      // loader规则
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              // presets: ['@babel/preset-env'],
              // plugins: ['@babel/transform-runtime']
            }
          }
        },
        {
          test: /\.coffee$/,
          use: ['coffee-loader']
        },
        {
          test: /\.vue$/,
          use: [
            'vue-loader'
          ]
        },
        {
          test: /\.(css|less)$/,
          // --
          use: [
            // 'style-loader', // css文本转成<style>放到<head>
            {
              loader: 'style-loader',
              options: {
                // 运行时文本替换
                transform: './webpack.style-loader.transform.js'
              }
            },
            'css-loader', // css文件转成文本
            'postcss-loader',
            'less-loader',
          ],
          // ++
          use: [
            env.production ?
              {
                loader: MiniCssExtractPlugin.loader, // css 提取出单独文件[]
                options: {
                  publicPath: '../'
                }
              } : 'style-loader',
            'css-loader',
            'postcss-loader',
            'less-loader',
            // 文本替换
            {
              loader: 'string-replace-loader',
              options: {
                multiple: [
                  {
                    search: 'MicrosoftYaHei-Bold', replace: 'MicrosoftYaHei;font-weight:bold', flags: 'ig',
                  }
                ]
              }
            }
          ]
        },
        // todo
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ]
        },
        // 二进制文件
        {
          test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
          // 转 base64
          loader: 'url-loader',
          options: {
            // 超过指定字节，则使用fallback
            limit: 2 * 1024,
            fallback: {
              // 打包文件并返回uri
              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]____[hash:5].[ext]',
                // name: '[name].[ext]____[hash:5].[ext]',
              }
            },
          },
        }
      ]
    },
    // 插件
    plugins: [
      // vue 语言块映射到配置好的语言loader
      // 比如 <script> 映射到 '.js' loader
      new VueLoaderPlugin,
      // 生成 index.html
      new HtmlWebpackPlugin({
        // 文件模板
        template: './src/index.html',
        // 输出位置
        filename: env.production ?
          '../index.html' : // dist/assets/../index.html
          './index.html', // 热替换貌似只能跟资源在同层级目录
        chunks: ['main', 'vendors']
      }),
      // new HtmlWebpackPlugin({
      //   template: './mobile.html',
      //   filename: env.production ?
      //     '../mobile.html' :
      //     './mobile.html',
      //   chunks: ['mobile']
      // }),
      // 定义变量 process.env
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: env.production ? '"production"' : '"development"'
        }
      }),
    ]
      // 开发环境
      .concat(
        !env.production ? [
          // 模块热替换[]
          new webpack.HotModuleReplacementPlugin(),
        ] : [])
      // 生产环境
      .concat(
        env.production ? [
          // css 提取出单独文件[]
          new MiniCssExtractPlugin({
            filename: "css/[name].[hash:5].css",
            chunkFilename: "css/[id].[hash:5].css"
          }),
          // 删除与打包
          new FileManagerPlugin({
            onStart: {
              delete: [
                // 'dist',
                'dist/*',
                'dist/index.html',
                'dist/assets/*',
                'dist.*',
              ],
            },
            onEnd: {
              archive: [{
                source: './dist',
                destination: './dist.' + function () {
                  var date = new Date
                  return [
                    // date.getFullYear(),
                    date.getMonth() + 1,
                    '-',
                    date.getDate(),
                    '_',
                    date.getHours(),
                    '-',
                    date.getMinutes(),
                    // date.getSeconds()
                  ].map((item) => {
                    return item < 10 ? '0' + item : item
                  }).join('')
                }() + '.zip'
              }]
            }
          }),
        ] : []),
    // source map
    devtool: 'source-map',
    // 开发服务器 webpack-dev-server
    devServer: {
      host: '0.0.0.0',
      useLocalIp: true,
      hot: true, // 模块热替换[]
      historyApiFallback: true, // 404->index.html
      // 接口代理
      proxy: {
        '///userOperating': {
          target: 'http://172.16.140.67:8091',
          changeOrigin: true
          // secure: false,
        }
      }
    },
    // performance: {
    //   // hints: false, // 警告提示
    // }  
    optimization: env.production ?
      // 开发环境不要设置，会使代码不执行
      {
        // 代码分离
        splitChunks: {
          cacheGroups: {
            // 依赖库单独打包 vendors.js
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
      } : {}
  }
}