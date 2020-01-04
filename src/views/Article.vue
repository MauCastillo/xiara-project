<template>
<div id="page-wrapper">
    <!-- Main -->
    <section id="main">
        <div class="container">
            <!-- Content -->
            <article class="box post">
                <a href="#" class="image featured">
                    <img :src="banner" alt />
                </a>
                <header>
                    <h2>{{ title }}</h2>
                    <p>{{ meta_description }}</p>
                </header>
                <div v-html="body"></div>

                <section>
                    <header>
                        <h3>Algo más</h3>
                    </header>
                    <div v-html="something">
                    </div>

                </section>
                <section>
                    <header>
                        <h3>Conclusión</h3>
                    </header>
                    <p>
                        {{conclusion}}
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
            title: "Como Instalar Unity en Windows 10",
            body: "Este es el cuerpo,",
            conclusion: "Este nivel de joan planas ",
            meta_description: "Instalcion de unity en windows 10 utilizando UnityHub ",
            something: "<p> Este es un ejempo de algo mas </p>",
            banner: "https://res.cloudinary.com/dd7j5cf6d/image/upload/v1569186062/flower-min.jpg"
        };
    },
    methods: {
        nextPage() {
            this.cosa = this.$route.params.post_id
            this.something = "<p> Este es un ejempo de algo mas </p>"
        },
        created() {
            this.data()
            this.cosa = this.$route.params.post_id

        },
    },
    metaInfo: {
        htmlAttrs: {
            lang: 'es',
            amp: true
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: "description",
                content: "Learn coding with our free tutorials"
            }, {
                name: "keywords",
                content: "react,vue,angular"
            }
        ],
        title: 'XiaoriLab',
        titleTemplate: '%s - El mejor articulo'
    }
};
</script>
