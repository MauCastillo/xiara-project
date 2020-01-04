import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from "./views/Blog.vue"
import Article from "./views/Article.vue"
import Home from "./views/Home.vue"

Vue.use(VueRouter)

const routes = [
    { path: '/blog', component: Blog },
    { path: '/article/:post_id', component: Article },
    { path: '/', component: Home }
]

export const router = new VueRouter({
    routes,
    linkExactActiveClass: 'nav-item active'
})

export default routes

