<template>
    <v-row
      align="center"
      justify="center"
    >
      <book-card
        v-for="(book, index) in books"
        :key="index"
        :name="book.Name"
        :id="book.ID"
      />
    </v-row>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import BookCard from '@/components/BookCard.vue'

export default {
  name: 'home',
  components: {
    BookCard
  },
  created () {
    this.setBookItems(null)
  },
  methods: {
    ...mapMutations({
      setBookItems: 'SET_BOOK_ITEMS'
    })
  },
  computed: {
    ...mapGetters({
      books: 'BOOKS'
    })
  }
}
</script>
