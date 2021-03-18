import Vue from 'vue'
import App from './App.vue'

import 'lib-flexible/flexible';
import 'normalize.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
