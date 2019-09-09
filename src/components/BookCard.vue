<template>
  <div class="book">
    <router-link :to="'/subjects/'+id">
      <v-col>
        <v-card
          max-width="170"
          class="mx-auto"
          elevation="10"
          height="15em"
        >
          <v-card-title class="book-title">{{ name }}</v-card-title>
        </v-card>
      </v-col>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['id', 'name']
}
</script>

<style>
  .book-title {
    font-size: inherit !important;
  }
</style>
