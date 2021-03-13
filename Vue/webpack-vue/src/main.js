// 入口文件
// 如何在webpack构建的项目中，使用Vue进行开发
// 1.安装包 ： npm i vue -S
// 2.


// 复习:  如何在普通网页中使用Vue:
// 1.使用script标签,引入Vue包
// 2.在index页面中，创建一个id为app div的容器
// 3.通过new Vue得到一个vm实例

// 在webpack中使用Vue:
// 注：在webpack中，使用import Vue from 'vue'，功能不完整，只提供了runtime-only的方式，并没有提供像网页中那样的使用方式,
// 所以页面报错，提供了解决办法：
import Vue from 'vue'

// 解决办法一：引用完整包  vue.esm.js也可以
// import Vue from '../node_modules/vue/dist/vue.js'

// 解决办法二：使用import Vue from 'vue'，并且在配置文件中webpack.config.js
// resolve:{
//     alias:{
//       'vue$':'vue/dist/vue.esm.js'
//     }
//   },
// 回顾包的查找规则：
// 1.找项目根目录中有没有node_modules的文件夹
// 2.根据包名找对应的vue文件夹
// 3.在vue文件夹找一个叫做package.json的包配置文件
// 4.在package文件中，查找一个main属性【main属性指定了这个包在被加载时的入口文件】

// var login={
//     template:'<h1>这是使用网页中得形式创建的组件</h1>'
// }

// 1.导入login组件
import login from './login.vue'
import test from './test'
// 2.默认webpack无法打包.vue文件，需要安装相关的loader：
// npm i vue-loader vue-template-complier -D
// 在配置文件中，新增loader配置项 {test:/\.vue$/,use:'vue-loader'}

var vm=new Vue({
    el:'#app',
    data:{
        msg:'123'
     },
    // components:{
    //     login
    // }
    // webpack中，如果想通过vue，把一个组件放到页面中去展示，vm 实例中的render函数可以实现
    // render:function(createElements){
    //     return createElements(login)
    // }

    // 简写形式
    render:c=>c(login)
})


// 总结梳理：webapck中使用VUE
// 1.首先，安装vue包：npm i vue -S
// 2.由于在webpack中，推荐使用.vue这个组件模板文件定义组件，所以需要安装能解析这种文件的loader ：npm i vue-loader vue-template-complier -D
// 注：vue-loader15版本以上，还要安装插件在配置文件中：const VueLoaderPlugin  = require('vue-loader/lib/plugin')
// plugins:[  new VueLoaderPlugin()]
    // 处理Vue文件
    // {test:/\.vue$/,use:'vue-loader'}
// 3.在main.js 中，导入vue模块， import Vue form 'vue'
// 4.定义一个.vue结尾的组件，其中由三部分组成：template ，script ，style
// 5.使用import login from './login.vue'导入这个组件
// 6.创建VM实例：var vm=new Vue({el:#app,render:c=>c(login)})
// 7.在页面中创建一个id为app的div元素，作为vm实例的控制区


import m1,{title as ttt,content} from './test.js'

console.log(m1);
// console.log(title+'----'+content);
console.log(ttt+'----'+content);