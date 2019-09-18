<template>
  <div>
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
                  @click.stop="checkAnswer(answer, question.correct_answer)"
                  v-ripple="{ center: true }"
                >
                  <p>{{ answer }}</p>
                </li>
              </ol>
            </div>

            <v-dialog
              v-model="dialog"
              max-width="290"
            >
              <v-card :color="modalColor">
                <v-card-title class="headline">
                  <v-icon class="pr-2" :color="modalColor" x-large>{{ icon }}</v-icon>
                  {{ result }}
                </v-card-title>

                <v-card-actions
                  v-if="!isMobile"
                >
                  <div class="flex-grow-1"></div>
                  <v-btn
                    text
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="container">
      <v-row>
        <youtube />
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { isMobile } from 'mobile-device-detect'
import Youtube from '@/components/Youtube'

export default {
  props: ['isMobile'],
  data () {
    return {
      color: 'yellow darken-2',
      showArrow: !isMobile,
      dialog: false,
      modalColor: null,
      icon: null,
      result: null
    }
  },
  components: {
    Youtube
  },
  computed: {
    ...mapGetters({
      questions: 'MCQUESTIONS'
    })
  },
  methods: {
    checkAnswer (answer, correctAnswer) {
      if (answer !== correctAnswer) {
        this.modalColor = 'red-lighten-1'
        this.icon = 'mdi-close-outline'
        this.result = 'Incorrect!'
      } else {
        this.modalColor = 'light-green-lighten-1'
        this.icon = 'mdi-check-outline'
        this.result = 'Correct!'
      }
      this.dialog = true
    }
  }
}
</script>

<style>
  ol > li {
    list-style-type: upper-alpha;
    cursor: pointer;
  }

</style>
