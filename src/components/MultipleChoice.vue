<template>
  <div class="container">
    <v-carousel
      :show-arrows="showArrow"
      hide-delimiters
      height="auto"
    >
      <v-carousel-item
        v-for="(question, i) in questions"
        :key="i"
      >

          <v-row
          class="mt-4"
          >
            <div class="pa-6 question-body">
              <h3 class="mb-4">{{ question.question }}</h3>
              <ol>
                <li
                  v-for="(answer, index) in question.answers"
                  :key="index"
                  @click="checkAnswer(answer, question.correct_answer)"
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
              <v-card>
                <v-card-title class="headline">
                  <div id="icon">
                    <v-icon class="pr-2 icon-size" :color="modalColor">{{ icon }}</v-icon>
                  </div>
                  <div id="result">{{ result }}</div>
                </v-card-title>

                <v-card-actions
                  v-if=showArrow
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
      </v-carousel-item>
    </v-carousel>
    <div>
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
      console.log(isMobile)
      if (answer !== correctAnswer) {
        this.modalColor = 'red'
        this.icon = 'mdi-close-outline'
        this.result = 'Incorrect!'
      } else {
        this.modalColor = 'green'
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

  .question-body {
    margin: auto;
  }
  #icon {
    width: 100%;
    text-align: center;
  }
  #result {
    text-align: center;
    width: 100%;
    font-size: 2.5rem;
  }
  .icon-size {
    font-size: 5rem !important;
    border: 5px solid;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 100%;
  }
</style>
