<template>
    <div class="hash">

        <nav-bar/>


        <h1 class="ui header">{{msg}}</h1>
        <div class="">
            <a><router-link :to="{ path: '/aplectures' }">List</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/aplectures/detail' }">Detail</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/aplectures/application' }">Insert</router-link></a>
        </div>

        <hr>

        <router-view/>



    </div>
</template>

<script>
import { Navbar } from '@/components/components'

export default {
  name: 'AplectureContainer',
  components: {'nav-bar' : Navbar},

  created(){
    
  },

  data () {
    return {
      msg: 'AplectureContainer'
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
