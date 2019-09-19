<template>
  <div class="book">
    <router-link :to="'/subjects/' + id">
      <v-col class="padding-0">
        <v-card
          width="100%"
          class="mx-auto"
          elevation="10"
          min-height="15em"
        >
          <v-card-title class="book-title card-title">{{ name }}</v-card-title>
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
  .padding-0 {
    padding: 0 !important;
  }

  @media (max-width: 500px) {
    .book-title {
      font-size: 13.5px !important;
    }
  }

  @media (min-width: 501px) and (max-width: 800px) {
    .book-title {
      font-size: 13.5px !important;
    }
  }

  @media (min-width: 801px) and (max-width: 1024px) {
    .book-title {
      font-size: 13.5px !important;
    }
  }
</style>
