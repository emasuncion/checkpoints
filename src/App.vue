<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-flex class="header" md12>
        <router-link to="/">
          <v-img
            id="cup-shield"
            :src="require('../src/assets/cambridge-logo.png')"
            contain
            max-height="50"
            max-width="50"
          ></v-img>
        </router-link>
        <router-link to="/" class="title">
          <v-toolbar-title id="app-title">Cambridge Digital Checkpoints</v-toolbar-title>
        </router-link>
      </v-flex>
    </v-app-bar>

    <v-content class="main">
      <v-container
        class="align-content-center"
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
      <span class="white--text">&copy; Global Education 2019</span>
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
    padding: 25px 0 !important;
  }
  .header {
    flex:1;
    display: flex;
  }
  #app-title {
    padding: 10px;
  }

  @media (max-width: 350px) {
    #app-title {
      display: none;
    }
    .header {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 351px) and (max-width: 360px) {
    #app-title {
      font-size: 19px;
      text-align: left;
      padding: 10px 5px;
    }
  }
</style>
