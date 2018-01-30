<template>
  <div class="hash">



        <div class="ui  inverted menu">
            <div class="ui container">
                <a href="#" class="header item"><router-link :to="{ path: '/', params: {} }">Home</router-link></a>
            </div>
        </div>



        <h1>Review</h1>


  </div>
</template>

<script>
export default {
  name: 'Review',
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
