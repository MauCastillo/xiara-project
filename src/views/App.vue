<template>
<div id="app">
    <Navbar />
    <Home />
    <Footer />
</div>
</template>

<script>
// import Base from '../components/Article.vue'
import Home from "./Home.vue"
import Footer from "./Footer.vue"
import Navbar from "./Navbar.vue"

export default {
    name: "app",
    components: {
        Home,
        Navbar,
        Footer
    }
}
</script>
