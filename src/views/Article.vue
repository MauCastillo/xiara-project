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
                    <p>{{ metaDescription }}</p>
                    <p>Fecha de publicación: {{ published_date }}</p>
                    <p>Tiempo de lectura: {{ read_time }} minutos</p>
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
                        {{summary}}
                    </p>
                </section>
            </article>
        </div>
    </section>
</div>
</template>

<script>
import {
    BaseUrl,
    BaseTitle
} from '@/resource/static'
import {
    store
} from '@/resource/store'

export default {

    data() {
        return {
            id: '',
            title: '',
            author_id: '',
            read_time: '',
            body: '',
            summary: '',
            banner: '',
            metaTag: '',
            metaDescription: '',
            date: '',
            something: ''

        };
    },
    mounted() {
        let renderObj = this

        this.axios.post(BaseUrl, {
            function: 'get_post',
            parametros: {
                'id': this.$route.params.post_id
            }

        }).then(function (response) {
            const content = response.data[0]

            renderObj.id = content.id
            renderObj.title = content.title
            renderObj.author_id = content.author_id
            renderObj.body = content.body
            renderObj.read_time = content.read_time
            renderObj.summary = content.summary
            renderObj.banner = content.banner
            renderObj.metaTag = content.meta_tag
            renderObj.metaDescription = content.meta_description
            renderObj.published_date = content.date
            renderObj.something = content.something

        }).catch(function (error) {
            // eslint-disable-next-line no-console
            console.log(error)
        })
        this.$meta().refresh()
    },
    computed: {
        newMessages() {
            return this.count;
        }
    },

    methods: {},
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
