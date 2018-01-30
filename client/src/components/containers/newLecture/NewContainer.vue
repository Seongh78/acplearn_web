<template>
    <div class="hash">

        <nav-bar/>


        <h1 class="ui header">{{msg}}</h1>
        <div class="">
            <a><router-link :to="{ path: '/lectures/new/summary' }">강의개요</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/lectures/new/aplterm' }">강의기간</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/lectures/new/timetable' }">시간표</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/lectures/new/kpi' }">KPI설정</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/lectures/new/student' }">수강생</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/lectures/new/team' }">팀빌딩</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/lectures/new/survey' }">설문</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/lectures/new/complete' }">완료</router-link></a>
        </div>

        <hr>

        <router-view/>



    </div>
</template>

<script>
import { Navbar } from '@/components/components'

export default {
  name: 'NewContainer',
  components: {'nav-bar':Navbar},
  data () {
    return {
      msg: 'NewContainer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
