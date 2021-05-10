import Vue from 'vue'

import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible';
import 'normalize.css';
import Topbar from './components/topbar/Topbar.vue';
//  全屏滚动组件
import VueSwiper from 'vue-awesome-swiper';
import 'swiper';

// vue 视频播放组件
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css';


Vue.use(VueSwiper)
Vue.use(VueVideoPlayer)
Vue.use(router)
Vue.use(Topbar)
Vue.config.productionTip = false

new Vue({

  render: h => h(App),

}).$mount('#app')
