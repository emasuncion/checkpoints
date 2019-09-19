<template>
  <div class="book-grid">
    <book-card
      v-for="(book, index) in books"
      :key="index"
      :name="book.Name"
      :id="book.ID"
    />
  </div>
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

<style>
  .book-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 2rem;
  }

  @media (max-width: 500px) {
    .book-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    .book-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 601px) and (max-width: 800px) {
    .book-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 801px) and (max-width: 1024px) {
    .book-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (min-width: 1025px) and (max-width: 1400px) {
    .book-grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }
</style>
