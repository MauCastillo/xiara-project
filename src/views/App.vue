<template>
  <div id="app">
    <Base/>
    <Home/>
  </div>
</template>

<script>
import Base from '../components/Article.vue'
import Home from '../components/Home.vue'
export default {
  name: 'app',
  components: {
    Home,
    Base
  }
}
</script>
