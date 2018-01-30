<template>
  <div class="hash">

        <nav-bar/>




        <h1>Intro</h1>


  </div>
</template>

<script>
import { Navbar } from '@/components/components'

export default {
  name: 'IntroMain',
  components: {'nav-bar':Navbar},
  data () {
    return {
      msg: 'New PAGE'
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
