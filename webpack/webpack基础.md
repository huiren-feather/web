# 基础知识

## 入口

指定起点

webpack.base.conf.js

```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

## 出口

输出文件

webpack.base.conf.js

```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

## loader

将非js文件转换成webpack能够处理的模块

 webpack 的配置中 **loader** 有两个目标：

1. `test` 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2. `use` 属性，表示进行转换时，应该使用哪个 loader。

```javascript
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```

## 插件plugins

插件可以用于执行范围更广的任务。

插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。

[插件接口](https://www.webpackjs.com/api/plugins)功能极其强大，可以用来处理各种各样的任务。

想要使用一个插件，你只需要 `require()` 它，然后把它添加到 `plugins` 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 `new` 操作符来创建它的一个实例。

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

const config = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```

## 服务和热更新

[webpack-dev-server](https://links.jianshu.com/go?to=https%3A%2F%2Fwebpack.js.org%2Fguides%2Fdevelopment%2F%23using-webpack-dev-server)功能： 
提供简单的web服务器以及热更新；

三种方式，常用2

1. webpack's [Watch Mode](https://webpack.docschina.org/configuration/watch/#watch)
2. [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
3. [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)

## CSS文件打包

### 一、CSS以style标的形式插入

#### 1.一般方法

​	1、下载loader： css-loader和style-loader

​	npm install css-loader style-loader -D

​	2、webpack.config.js配置

```
rules：[{
test:/\.css$/,
use:['style-loader','css-loader']
}]
```

#### 2.打包less和sass

##### less

​		1、下载less和less-loader

```cmake
npm i less less-loader -D		
```

​		2、webpack.config.js配置

```js
rules：[{
test:/\.css$/,
use:['style-loader','css-loader']
},
{
test:/\.less$/,
use:['style-loader','css-loader','less-loader']
}
]
```

##### Sass

需要npm下载node-sass和sass-loader，使用方法同上，注意：sass文件的后缀名是scss

### 二、提取css为单独文件

使用mini-css-extract-plugin插件

#### 1.下载

```coffeescript
npm i mini-css-extract-plugin -D
```

#### 2、引入-在webpack.config.js中引入插件

```
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
```

#### 3、配置-在webpack.config.js的plugins里面new插件

```js
rules：[{
test:/\.css$/,
use:[MiniCSSExtractPlugin.loader,'css-loader']
},
{
test:/\.less$/,
use:[MiniCSSExtractPlugin.loader,'css-loader','less-loader']
}
],
plugins: [
new MiniCSSExtractPlugin({
filename: './src/css/.css'    //指定打包好的CSS文件名
})
]
```

#### 4、当filename指定路径后 ps: 所有的css和less文件都被打包到了一个css中

### 三、处理css的浏览器兼容性

使用postcss处理，需要下载两个包--post-loader和postcss-preset-env

#### 1、下载

```coffeescript
npm i post-loader postcss-loadr postcss-preset-env -D
```

#### 2、配置

a、在package.json同级目录下创建postcss.config.js，里面配置如下代码

```
module.exports = {
	plugins: [
		require('postcss-preset-env')()
	]
}
```

b、在package.json文件中设置兼容的浏览器规则

```
"browserslist": [
	">0.2%",
	"last 2 versions",
	"not dead"
]
```

c、在webpack.config.js中配置loader

```
rules：[{
test:/\.css$/,
use:[MiniCSSExtractPlugin.loader,'css-loader','postcss-loader']
},
{
test:/\.less$/,
use:[MiniCSSExtractPlugin.loader,'css-loader','less-loader','postcss-loader']
}
]
```

### 四、压缩CSS

使用optimize-css-assets-webpack-plugin

#### 1、下载

```coffeescript
npm i optimize-css-assets-webpack-plugin -D
```

#### 2、引入:在webpack.config.js引入

```isbl
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
```

#### 3、配置

```
plugins: [
	new OptimizeCssAssetsWebpackPlugin()
]
```

## 图片打包

图片打包关键要用到**file-loader**或**url-loader**，其中**url-loader**与**file-loader**功能基本一致，只不过**url-loader**能将小于某个大小的图片进行base64格式的转化处理。

### 1、CSS中的图片

#### 1.安装file-loader

```
npm i -D file-loader
```

#### 2.在webpack.config.js中的rules数组中添加file-loader的相关配置

```
{
    test: /\.(png|jpg|gif|svg)$/,
    use: ['file-loader']
}
```

其实对于只有单个loader的，我们还可以将其简化成下面这样：

```
{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader'
}
```

如果需要保持图片名不变，添加到指定目录：

```
{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
        name: 'images/[name].[ext]'
    }
}
```

### 2、js中的图片

如果要正常打包的话需要先将图片资源加载进来，然后再将其作为图片路径添加至图片对象。具体代码如下：

```
// index.js
var imgSrc = require('../images/1.jpg');

var img = new Image();
img.src = imgSrc;
document.body.appendChild(img);
```

### 3. 浅谈url-loader

除了使用file-loader对图片进行打包处理外，我们同样也可以使用url-loader代替，另外我们还可以对小于某个大小的图片进行base64格式的转化处理。

```
{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader',
    options: {
        name: './images/[name].[ext]',
        limit: 8192
    }
}
```

当然，如果不写limit属性，那么url-loader就会默认将所有图片转成base64。

