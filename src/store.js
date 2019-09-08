import Vue from 'vue'
import Vuex from 'vuex'
import bookData from '../books.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: null,
    contents: null
  },
  getters: {
    BOOKS: state => {
      return state.books
    }
  },
  mutations: {
    SET_BOOKS: (state, payload) => {
      state.books = payload
    }
  },
  actions: {
    GET_BOOKS: (context) => {
      context.commit('SET_BOOKS', bookData)
    }
  }
})
