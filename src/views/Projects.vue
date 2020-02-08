<template>
<div id="page-wrapper">

    <!-- Main -->
    <section id="main">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <!-- Portfolio -->
                    <section>
                        <header class="major">
                            <h2>Articulos</h2>

                        </header>

                        <div class="row">

                            <div v-for="item in items" v-bind:key="item.id" class="col-4 col-6-medium col-12-small">
                                <section class="box">
                                    <a href="#" class="image featured"><img :src='item.banner' alt="" /></a>
                                    <header>
                                        <h3>{{item.title}}</h3>
                                    </header>
                                    <p>{{item.summary}}</p>

                                    <footer>
                                    <small>{{item.date}} . Tiempo lectura {{item.read_time}} minutos</small>
                                        <ul class="actions">
                                            <li><button v-on:click="loadArticle(item.id)" class="button alt">Leer más</button></li>
                                        </ul>
                                    </footer>
                                </section>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import {
    BaseTitle,
    BaseUrl
} from '@/resource/static'
import {
    store
} from '@/resource/store'

export default {

    data() {
        return {

            parentMessage: 'Parent',
            items: []
            /*[{
                    id: "34",
                    title: ' 6 El Articulo mas interazante del mundo',
                    summary: 'Es un grar articulo deberia leerlo',
                    banner: 'https://res.cloudinary.com/dd7j5cf6d/image/upload/v1578749686/Joaquin-Phoenix-Joker-and-Batman.webp'
                },
                {
                    id: "35",
                    title: ' 4 El Articulo ',
                    summary: 'Es un grar articulo deberia leerlo',
                    banner: 'https://res.cloudinary.com/dd7j5cf6d/image/upload/v1569185550/flower.jpg'
                },
                {
                    id: "54",
                    title: ' 3 El Articulo mas ',
                    summary: 'Es un grar articulo deberia leerlo',
                    banner: 'https://res.cloudinary.com/dd7j5cf6d/image/upload/v1578749686/Joaquin-Phoenix-Joker-and-Batman.webp'
                },
                {
                    id: "314",
                    title: ' 2 El Articulo mundo',
                    summary: 'Es un grar articulo deberia leerlo',
                    banner: 'https://res.cloudinary.com/dd7j5cf6d/image/upload/v1569185550/flower.jpg'
                }
            ]*/

        };
    },
    mounted() {
        let renderObj = this

        this.axios.post(BaseUrl, {
            function: 'list_post',
            parametros: {
                'id': this.$route.params.post_id
            }

        }).then(function (response) {
            // eslint-disable-next-line no-console
            console.log(' >>> response <<< ', response.data)
            renderObj.items = response.data
        }).catch(function (error) {
            // eslint-disable-next-line no-console
            console.log(error)
        })
        this.$meta().refresh()
    },
    computed: {},

    methods: {
        loadArticle: function (id) {
            // eslint-disable-next-line no-console
            console.log(" >>> id <<<", id);
        }
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
                content: store.getters.meta_description
            }, {
                name: "keywords",
                content: store.getters.meta_tag
            }
        ],
        title: BaseTitle,
        titleTemplate: `%s - ${store.getters.title}`
    }
};
</script>
