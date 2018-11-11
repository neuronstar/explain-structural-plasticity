import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueAnime from 'vue-animejs'

import router from './router'
import App from './App'


Vue.use(Buefy)
Vue.use(VueAnime)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
