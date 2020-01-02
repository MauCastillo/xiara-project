<template>
<div id="page-wrapper">
    <!-- Main -->
    <section id="main">
        <div class="container">
            <!-- Content -->
            <article class="box post">
                <a href="#" class="image featured">
                    <img src="images/pic01.jpg" alt />
                </a>
                <header>
                    <h2>{{ $route.params.post_id }}</h2>
                    <p>Lorem ipsum dolor sit amet feugiat</p>
                </header>
                <div>User {{ $route.params.post_id }}</div>

                <h1>No entiendo que esta pasando {{mensaje}}</h1>
                <h1>No tiene sentido: {{cosa}}</h1>
                <button v-on:click="nextPage">Reverse Message</button>

                <p>
                    Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
                    hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
                    Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
                    Pellentesque tempus nulla non urna eleifend ut ultrices nisi faucibus.
                    Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
                    hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
                    Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
                </p>
                <p>
                    Praesent a dolor leo. Duis in felis in tortor lobortis volutpat et pretium tellus. Vestibulum ac ante nisl,
                    a elementum odio. Duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
                    placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                    eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                    elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
                </p>
                <section>
                    <header>
                        <h3>Something else</h3>
                    </header>
                    <p>
                        Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
                        placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                        eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                        elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                        sit amet nullam consequat feugiat dolore tempus.
                        Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
                        placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                        eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                        elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
                    </p>
                    <p>
                        Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                        eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                        elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                        sit amet nullam consequat feugiat dolore tempus.
                    </p>
                </section>
                <section>
                    <header>
                        <h3>So in conclusion ...</h3>
                    </header>
                    <p>
                        Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                        eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                        elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                        sit amet nullam consequat feugiat dolore tempus. Elementum odio duis semper risus et lectus commodo fringilla.
                        Maecenas sagittis convallis justo vel mattis.
                    </p>
                </section>
            </article>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            mensaje: "Elemento ramdon 1111",
            cosa: this.$route.params.post_id
        };
    },
    methods: {
        nextPage() {
            this.cosa = this.$route.params.post_id
        },
        created() {
            this.cosa = this.$route.params.post_id
        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
