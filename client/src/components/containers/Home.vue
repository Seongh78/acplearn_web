<template>
    <div class="">

        <top-layout bg="true">
            <nav-bar bg="true"/>
            <br>
            <br>
            <page-title mainTitle="Acplearn으로 프리미엄 강사가 되어보세요" subTitle="">
                <br>
                <br>
                <div class="form">
                    <input type="text" name="" value="" style="" class="sch" placeholder="지역, 분야, 강의명 등으로 검색해 보세요">
                </div>
                <br>
                <br>
            </page-title>
        </top-layout>

        <div class="ui grid service">
            <div class="sixteen wide column centered" style="text-align:center;">
                <br>
                <br>
                <h2 class="ui icon header">
                  <div class="content">
                    서비스소개
                    <div class="sub header">Manage your account settings and set e-mail preferences.</div>
                  </div>
                </h2>
            </div>
            <div class="ten wide column centered" style="margin-top:45px; padding-bottom:5%">
                <div class="" >
                    <div class="" style="width: 33%; text-align:center; display:inline-block;">
                        <img src="http://www.freemoa.net/public/images/dgm/prj_process_01.png" alt="">
                        <h2>Solution</h2>
                        <p>Manage your account settings and set e-mail preferences.</p>
                    </div>
                    <div class="" style="width: 33%; text-align:center; display:inline-block;">
                        <img src="http://www.freemoa.net/public/images/dgm/prj_process_02.png" alt="">
                        <h2>Standard</h2>
                        <p>Manage your account settings and set e-mail preferences.</p>
                    </div>
                    <div class="" style="width: 33%; text-align:center; display:inline-block;">
                        <img src="http://www.freemoa.net/public/images/dgm/prj_process_03.png" alt="">
                        <h2>Share</h2>
                        <p>Manage your account settings and set e-mail preferences.</p>
                    </div>
                </div>
            </div>
        </div>



        <div class="ui grid application">
            <div class="sixteen wide column centered" style="text-align:center;">
                <br>
                <br>
                <h2 class="ui icon header">
                  <div class="content">
                    수강신청
                    <div class="sub header">Manage your account settings and set e-mail preferences.</div>
                  </div>
                </h2>
            </div>
            <div class="ten wide column centered" style="margin-top:45px; padding-bottom:5%">
                <div class="ui grid" style="padding: 5px; ">

                    <div class="eight wide column" style="padding:11px; cursor:pointer;" v-for="(tr, ii) in testRepeat">
                    <div class="cardbox " style="margin:0; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.07);">
                        <div class="ui pointing below red basic label" style="font-size:0.5em;">NEW</div>
                        <h3 style="margin-top:0;">17년도 0{{ii+1}}차 APL 튜터 등록과정</h3>
                        <hr>
                        <p>
                            <b>장소:</b> 비전플랜 부산본사 대강의실<br><b>일시:</b> 2017년 0<%=ii%>월 22일(일)
                        </p>
                    </div>
                </div>

                <div class="five wide column centered">
                    <button class="ui basic  button fluid">수강신청 바로가기</button>
                </div>
            </div>

            </div>
        </div>



        <div class="ui grid review">
            <div class="sixteen wide column centered" style="text-align:center;">
                <br>
                <br>
                <h2 class="ui icon header">
                  <div class="content">
                    액플런 이용후기
                    <div class="sub header">Manage your account settings and set e-mail preferences.</div>
                  </div>
                </h2>
            </div>
            <div class="ten wide column centered" style="margin-top:45px; padding-bottom:5%">
                <div class="ui grid" style="padding: 5px; ">


                    <div class="four wide column" style="padding:0;" v-for="r in rev">
                    <div class="cardbox" style="margin:5px; height:150px;">
                        <div class="content">
                          <div class="header">{{r.name}} <small> {{r.gender}}</small></div>
                        </div>
                        <hr>
                        <div class="">
                            <p>{{r.txt}}</p>
                        </div>
                    </div>
                    </div>



            </div>
            </div>
        </div>

        <!-- JS테스트 -->
        <!-- <button is="sui-button" primary v-on:click="onc">{{msg}}</button>
        <div class="ui top attached tabular menu">
          <div class="active item">Tab</div>
          <div class="item">Tab</div>
        </div>
        <div class="ui bottom attached active tab segment">
          <p>1</p>
          <p>2</p>
        </div> -->
    </div>
</template>



<!-- Script -->
<script>
import { Navbar, Card, PageTitle, TopLayout } from '@/components/components'


const page = 'Home';

export default {
    name: page,
    components: {
        'nav-bar' : Navbar,
        'card' : Card,
        'page-title' : PageTitle,
        'top-layout' : TopLayout
    },
    created(){

    },
    data () {
        return {
            msg: page,
            testRepeat:[
                {title: "ABC - 01"},
                {title: "ABC - 02"},
                {title: "ABC - 03"},
                {title: "ABC - 04"}
            ],
             rev : [
                    {name : "Kelly", gender: "[수강생]", txt: "“디자인에 대한 전문성이 높고, 디자인 측면에서 코멘트를 많이 해주실 수 있는 디자이너입니다.“"},
                    {name : "David", gender: "[수강생]", txt: "Lorem ipsum dolor sit amet dolor sit a"},
                    {name : "Ahnna", gender: "[강사]", txt: "“일정을 잘 맞춰주셨으며 전문성이 높은 개발자입니다. 작업도 깔끔하게 잘 마무리해주셔서 추천드립니다.“"},
                    {name : "James", gender: "[수강생]", txt: "“최고였습니다. 다른말이 필요 없습니다. “"},
                    {name : "Tom", gender: "[강사]", txt: "“의뢰한 건에 대해 전문성을 가지고 있고, 별다른 말하지 않아도 알아서 잘 진행해주셨습니다. “"},
                    {name : "Mark", gender: "[강사]", txt: "“짧은 기간이지만 미팅에서부터 진행까지 깔끔하게 진행해주셔서 좋았습니다. 직접만나보니 성격도 좋으시고 차분에게 일을 잘처리해주셨습니다.“"},
                    {name : "Gildong", gender: "[강사]", txt: "“의뢰한 건에 대해 전문성을 가지고 있고, 별다른 말하지 않아도 알아서 잘 진행해주셨습니다. “"},
                    {name : "Piter", gender: "[수강생]", txt: "Lorem ipsum dolor sit amet"}
            ]
        }
    },

    methods:{
        onc(){
            alert(1)
        }
    }
}
</script>



<!-- Style -->
<style scoped>


    .sloganWrap{
        color:#fff;
        width: 70%;
        margin:0 auto;
        padding: 8.5% 5%;
        text-align: center;
    }



    .application{
        background: #f4f4f4;
    }




</style>
