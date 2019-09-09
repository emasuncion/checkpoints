import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Subject from './views/Subject.vue'
import Mcq from './components/MultipleChoice.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/',
          component: Home
        }
      ]
    },
    {
      path: '/subjects/:id',
      name: 'Subject',
      component: Subject
    },
    {
      path: '/subjects/:id/mcq',
      name: 'MCQ',
      component: Mcq
    }
  ]
})
