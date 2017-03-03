/**
 * 自定义 webpack@2 任务配置
 * 默认配置请查看 wcx/script/webpack-conf
 * 配置项请参考：https://webpack.js.org/configuration/#options
 * 可使用 process.env.NODE_ENV 区分 development、experiment、production 环境
 */

/**
 * webpack 自定义配置，与默认配置合并
 * @param  {object} rcObject 配置项 {babel:{}, eslint:{}, postcss:{}}
 * @return {function}
 */
module.exports = function(rcObject) {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                loaders: {
                  js: 'babel-loader?' + JSON.stringify(rcObject.babel) + '!eslint-loader?' + JSON.stringify(rcObject.eslint)
                },
                postcss: {
                  plugins: rcObject.postcss
                }
              }
            }
          ]
        }
      ]
    }
  }
}
