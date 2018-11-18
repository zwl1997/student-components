import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CourseList from './CourseList.vue'
import CourseListItem from './CourseListItem.vue'
import StudentList from './StudentList.vue'
import StudentListItem from './StudentListItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/course'
  },
  {
    path:'/course',
    component:CourseList
  },
  {
    path:'/student',
    component:StudentList
  },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
