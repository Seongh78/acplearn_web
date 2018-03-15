<template lang="html">
<div class="ui grid loginWrap viewLoadAnimationTop">

    <div class="four wide column centered" style="margin-top:55px;">
        <router-link tag="h1" to="/" class="centered" style="text-align:center; font-size:2.75em; margin-bottom:30px;">
            <img src="../../assets/acplearn_logo_dark.png" width="55%" alt="">
        </router-link>
    <div class="cardbox" style="margin-top:55px; margin:0; border:1px solid #eaeaea;">

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
          <button class="ui button basic" style="width:100%; " type="button" @click="login">로그인</button>
        </form>
        <p style="margin:17px 0 7px 0;">아직 회원이 아니라면 <router-link :to="{path:'/join'}"  style="text-decoration:underline; font-weigt:bold; "> 간편 회원가입 </router-link></p>
    </div>
    <br>
    <div class="cardbox" style=" margin-top:55px; margin:0; border:1px solid #eaeaea;">
            <form class="ui form">
                <button onclick="location.href='http://localhost:3000/api/users/auth/facebook'" class="ui button blue" style="width:100%; backend:#365899; margin-top:10px;" type="button" >페이스북</button>
                <button class="ui button green" onclick="location.href='http://localhost:3000/api/users/auth/naver'" style="width:100%; margin-top:10px;" type="button">네이버</button>
                <button class="ui button yellow" style="width:100%; backend:#00C73C; background:#FFDC00; margin-top:10px;" type="button"  onclick="location.href='http://localhost:3000/api/users/auth/kakao'">카카오</button>
            </form>
    </div>

    <!-- <h4>[테스트버튼]</h4>
    <div class="cardbox" style=" margin-top:55px; margin:0;">
            <form class="ui form">
                <button class="ui button basic" style="width:100%; margin-top:10px;" type="button"  @click="api_session">/api/users/session</button>
                <button class="ui button basic" style="width:100%; margin-top:10px;" type="button"  @click="api_gg">/api/users/gg</button>
            </form>
    </div> -->

    </div>

</div>
</template>



<!--  -->
<script>
import axios from 'axios'
export default {
    name: 'Login',

    data(){
        return{
            usr:{ id:'', pw:'' }
        }
    },//data


    created(){
    },



    methods:{

        get(){
            this.$http.get('/api/users/gg').then(resp=>{
                console.log(resp);
            })
        },

        login(){
            this.$http.defaults.headers.post['Content-Type'] = 'application/json';
            this.$http.post('/api/users/login', this.usr)
            .then(resp=>{
                // console.log(resp.data);
                this.$ro.push({path:'/'})
            })
            .catch(err=>{
                console.log(err);
                alert('계정정보를 확인해 주세요')
            })
        },

        usrCheck(){
            this.$http.get('/api/users/session').then(resp=>{
                // console.log(resp)
                console.log(document.cookie)
            })
        },

        api_session(){
            // this.$http.get('http://localhost:3000/api/users/session').then(resp=>{
            this.$http.get('/api/users/session').then(resp=>{
                // console.log(resp)
                console.log(resp.data)
            })
        },
        api_gg(){
            this.$http.get('/api/users/gg').then(resp=>{
                // console.log(resp)
                console.log(resp.data)
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
