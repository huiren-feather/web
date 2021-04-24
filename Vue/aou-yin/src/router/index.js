import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'index',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/index/Index.vue'),
      },
      {
        path: '/friends',
        name: 'friends',
        component: () => import(/* webpackChunkName: "fllow" */ '../views/friends/Friends.vue'),
      },
      {
        path: '/msg',
        name: 'msg',
        component: () => import(/* webpackChunkName: "msg" */ '../views/message/Message.vue'),
      },
      {
        path: '/me',
        name: 'me',
        component: () => import(/* webpackChunkName: "me" */ '../views/me/Me.vue'),
      },
    ],
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import(/* webpackChunkName: "publish" */ '../views/publish/Publish.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;