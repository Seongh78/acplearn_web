<template>
    <div class="hash" >
        <!-- Navbar -->
        <top-layout bg="">
            <nav-bar bg=""/>
        </top-layout>


        <!-- Content -->
        <div id="sbcWrap" class="ui grid">

            <!-- Main content -->
            <div class="thirteen wide column centered rightContents" >

                <div class="ui ordered steps" style="width:100%; ">

                    <div v-for="step in steps" :key="step.sub" class="step" v-bind:class="((step.sub == selector) ? 'active' : '')" style="cursor:pointer;" @click.prevent="onChangeStep(step.sub)">
                        <div class="content">
                            <div class="title">{{step.title}}</div>
                            <div class="description">{{ step.sub }}</div>
                        </div>
                    </div>
                    <!-- <router-link
                        tag="div"
                        v-for="step in steps"
                        :key="step.sub"
                        class="step"
                        v-bind:class="(step.sub == selector) ? 'active' : '' "
                        style="cursor:pointer;"
                        :to="'/lectures/new/'+step.sub"
                        @click.native="onChangeStep(step.sub)">
                        <div class="content">
                            <div class="title">{{step.title}}</div>
                            <div class="description">{{ step.sub }}</div>
                        </div>
                    </router-link> -->

                </div>

                <router-view class=""  />

            </div>
            <!-- Main content -->

        </div>
        <!-- /Content -->


    </div>
</template>







<script>
import {
    Navbar,
    Card,
    PageTitle,
    TopLayout,
    PageLayout,
    SideNavi,
    SearchForm
} from '../components'

export default {
    name: 'SideBarContainer',
    components: {
        'nav-bar' : Navbar,
        'card' : Card,
        'page-title' : PageTitle,
        'top-layout' : TopLayout,
        'page-layout' : PageLayout,
        'side-navi' : SideNavi
    },





    data () {
        return {
            msg: 'LectureContainer',
            testData:0,
            initial : {}, // 초기데이터
            stepFlag : '',
            selector: 'summary',
            steps : [
                { title: '강의개요', sub: 'summary' },
                { title: 'APL기간', sub: 'aplterm' },
                { title: '시간표', sub: 'timetable' },
                { title: 'KPI설정', sub: 'kpi' },
                { title: '수강생', sub: 'students' },
                { title: '팀빌딩', sub: 'team' },
                // { title: '설문', sub: 'survey' },
                { title: '완료', sub: 'complete' }
            ]
        }
    }, // data()








    created() {


        // var ss = window.sessionStorage;
        // sessionStorage.clear();

        // 초기 스텝설정
        var path = this.$ro.history.current.path.split('/')
        this.selector = path[path.length-1]



        // 저장
        this.$EventBus.$on('save', this.save)
        this.$EventBus.$on('goTo', this.goTo)

    },

    updated() {
        var path = this.$ro.history.current.path.split('/')
        this.selector = path[path.length-1]
    },




    methods: {

        // 상단 페이지스텝 변경
        onChangeStep(step){
            // console.log(step);
            if ( confirm('현재 페이지에서 저장하지 않은 데이터는 초기화 됩니다. 페이지를 이동하시겠습니까?') ) {
                this.selector = step;
                this.$ro.push({path:'/lectures/new/'+step})
                return
            }
        }



    } // methods()
}
</script>




<style scoped>


    #sbcWrap{
        padding:0;
        margin:0;
        background: #f5f5f5;
    }

    .rightContents{
        padding-top: 35px !important;
        padding-bottom: 55px !important;
        min-height: 700px !important;
    }

    th{
            background: #F9FAFB;
            padding:0.92857143em 0.78571429em;
        }
        .borderBottom{
            border-bottom: 1px solid rgba(34, 36, 38, 0.1);
        }
        .borderTop{
            border-top: 1px solid rgba(34, 36, 38, 0.1);
        }


</style>
