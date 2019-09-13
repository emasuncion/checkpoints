<template>
  <v-carousel class="pa-4"
    :show-arrows="showArrow"
    hide-delimiters
  >
    <v-carousel-item
      v-for="(question, i) in questions"
      :key="i"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <div class="pa-6 question-body">
          <h3 class="mb-4">{{ question.question }}</h3>
          <ol>
            <li
              v-for="(answer, index) in question.answers"
              :key="index"
            >
              <p>{{ answer }}</p>
            </li>
          </ol>
        </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapGetters } from 'vuex'
import { isMobile } from 'mobile-device-detect'

export default {
  data () {
    return {
      color: 'yellow darken-2',
      showArrow: !isMobile
    }
  },
  computed: {
    ...mapGetters({
      questions: 'MCQUESTIONS'
    })
  }
}
</script>

<style>
  .youtube-video {
    width: 100%;
  }

  ol > li {
    list-style-type: upper-alpha;
    cursor: pointer;
  }
</style>
