import Vue from 'vue'
import App from './views/App.vue'
import Home from "./views/Home.vue"
import Footer from "./views/Footer.vue"
import VueRouter from 'vue-router'


import '@/assets/css/main.css'
import '@/assets/css/fontawesome-all.min.css'

Vue.use(VueRouter)

Vue.config.productionTip = false

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Home },
  { path: '/bar', component: Footer }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
