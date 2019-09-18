<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-flex md12>
        <v-img
          :src="require('../src/assets/cambridge-logo.png')"
          contain
          max-height="50"
          max-width="50"
        ></v-img>
      </v-flex>
      <router-link to="/" class="title"><v-toolbar-title>Cambridge Digital Checkpoints</v-toolbar-title></router-link>
    </v-app-bar>

    <v-content class="main">
      <v-container
        class="d-block align-content-center fill-height"
        fluid
      >
      <loading
        v-if="!books"
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
        :loader="loader"
        :width="width">
      </loading>
      <router-view></router-view>
      <v-snackbar
        v-model="snackbar"
      >
        Please tap the share icon and select "Add to Home Screen"
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'App',
  components: {
    Loading
  },
  props: ['isMobile'],
  created () {
    this.getBooks()
    this.getQuestions()
  },
  data () {
    return {
      snackbar: isMobile && !navigator.standalone
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'LOADING',
      books: 'BOOKS',
      width: 'WIDTH',
      fullPage: 'FULL_PAGE',
      loader: 'LOADER'
    })
  },
  methods: {
    ...mapActions({
      getBooks: 'GET_BOOKS',
      getQuestions: 'GET_QUESTIONS'
    })
  }
}
</script>

<style>
.title {
  color: #fff !important;
}
a {
  text-decoration: none;
}
.main {
  padding: 50px 0 !important;
}
</style>
