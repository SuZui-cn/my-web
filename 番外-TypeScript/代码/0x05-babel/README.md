# Babel

经过一系列的配置，使得TS和webpack已经结合到了一起，除了webpack，开发中还经常需要结合babel来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。

1. 安装依赖包：

   - ```npm i -D @babel/core @babel/preset-env babel-loader core-js```
   - 共安装了4个包，分别是：
     - @babel/core
       - babel的核心工具
     - @babel/preset-env
       - babel的预定义环境
     - @babel-loader
       - babel在webpack中的加载器
     - core-js
       - core-js用来使老版本的浏览器支持新版ES语法

2. 修改webpack.config.js配置文件

   - ```javascript
     ...略...
     module: {
         rules: [
             {
                 test: /\.ts$/,
                 use: [
                     {
                         loader: "babel-loader",
                         options:{
                             presets: [
                                 [
                                     "@babel/preset-env",
                                     {
                                         "targets":{
                                             "chrome": "58",
                                             "ie": "11"
                                         },
                                         "corejs":"3",
                                         "useBuiltIns": "usage"
                                     }
                                 ]
                             ]
                         }
                     },
                     {
                         loader: "ts-loader",
     
                     }
                 ],
                 exclude: /node_modules/
             }
         ]
     }
     ...略...
     ```

   - 如此一来，使用ts编译后的文件将会再次被babel处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的targets中指定要兼容的浏览器版本。