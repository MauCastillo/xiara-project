import Vue from 'vue'
import App from './views/App.vue'
import { router } from '@/routes'
import '@/assets/css/main.css'
import '@/assets/css/fontawesome-all.min.css'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
