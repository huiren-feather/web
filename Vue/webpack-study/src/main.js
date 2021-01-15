// main.js是项目的JS入口文件

// 1.导入 jQuery
// import ... from ...   是ES6中导入模块的方式
// 由于ES6的代码太高级了，浏览器解析不了，所以这一行会报错
import $ from '../node_modules/jquery'

// const $ = require('jquery')

$(function() {
    $('li:odd').css('backgroundColor', 'lightblue');
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97643'
    });
});