<template lang="html">
<div class="ui grid loginWrap viewLoadAnimationTop" style="background:#fcfcfc;">



    <div class="seven wide column centered" style="margin-top:55px;">
        <router-link tag="h1" to="/" class="centered" style="text-align:center; font-size:2.75em; margin-bottom:30px;">
            <img src="../../assets/acplearn_logo_dark.png" width="30%" alt="">
        </router-link>

        <div class="cardbox" style="margin-top:55px; margin:0; padding:25px 15px;">

            <form class="ui form ">
                <div class="field">
                    <label for="">아이디</label>
                    <input type="text" v-model="tutor.id" placeholder="아이디는 6자리 이상 입력해 주세요" style="width:79%; border-radius:.28571429rem 0 0 .28571429rem;">
                    <button type="button" class="ui basic button idConfirm" @click.prevent="idConfirm" style="position:absolute; border-radius:0 .28571429rem .28571429rem 0; height:37.33px; width:21%; margin-left:-1px;">중복확인</button>
                </div>
                <div class="field">
                    <label for="">패스워드</label>
                    <input type="password" v-model="tutor.pw" @keyup="pwConfirm" name="last-name" placeholder="패스워드를 입력해 주세요" style="margin-bottom:-1px; border-radius:.28571429rem .28571429rem 0 0;">
                    <input type="password" v-model="tutor.pw2" @keyup="pwConfirm2" name="last-name" placeholder="패스워드를 한번 더 입력해 주세요" style="border-radius:0 0 .28571429rem .28571429rem;">
                    <p>{{ pwMsg }}</p>
                </div>
                <div class="field">
                    <label for="">이름</label>
                    <input type="text" v-model="tutor.name" name="last-name" placeholder="이름을 입력해 주세요">
                </div>
                <div class="field">
                    <label for="">연락처</label>
                    <input type="text" v-model="tutor.phone" name="last-name" placeholder="010-0000-0000">
                </div>
                <div class="field">
                    <label for="">이메일</label>
                    <input type="email" v-model="tutor.email" name="last-name" placeholder="ex) example@example.com">
                </div>
                <div class="field">
                    <label for="">성별 {{tutor.gender}}</label>
                    <input type="radio" name="gender" v-model="tutor.gender" value="M">&nbsp;남자&nbsp;&nbsp;
                    <input type="radio" name="gender" v-model="tutor.gender" value="F">&nbsp;여자
                </div>
                <div class="field">
                    <label>생년월일</label>
                    <div class="four fields">
                        <div class="field">
                            <select class="ui fluid dropdown" v-model="tutor.birthday[0]">
                                <option value="">년도</option>
                                <option value="2018">2018년</option>
                                <option value="2017">2017년</option>
                                <option value="2016">2016년</option>
                            </select>
                        </div>
                       <div class="field">
                            <select class="ui fluid dropdown" v-model="tutor.birthday[1]">
                               <option value="">월</option>
                               <option value="1">01월</option>
                               <option value="2">02월</option>
                               <option value="3">03월</option>
                            </select>
                       </div>
                       <div class="field">
                           <select class="ui fluid dropdown" v-model="tutor.birthday[2]">
                               <option value="">일</option>
                               <option value="1">01일</option>
                               <option value="2">02일</option>
                               <option value="3">03일</option>
                            </select>
                       </div>
                    </div>
                </div>
                <div class="field">
                    <label>소속/직급</label>
                    <div class="two fields">
                        <div class="field">
                            <input type="text" placeholder="부서" v-model="tutor.company">
                        </div>
                        <div class="field">
                            <input type="text" placeholder="직급" v-model="tutor.position">
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label for="">강의분야</label>
                    <input type="text" v-model="tutor.category" placeholder="리더십/ 산업안전/ 조직활성화 등">
                </div>
                <div class="field">
                    <label for="">주요경력/자격</label>
                    <textarea v-model="tutor.career" rows="4" cols="80"></textarea>
                </div>
                <div class="field">
                    <label for="">강사소개서/프로필</label>
                    <input type="file" >
                </div>
                <div class="field">
                    <label for="">프로필 이미지</label>
                    <input type="file" >
                </div>

            </form>


        </div>

        <br>

        <div class="cardbox" style=" margin-top:55px; margin:0;">
            <form class="ui form">
                <button class="ui button blue" style="width:100%; backend:#365899;" type="button" @click.prevent="save">가입</button>
            </form>
        </div>


    </div>

