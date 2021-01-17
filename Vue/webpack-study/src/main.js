
// 这是项目的js入口文件

// 1.导入jQuery
// 由于ES6中的代码，太高级了，浏览器解析不了，所以报错
import $ from 'jquery'

// 使用import语法，导入css样式表，因为没有东西暴露出来，只需路径即可
import './css/index.css'

import './css/index.less'

// scss文件的命令行：npm i sass-loader -D ,发现需要另外三个依赖包，教程上只装了了一个：npm i node-sass -D,我也是
import './css/index.scss'

// 注：如果要通过路径的形式，去引入node_modules中相关的文件，可以直接省略node_modules
import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
// 注：webpack，默认只能打包处理js类型的文件；如果要处理非js类型的文件，需要手动安装一下合适的第三方loader加载器
// 1.打包css文件，需要安装：npm i style-loader css-loader -D
// 2.打开webpack.config.js文件，在里面新增一个配置节点：module，是一个对象；
// 在这个对象上，有一个rules属性，是个数组，其中存放了所有第三方的匹配和处理规则

//注：webpack处理第三方文件类型的过程：
// 1.发现这个要处理的文件不是JS文件，然后就去配置文件中，查找有没有对应的第三方loader规则
// 2.如果能找到对应的规则，就会调用对应的loader处理这种文件类型
// 3.在调用loader的时候，是从后往前调用的
// 4.当最后一个loader调用完毕，会把处理的结果，直接交给webpack进行打包合并，最终输出到bundle.js中去


// const $=require('jquery')

//class关键字，是ES6中提供的新语法，用来实现ES6中面向对象编程的方式
class Person{
    // 使用static 可以定义静态属性
    // 静态属性：可以直接通过类名直接访问的属性
    // 实例属性：只能通过类的实例，来访问的属性，叫做实例属性
    static info={name:'zs',age:20}
};
// 访问Person类上的info 属性
console.log(Person.info);

// 在webpack中，只能处理一部分ES6的新语法，需要借助于第三方的loader，当loader转为低级语法后，会把结果交给webapck去打包到bundle.js
// 通过Babel，可以转换语法
// 1.在webpack 中可以运行如下两套命令，安装两套包，去安装Babel相关的loader功能：
//  npm i babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D 
//  npm i @babel/runtime -D
//  npm i @babel/plugin-proposal-class-properties -D
// 2.打开webpack 的配置文件，在module节点下的rules数组中，添加一个新的匹配规则：
// {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
// 或者：{test:/\.js$/,use:{loader:'babel-loader'}, exclude: /(node_modules|bower_components)/}
// 注：在配置babel的loader规则的时候，必须把node_module目录，通过exclude选项排除掉；
//   原因：如果不排除，会打包node_module，非常消耗CPU，速度也会非常慢；即使打包完成，项目也无法正常运行
// 3.在项目的根目录中，新建一个叫做.babelrc 的babel配置文件，这个文件属于JSON格式，必须符合JSON语法规范：不能写注释；字符串必须用双引号
// 3.1在.babelrc写的配置：
//     // preset可以当做“语法”
//     {
//     "presets":["@babel/preset-env"],
//       //  对应之前装的插件，不需要带前缀
//     "plugins": ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"]
// }
      

// 4.目前安装的babel-preset-env，是新的语法插件,它包含了所有和ES*相关的语法
var p1=new Person();

// 和下面等同
// function Animal(name){
//     this.name=name;
// }
// var a1=new Animal('小花')

$(function(){
    $('li:odd').css('backgroundColor','lightgreen');
    $('li:even').css('backgroundColor','lightblue');

});


// webpack能做什么
// 1.webpack能够处理JS文件的相互依赖关系
// 2.webpack能够处理JS的兼容问题，把高级的、浏览器不识别的语法，转为低级的，浏览器能正常识别的语法

// 运行的命令格式：webpack 
// 因为已经做了webpack.config.js

// 问题：使用webpack 入口文件  输出文件   。提示：Unknown Command 入库文件 （未解决）
