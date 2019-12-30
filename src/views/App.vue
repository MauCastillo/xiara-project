<template>
  <div id="app">
    <Navbar />
    <Home />
    <Footer />
  </div>
</template>

<script>
// import Base from '../components/Article.vue'
import Home from "../components/Home.vue"
import Footer from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue"

export default {
  name: "app",
  components: {
    Home,
    Navbar,
    Footer
  }
}
</script>
