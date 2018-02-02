<template>
    <div class="ui ">

        <div class="ui  inverted menu">
            <div class="ui container">
                <a href="#" class="header item">메인</a>

                <a href="#" class="header item"><router-link :to="{ path: '/manager/profile', params: {} }">관리자상세</router-link></a>
                <a href="#" class="header item"><router-link :to="{ path: '/manager', params: {} }">관리자</router-link></a>
                <a href="#" class="header item"><router-link :to="{ path: '/new/profile', params: {} }">NEW</router-link></a>
            </div>
        </div>

        <h1>MainContainer</h1>


        <foot-bar/>
    </div>
</template>

<script>
import  {Footer}  from '@/components/components'

export default {
    name: 'MainContainer',
    components: { "foot-bar":Footer },
    data () {
        return {
          msg: 'MainContainer'
        }
    },//data()

    created(){
        this.$http.get('/api/users').then(resp=>{
            console.log(resp);
        });
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
