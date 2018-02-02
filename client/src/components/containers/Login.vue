<template lang="html">
<div class="ui grid loginWrap">

    <div class="four wide column centered" style="margin-top:55px;">
        <router-link tag="h1" to="/" class="centered" style="text-align:center; font-size:2.75em; margin-bottom:30px;">
            <img src="../../assets/acplearn_logo_dark.png" width="55%" alt="">
        </router-link>
    <div class="cardbox" style="margin-top:55px; margin:0;">

        <form class="ui form">
          <div class="field">
            <input v-model="usr.id" type="text" name="first-name" placeholder="아이디를 입력해 주세요">
          </div>
          <div class="field">
            <input v-model="usr.pw" type="password" name="last-name" placeholder="패스워드를 입력해 주세요">
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden">
              <label>아이디 기억하기</label>
            </div>
          </div>
          <button class="ui button basic" style="width:100%;" type="button" @click="login">로그인</button>
        </form>
        <p style="margin-top:10px;">아직 회원이 아니라면 <a href="/join_agree" style="text-decoration:underline; font-weigt:bold;"> 간편 회원가입 </a></p>
    </div>
    <br>
    <div class="cardbox" style=" margin-top:55px; margin:0;">
            <form class="ui form">
                <button class="ui button blue" style="width:100%; margin-top:10px;" type="button" @click.prevent="get">페이스북</button>
                <router-link :to="{path:'/api/users/auth/naver'}">
                    <button class="ui button green" style="width:100%; margin-top:10px;" type="button">네이버</button>
                </router-link>
                <button class="ui button yellow" style="width:100%; margin-top:10px;" type="button"  @click="usrCheck">카카오</button>
            </form>
    </div>

    </div>

</div>
</template>



<!--  -->
<script>
export default {
    name: 'Login',

    data(){
        return{
            usr:{ id:'', pw:'' }
        }
    },//data

    methods:{

        get(){
            this.$http.get('/api/users/gg').then(resp=>{
                console.log(resp);
            })
        },

        login(){
            this.$http.post('/api/users/login', this.usr).then(resp=>{
                console.log(resp);

            })
        },

        usrCheck(){
            this.$http.get('/api/users/session').then(resp=>{
                // console.log(resp)
                console.log(document.cookie)
            })
        }

    }//methods

}
</script>




<!--  -->
<style lang="css">
    .loginWrap{
        text-align: left;
    }
</style>
