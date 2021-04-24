import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import myHeart from '../components/Love.vue'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Hi',
      name:Hi,
      component:Hi,
      children:[
        {
          path:'/',
          name:'Hi',
          component:Hi
        },
        {
          // 路径不需要加/
          name:'hi1',
          path:'hi1',
          component:Hi1
        },
        {
          name:'hi2',
          path:'hi2',
          component:Hi2
        }
      ]
    },
    {
      path:'/love',
      name:'myHeart',
      component:myHeart
    }
  ]
})
