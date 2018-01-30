<template>
    <!-- <div class=""> -->

        <div id="navi" class="sixteen wide column " v-bind:class="[bg=='true'?'naviTransfer':'']">

                <h1 id="logo" class="three wide column" >
                    <router-link :to="{ path: '/', params: {} }"><a>Acplearn</a></router-link>
                </h1>


            <!-- 네비게이션 -->
            <ul class="rightMenu right menu">

                <!-- 메인메뉴 -->
                <li>
                    <router-link :to="{ path: '/lectures', params: {} }"><a><b>APL강의관리</b></a></router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/service', params: {} }"><a>서비스소개</a></router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/notices', params: {} }"><a>공지사항</a></router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/apl/application', params: {} }"><a>수강신청</a></router-link>
                </li>
                <li>
                    <router-link :to="{ path: '/guide', params: {} }"><a>이용안내</a></router-link>
                </li>

                <!-- 드롭다운(내정보) -->
                <li>
                    <!-- <a href="#" class="ui dropdown"><i class="user circle icon"></i><i class="dropdown icon"></i> -->
                    <a href="#" class="ui dropdown">내정보<i class="dropdown icon"></i>
                    <div class="menu">
                        <div class="item">내정보수정</div>
                        <div class="item" onclick="move('/users/logout')">로그아웃</div>
                      </div>
                    </a>
                </li>
            </ul>
        </div>


    <!-- </div> -->
</template>

<script>
export default {
  name: 'Nav',
  props:['bg'],
  mounted(){
    // alert(this.bg)
  },
  data () {
    return {
      msg: 'NavBar'
    }
  }
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
        padding: 5px 20px;
        /*padding: 15px 25px 10px 25px;*/
    }
    .naviTransfer{
        background: none !important;
    }
        #logo{
            display: inline-block;
            width: 150px;
            margin-top:4px;
            padding:0;
        }
        .rightMenu{
            position: absolute;
            display: inline-block;
            right:20px;
        }
        .rightMenu li{
            display: inline-block;
            margin-left: 20px;
            cursor: pointer;
        }
        .rightMenu li a, #logo  a{ color:#fff;  }
        .rightMenu li a:link{ color:#fff;  }
        .rightMenu li a:active{ color:#fff;  }
        .rightMenu li a:visited{ color:#fff;  }
        .rightMenu li a:hover{ color:#BCE55C; text-decoration: underline;}

    #logo{
        cursor: pointer;
    }
        #logo  a:hover{
            color:#BCE55C;
        }

</style>
