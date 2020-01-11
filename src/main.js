import Vue from 'vue'
import App from './views/App.vue'
import { router } from './resource/routes'
import '@/assets/css/main.css'
import '@/assets/css/fontawesome-all.min.css'
import VueMeta from 'vue-meta'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueMeta)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
