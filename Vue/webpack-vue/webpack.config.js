
// 这个配置文件就是一个JS文件，通过Node中的模块操作，向外暴露了一个配置对象



const path = require('path')
// 启用热更新的第二步
const webpack=require('webpack')

// 首先命令行安装插件： npm i html-webpack-plugin -D
// 导入在内存中生成HTML页面的插件
// 只要是插件，都一定要放到plugin节点中去
// 这个插件的两个作用：
// 1.自动在内存中根据指定页面生成一个内存的页面
// 2.自动把打包好的bundle.js 追加页面中去
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
  // 在配置文件中，需要手动指定入口和出口
  entry: path.join(__dirname, './src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件

  // 配置dev-server命令参数的第二种方式，相对来说，这种方式麻烦一些
  devServer:{ 
    open:true,//自动打开浏览器
    port:3000,//设置启动端口
    contentBase:'src',//指定托管的根目录
    hot:true//启用热更新的第一步
  },
  plugins:[//配置插件的节点
    new webpack.HotModuleReplacementPlugin(),  //new一个热更新的模块对象，这是启用热更新的第三步,我的好像不需要二三两步了
    new htmlWebpackPlugin({
      // 创建一个在内存中生成HTML页面的插件
      // 根据指定的模板页面生成内存中的页面
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'//指定生成的页面的名称，这个随意
    })
  ],
  module:{
    // 这个节点用于配置第三方模块加载器
    rules:[
      // 所有第三方模块的匹配规则
      //   正则表达式      从右到左调用加载器
      {test:/\.css$/,use:['style-loader','css-loader']},
      // 配置处理less文件的第三方loader规则
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      // 配置处理.scss文件的第三方loader规则
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
      // 图片,一个loader时，可以直接用字符串,会以base64编码展示，
      // 加上?limit=19064 ，小于图片大小时，就会以图片格式展示,19065是图片本身的大小
      // name=[name].[ext],确保图片名字和格式不会变化          
      // [hash:8]-  :使用相同名称和格式的图片，解决办法，前面加个8位哈希值  
      {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=19064&name=[hash:8]-[name].[ext]'},
      // 处理字体文件
      {test:/\.(woff|ttf|woff2|eot|svg)$/,use:'url-loader'},
      // 转换高级语法的babel
      {test:/\.js$/,use:{loader:'babel-loader'}, exclude: /(node_modules|bower_components)/}


    ]
  },
  // mode:"development",

  // resolve:{
  //   alias:{
  //     'vue$':'vue/dist/vue.esm.js'
  //   }
  // },
  output: { // 输出文件相关的配置
    path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件的名称
  }
}

// 当我们在控制台直接输入webpack命令执行的时候，webpack做了几步：
// 1.首先，webpack发现我们并没有通过命令的形式，给它指定入口和出口
// 2.webpack就会去项目的根目录中，插查找一个叫做‘webpack.config.js’ 的配置文件
// 3.当找到配置文件后，webpack 会去解析执行这个配置文件，当解析解析执行完配置文件后，就得到了配置文件中，导出的配置对象
// 4.当webpack拿到配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建


// 更进一步：不用再输入webpack，让它自动打包 
// 使用：webpack-dev-server 工具，来实现自动打包编译的功能
// 1.运行npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法和webpack命令的用法完全一样
// 3.由于我们是在项目中，本地安装的webpack-dev-server，所以无法把他当做脚本命令，在powershell中直接运行；
// （只有那些安装到全局-g的工具，才能在终端中运行）

// 4.注：webpack-dev-server这个工具，如果想要正常运行，要求在本地项目中，必须安装webpack（即使已经全局安装过）
// 5. webpack-dev-server 帮我们打包生成的bundle.js文件，并没有存放到实际的物理磁盘中，而是直接托管到了电脑的内存中，
// 所以在根目录中看不到这个文件;
// 目的：在内存中打包快，不会消耗磁盘
// 6.可以认为，webpack-dev-server 把打包好的文件，以一种虚拟的形式，托管到了项目的根目录中，虽然看不见，但是可以认为，和
// dist  src node_modules 平级，有一个看不见的文件 ，叫做bundle.js
// in package.json
    // "build": "webpack",
    // "start": "webpack serve --open",