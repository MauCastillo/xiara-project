<template>
<div id="app">
    <Navbar />
    <Footer />
</div>
</template>

<script>

import Footer from "./Footer.vue"
import Navbar from "./Navbar.vue"

export default {
    name: "app",
    components: {
        Navbar,
        Footer
    }
}
</script>
