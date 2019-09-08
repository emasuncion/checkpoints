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
        class="d-block align-contet-center fill-height"
        fluid
      >
      <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; Eleirold Asuncion</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  created () {
    this.getBooks()
  },
  methods: {
    ...mapActions({
      getBooks: 'GET_BOOKS'
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
  padding: 0;
}
</style>
