<template>
  <v-expansion-panels class="pa-6">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      :loader="loader"
      :width="width">
    </loading>
    <v-expansion-panel
      v-for="(bookItem,index) in bookItems"
      :key="index"
    >
      <v-expansion-panel-header>
        {{ bookItem.Name }}
      </v-expansion-panel-header>
      <v-expansion-panel-content
        v-if="bookItem.Children"
      >
        <v-expansion-panels
          v-for="(child, index) in bookItem.Children"
          :key="index"
        >
            <router-link :to="`${currentUrl}/${child.ID}`">
              <p>{{ child.Name }}</p>
            </router-link>
        </v-expansion-panels>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'

export default {
  components: {
    Loading
  },
  data () {
    return {
      currentUrl: window.location.pathname
    }
  },
  created () {
    this.getBookItems(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      bookItems: 'BOOK_ITEMS',
      width: 'WIDTH',
      fullPage: 'FULL_PAGE',
      isLoading: 'LOADING',
      loader: 'LOADER'
    })
  },
  methods: {
    ...mapActions({
      getBookItems: 'GET_BOOK_ITEMS'
    })
  }
}
</script>

<style scoped>
  a {
    color: #000000 !important;
  }
</style>
