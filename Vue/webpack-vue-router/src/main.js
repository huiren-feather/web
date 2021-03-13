import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装VueRouter
Vue.use(VueRouter)
// 导入app组件
import app from './App.vue'
// 导入account组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
// 3.创建路由对象
var router =new VueRouter({
    routes:[
        // account goodslist
        {path:'/account',component:account},
        {path:'/goodslist',component:goodslist},

    ]
})
var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    // 4.将路由对象挂载到VM上
    router
})

// 注：APP这个组件，是通过VM实例的render函数渲染出来的，render 函数如果要渲染组件，渲染出来的组件，只能放到el:'#app'所指定的元素中
// 注：Account 和GoodsList组件，是通过路由匹配监听到的，所以