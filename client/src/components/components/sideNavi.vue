<template>

    <div class="three wide column ui vertical menu sideNavi">
        <div class="item profile">
            <br>
            <img src="https://semantic-ui.com/images/avatar/large/jenny.jpg" width="45%" class="ui circular image"  alt="" style="margin:0 auto;">
            <h3>David</h3>
            <div class="">
                <!-- <a class="category profileEdit" >내정보수정</a> -->
            </div>
            <br>
        </div>



        <!-- Menu Test -->
        <!-- <div class="item" v-for="menu in menus">
            {{ menu.title }}
            <div class="menu" v-if="menu.submenus">
                <hr style="opacity:0.07;">
                <router-link :to="{ path: '/lectures/processes', query: {aa:1} }" v-for="submenu in menu.submenus">
                    <a class="item" v-bind:class="thisMenu==submenu.id?'active':'' " >- {{ submenu.title }}</a>
                </router-link>
            </div>
        </div> -->




        <div class="item">
            강의현황 <i class="calendar outline icon"></i>
            <!-- <hr style="opacity:0.07;"> -->
            <div class="menu">
                <router-link class="item" tag="a" :to="{ path:'/lectures/processes'}">- 진행강의</router-link>
                <router-link class="item" tag="a" :to="{ path: '/lectures/wait'}">- 승인대기강의</router-link>
                <router-link class="item" tag="a" :to="{ path: '/lectures/cwait'}">- 개설대기강의</router-link>
            </div>
        </div>
        <router-link class="item" tag="a" :to="{ path : '/templates'}">
            강의템플릿 관리 <i class="clone icon"></i>
        </router-link>
        <router-link class="item" tag="a" :to="{ path : '/companies'}">
            기업관리 <i class="users icon"></i>
        </router-link>
        <router-link class="item" tag="a" :to="{ path : '/statistics'}">
            통계 <i class="bar chart icon"></i>
        </router-link>
        <router-link class="item" tag="a" :to="{ path : '/settings'}">
            환경설정 <i class="options icon"></i>
        </router-link>


        <!-- <div class="ui dropdown item">
            환경설정
            <i class="options icon"></i>
            <div class="menu">
                <a class="item"><i class="edit icon"></i> Edit Profile</a>
                <a class="item"><i class="globe icon"></i> Choose Language</a>
                <a class="item"><i class="settings icon"></i> Account Settings</a>
            </div>
        </div> -->

        <router-link class="item" tag="a" :to="{ path : '/my'}">
            내 정보 관리 <i class="user circle icon"></i></i>
        </router-link>
    </div>



</template>

<script>
export default {
    name: 'SideNavi',

    props: ['aaa'],

    created(){
    },

    updated(){
            // alert(1)
    },

    data () {
        return {
            msg: 'NavBar',
            thisMenu:'lectures_processes',
            menus: [
                {
                    id: 'lectures',
                    title: '강의현황',
                    submenus: [
                        {
                            id: 'progresses',
                            title: '진행강의'
                        },
                        {
                            id: 'wait',
                            title: '승인대기 강의'
                        },
                        {
                            id: 'create',
                            title: '개설대기 강의'
                        }
                    ]
                },
                {
                    id: 'templates',
                    title: '강의템플릿 관리',

                }
            ]//menus
        }
    }, //data



    methods:{

        onRouter(){
            this.thisMenu = this.$route.name;
            console.log(this.thisMenu);
        }

    } //methods
}
</script>



<style scoped>

    .sideNavi{
        background: red;
        border-radius: 0;
        padding: 0 !important;
        margin: 0 !important;
        max-width: 230px !important;
        /*min-width: 170px !important;*/
    }

    .profile{
        text-align: center;
    }
    .profileEdit{
        font-size:0.85em;
    }
        .profileEdit:hover{
            text-decoration:underline;
            cursor: pointer;
        }

    .aaa{
        background: red;
    }

    .active{
        text-decoration: underline !important;
    }

    .item,  .item a{
        color:#353535 !important;
        font-size: 0.95em;
        padding-left:20px !important;
        padding-right:20px !important;
    }




    .menu .router-link-active {
      font-weight: bold;
      color:#4374D9;
      background: #f1f1f1 !important;
    }




</style>
