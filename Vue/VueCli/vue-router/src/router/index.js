import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // 去掉URL中的#；hash是加上#
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component:Hello
    },    
    {
      path:'/params/:newId(\\d+)/:newsTitle',
      component:Params,
      // 1、钩子函数
      // beforeEnter:(to,from,next)=>{
      //   console.log(to);
      //   console.log(from);
      //   console.log(next);
      //   // 接下去跳转到哪，不写或者写true，就是此组件的路径
      //   next('/');

      // }
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newId(\\d+)/:newsTitle',
      redirect:'/params/:newId(\\d+)/:newsTitle'
    },
    {
      path:'/hi1',
      component:Hi1,
      // 别名在根路径是不起作用的
      alias:'/jspang'
    },
    // 404页面设置
    {
      path:'*',
      component:Error

    }

  ]
})
