<template>

    <div class="two wide column ui vertical menu sideNavi">
        <div class="item profile">
            <br>
            <img src="https://semantic-ui.com/images/avatar/large/jenny.jpg" width="45%" class="ui circular image"  alt="" style="margin:0 auto;">
            <h3>David</h3>
            <div class="">
                <a class="category profileEdit" >내정보수정</a>
            </div>
            <br>
        </div>
        <div class="item">
            강의현황 <i class="calendar outline icon"></i>
            <hr style="opacity:0.1;">
            <div class="menu">
                <a class="active item">진행강의</a>
                <a class="item">승인대기강의</a>
                <a class="item">개설대기강의</a>
            </div>
        </div>
        <a class="item">강의템플릿 관리 <i class="clone icon"></i></a>
        <a class="item">기업관리 <i class="users icon"></i></a>
        <a class="item">통계 <i class="bar chart icon"></i> </a>
        <div class="ui dropdown item">
            환경설정
            <i class="options icon"></i>
            <div class="menu">
                <a class="item"><i class="edit icon"></i> Edit Profile</a>
                <a class="item"><i class="globe icon"></i> Choose Language</a>
                <a class="item"><i class="settings icon"></i> Account Settings</a>
            </div>
        </div>
    </div>



</template>

<script>
export default {
    name: 'SideNavi',

    props: ['aaa'],

    mounted(){
        // alert(this.bg)
    },

    data () {
        return {
            msg: 'NavBar',
            menus: [
                {
                    mid: 'lectures',
                    title: '강의현황',
                    submenus: [
                        {
                            sid:'progress',
                            title: '진행강의'
                        }
                    ]
                }
            ]//menus
        }
    }//data
}
</script>



<style scoped>

    .sideNavi{
        background: red;
        border-radius: 0;
        padding: 0 !important;
        margin: 0 !important;
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

</style>
