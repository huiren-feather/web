
// 这是项目的js入口文件

// 1.导入jQuery
// 由于ES6中的代码，太高级了，浏览器解析不了，所以报错
import $ from 'jquery'

// const $=require('jquery')

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
