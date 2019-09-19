import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Subject from './views/Subject.vue'
import TableContents from './components/TableContents.vue'
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
          path: '',
          component: Home
        }
      ]
    },
    {
      path: '/subjects/:id',
      component: Subject,
      children: [
        {
          path: '',
          component: TableContents
        },
        {
          path: ':tocid',
          component: Mcq
        }
      ]
    }
  ]
})