</div>
</template>



<!--  -->
<script>
import axios from 'axios'
export default {
    name: 'Join',

    data(){
        return{
            confirm:{
                id:false,
                pw:false,
                pw2:false
            },
            tutor : {
                id: '',
                pw: '',
                pw2: '',
                name: 'David',
                phone: '01033234442',
                email: 'tutor@tutor.com',
                gender: 'M',
                birthday: ['2018', '1', '1'],
                company: '(주)Comcom',
                position: '팀장',
                category: '리더십/산업안전',
                career: 'Career test ',
                profile: '',
                profileImg: ''
            },// tutor
            pwMsg:'',

            re: {
                id: /^[a-z0-9_-]{3,16}$/,
                pw: /^[a-z0-9_-]{6,18}$/
            }
        }
    },//data


    created(){
    },



    methods:{

        idConfirm() {
            var id = this.tutor.id
            console.log(id);
            if (id.length < 5) {
                if (id.length <1 || id == '' || id == undefined) {
                    alert('아이디를 입력해 주세요')
                    return
                }
                alert('아이디가 너무 짧습니다.')
                return;
            }
            this.$http.get('/api/users/confirm/'+id)
            .then(resp=>{
                if (resp.data.result == 204) {
                    alert('사용가능한 아이디입니다.')
                    this.confirm.id = true
                    return
                }
            })
            .catch(err=>{
                console.log(err);
                alert('오류가 발생했습니다. 다시 시도해 주세요_[idConfirm]')
            })
        }, // idConfirm


        pwConfirm() {
            var pw = this.tutor.pw
            if (pw.length<6) {
                this.pwMsg = '6자리 이상 입력해 주세요'
                return
            }
            this.pwMsg = ''
            this.confirm.pw = true
        }, // pwConfirm
        pwConfirm2() {
            var pw2 = this.tutor.pw2
            if (this.tutor.pw !== pw2) {
                this.pwMsg = '패스워드가 일치하지 않습니다'
                return
            }
            this.pwMsg = ''
            this.confirm.pw2 = true
        }, // pwConfirm


        nameConfirm(){

        }, //nameConfirm



        save() {
            var tt = this.tutor
            var cc = this.confirm
            if ( !cc.id ) {
                alert('아이디를 확인해 주세요')
                return
            }// if
            if (!cc.pw || !cc.pw2) {
                alert('패스워드를 확인해 주세요')
                return
            }// if
            if (tt.name==undefined || tt.name=='') {
                alert('이름을 입력해 주세요')
                return
            }// if
            if (tt.phone==undefined || tt.phone=='') {
                alert('휴대폰번호를 입력해 주세요')
                return
            }
            if (tt.email==undefined || tt.phone=='') {
                alert('휴대폰번호를 입력해 주세요')
                return
            }
            if (tt.gender==undefined || tt.gender=='') {
                alert('성별을 선택해 주세요')
                return
            }// if
            if (tt.birthday[0]=='' || tt.birthday[1]=='' || tt.birthday[2]=='') {
                alert('생년월일을 선택해 주세요')
                return
            }// if
            if (tt.company==undefined || tt.company=='') {
                alert('소속을 입력해 주세요')
                return
            }// if
            if (tt.position==undefined || tt.position=='') {
                alert('직급을 입력해 주세요')
                return
            }// if
            if (tt.category==undefined || tt.category=='') {
                alert('카테고리를 입력해 주세요')
                return
            }// if
            if (tt.career==undefined || tt.career=='') {
                alert('주요경력/자격을 입력해 주세요')
                return
            }// if

            this.$http.post('/api/users/new', {
                id            : tt.id,
                pw          : tt.pw,
                name      : tt.name,
                phone     : tt.phone,
                gender    : tt.gender,
                birthday  : tt.birthday[0],
                company : tt.company,
                position   : tt.position,
                category : tt.id,
                career      : tt.id
            }).then(resp=>{
                console.log(resp);
            }).catch(err=>{
                alert('오류가 발생했습니다. 다시 시도해주세요')
            })
        }

        // styleCheck()

    }//methods

}
</script>




<!--  -->
<style lang="css">
    .loginWrap{
        text-align: left;
    }
    .form{
        /*padding:8.5px;*/
    }

    .field{
        margin-bottom: 18.5px !important;
    }

    .confirm{
        border-color:green;
        color:green;
    }

    .error{
        border-color: red;
        color:red;
    }
</style>
