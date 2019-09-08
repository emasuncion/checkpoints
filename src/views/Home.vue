<template>
    <v-row
      align="center"
      justify="center"
    >
      <book-card
        v-for="(book, index) in books"
        :key="index"
        :name="book.name"
        :id="book.id"
      />
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

import BookCard from '@/components/BookCard.vue'

export default {
  name: 'home',
  components: {
    BookCard
  },
  computed: {
    ...mapGetters({
      books: 'BOOKS'
    })
  }
}
</script>
