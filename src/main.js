import Vue from 'vue'
import App from './views/App.vue'
import VueRouter from 'vue-router'

import '@/assets/css/main.css'
import '@/assets/css/fontawesome-all.min.css'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
