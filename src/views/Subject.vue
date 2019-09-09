<template>
  <v-expansion-panels class="pa-6">
    <v-expansion-panel
      v-for="(mainTopic,index) in 5"
      :key="index"
    >
      <v-expansion-panel-header>
        Main topic {{ mainTopic }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(subTopic,index) in 3"
            :key="index"
          >
            <v-expansion-panel-header>
              Sub-topic {{ subTopic }}
            </v-expansion-panel-header>
              <router-link :to="currentUrl + '/mcq'" append>
                <v-expansion-panel-content>
                  Multiple-choice questions
                </v-expansion-panel-content>
              </router-link>
              <router-link :to="currentUrl + '/tf'" append>
                <v-expansion-panel-content>
                  True or false questions
                </v-expansion-panel-content>
              </router-link>
              <router-link :to="currentUrl + '/fib'" append>
                <v-expansion-panel-content>
                  Fill in the blanks questions
                </v-expansion-panel-content>
              </router-link>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'Subject',
  data: () => {
    return {
      currentUrl: window.location.pathname
    }
  }
}
</script>

<style scoped>
  a {
    color: #000000 !important;
  }
</style>
