import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const testhubApi = 'http://local.testhub-poc.cambridge.edu.au/api/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    books: null,
    contents: null,
    bookItems: null,
    width: 255,
    fullPage: true,
    loader: 'dots'
  },
  getters: {
    LOADING: state => {
      return state.isLoading
    },
    WIDTH: state => {
      return state.width
    },
    FULL_PAGE: state => {
      return state.fullPage
    },
    LOADER: state => {
      return state.loader
    },
    BOOKS: state => {
      return state.books
    },
    BOOK_ITEMS: state => {
      return state.bookItems
    }
  },
  mutations: {
    SET_LOADING: (state, payload) => {
      state.isLoading = payload
    },
    SET_WIDTH: (state, payload) => {
      state.width = payload
    },
    SET_FULL_PAGE: (state, payload) => {
      state.fullScreen = payload
    },
    SET_LOADER: (state, payload) => {
      state.loader = payload
    },
    SET_BOOKS: (state, payload) => {
      state.books = payload
    },
    SET_BOOK_ITEMS: (state, payload) => {
      state.bookItems = payload
    }
  },
  actions: {
    GET_BOOKS: async ({ state, commit }) => {
      if (!state.books) {
        commit('SET_LOADING', true)
        await axios.get(`${testhubApi}getAllCheckpointsTitles`)
          .then(res => commit('SET_BOOKS', res.data))
          .then(() => commit('SET_LOADING', false))
      }
    },
    GET_BOOK_ITEMS: async ({ commit }, itemId) => {
      commit('SET_LOADING', true)
      await axios.get(`${testhubApi}getItems/${itemId}`)
        .then(res => commit('SET_BOOK_ITEMS', res.data))
        .then(() => commit('SET_LOADING', false))
    }
  }
})
