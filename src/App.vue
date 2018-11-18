<template>
  <div id="app">
    <home></home>
    <router-view></router-view>
    <!-- <router-view :to="'/course'"  :courses="theCourses" :title="'show all courses'"/> -->
    <!-- <router-view :to="'/student'" :students="theStudents" :title="'show all students'"/> -->
  </div>
</template>
<script>
import Home from "./Home.vue"
export default {
  name: 'app',
  components:{
    'home':Home
  }
}
</script>

<style>
</style>
