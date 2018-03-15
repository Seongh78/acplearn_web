<template>
    <!-- <div class=""> -->

        <div id="navi" class="sixteen wide column " v-bind:class="[bg=='true'?'naviTransfer':'']">

                <h1 id="logo" class="three wide column" >
                    <!-- <router-link :to="{ path: '/', params: {} }"><a>Acplearn</a></router-link> -->
                    <router-link :to="{ path: '/', params: {} }">
                        <img src="../../assets/acplearn_logo_white.png" width="115" style="" alt="">
                    </router-link>
                </h1>


            <!-- 네비게이션 -->
            <ul class="rightMenu right menu">

                <!-- 메인메뉴 -->

                    <router-link tag="li" :to="{ path: '/lectures/processes', params: {} }" >APL강의관리 <i class="sign in icon"></i></router-link>&nbsp;
                    <router-link tag="li" :to="{ path: '/service', params: {} }">서비스소개</router-link>
                    <router-link tag="li" :to="{ path: '/notices', params: {} }">공지사항</router-link>
                    <router-link tag="li" :to="{ path: '/apl/application', params: {} }">수강신청</router-link>
                    <router-link tag="li" :to="{ path: '/guide', params: {} }">이용안내</router-link>
                    <router-link v-if="!usrStatus"  tag="li" :to="{ path: '/login' }" >로그인</router-link>
                    <li  @click.prevent="logout" v-else>로그아웃</li>

                <!-- 드롭다운(내정보) -->
                <!-- <li>
                    <a href="#" class="ui dropdown">내정보<i class="dropdown icon"></i>
                    <div class="menu">
                        <div class="item">내정보수정</div>
                        <div class="item" onclick="move('/users/logout')">로그아웃</div>
                      </div>
                    </a>
                </li> -->
            </ul>
        </div>


    <!-- </div> -->
</template>

<script>
export default {
    name: 'Nav',

    props:['bg'],

    data () {
        return {
            msg: 'NavBar',
            usrStatus:false
        }
    }, // data

    created(){
        this.sessionCheck()
    },

    updated(){
        // console.log('Nav updated');
        this.sessionCheck()
    },

    mounted(){
        // alert(this.bg)
    },



    methods:{
        logout(){
            this.$http.get('/api/users/logout').then(resp=>{
                // console.log(resp);
                this.$set(this , 'usrStatus', false)
                alert('로그아웃되었습니다.')
                this.$ro.push({path:'/'})
            })
        },

        sessionCheck() {
            this.$http.get('/api/users/session').then(resp=>{
                this.$set(this, 'usrStatus', true);
            }).catch(e=>{
                this.$set(this, 'usrStatus', false);
            })
        }// sessionCheck
    }//methods
}
</script>



<style scoped>
    #navi{
        /*파란색*/
        /*background: #3781bf;*/
        /*짙은남색*/
        background: #3b485f;
        color:#fff;
        /*height: 72px;*/
        padding: 8px 30px 0px 30px;
        /*padding: 15px 25px 10px 25px;*/
    }
    .naviTransfer{
        background: none !important;
    }
        #logo{
            display: inline-block;
            width: 150px;
            margin-top:7px;
            padding:0;
        }
        .rightMenu{
            position: absolute;
            display: inline-block;
            right:30px;
        }
        .rightMenu li{
            display: inline-block;
            margin-left: 20px;
            cursor: pointer;
        }
        .rightMenu li , #logo  a{ color:#fff;  }
        .rightMenu li:link{ color:#fff;  }
        .rightMenu li:active{ color:#fff;  }
        .rightMenu li:visited{ color:#fff;  }
        .rightMenu li:hover{ color:#BCE55C; text-decoration: underline;}

        li.router-link-active i,
        li.router-link-active{
            color:#BCE55C !important;
            text-decoration: underline;
        }



    #logo{
        cursor: pointer;
    }
        #logo  a:hover{
            color:#BCE55C;
        }

</style>
