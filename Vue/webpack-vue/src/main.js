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

var vm=new Vue({
    el:'#app',
    data:{
        msg:'123'
     }//,
    // components:{
    //     login
    // }
})