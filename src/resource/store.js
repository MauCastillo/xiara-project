import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    title: '',
    meta_tag: '',
    meta_description: ''
  },
  mutations: {
    setTitle(state, title) {
      state.title = title
    },
    setTag(state, meta_tag) {
      state.meta_tag = meta_tag
    },
    setDescription(state, meta_description) {
      state.meta_description = meta_description
    }
  },
  getters: {
    title: state => state.title,
    meta_tag: state => state.meta_tag,
    meta_description: state => state.meta_description
  }
})
