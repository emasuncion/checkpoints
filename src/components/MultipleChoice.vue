<template>
  <v-container>
    <div class="mcq pa-2 d-sm-flex justify-center align-self-center">
      <youtube class="youtube-video" video-id="UvhqlJX9b24" ref="youtube" />
    </div>

    <v-card
      class="mx-auto mt-5"
      max-width="344"
    >
      <v-card-text>
        <p class="display-1 text--primary">
          {{ mcquestions.questions[0].question }}
        </p>
        <div class="text--primary">
          <ol>
            <li>
              {{ mcquestions.questions[0].incorrect_answers[0] }}
            </li>
            <li>
              {{ mcquestions.questions[0].incorrect_answers[2] }}
            </li>
            <li>
              {{ mcquestions.questions[0].correct_answer }}
            </li>
            <li>
              {{ mcquestions.questions[0].incorrect_answers[1] }}
            </li>
          </ol>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MultipleChoice',
  computed: {
    ...mapGetters({
      mcquestions: 'MCQUESTIONS'
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
