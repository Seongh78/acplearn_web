<template>
    <div class="hash">
        <!-- Navbar -->
        <top-layout bg="">
            <nav-bar bg=""/>
        </top-layout>


        <!-- Content -->
        <div id="sbcWrap" class="ui grid">

            <!-- Main content -->
            <div class="thirteen wide column centered rightContents" >

                <div class="ui ordered steps" style="width:100%; ">

                    <router-link
                        tag="div"
                        v-for="step in steps"
                        :key="step.sub"
                        class="step"
                        v-bind:class="(step.sub == selector) ? 'active' : '' "
                        style="cursor:pointer;"
                        :to="'/lectures/new/'+step.sub"
                        @click.native="onChangeStep(step.sub)">
                    <!-- <div class="step" style="cursor:pointer;" v-for="step in steps"> -->
                        <div class="content">
                            <div class="title">{{step.title}}</div>
                            <div class="description">{{ step.sub }}</div>
                        </div>
                    <!-- </div> -->
                    </router-link>

                </div>

                <router-view/>
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
      stepFlag : '',
      selector: 'summary',
      steps : [
            { title: '강의개요', sub: 'summary' },
            { title: 'APL기간', sub: 'aplterm' },
            { title: '시간표', sub: 'timetable' },
            { title: 'KPI설정', sub: 'kpi' },
            { title: '수강생', sub: 'students' },
            { title: '팀빌딩', sub: 'team' },
            { title: '설문', sub: 'survey' }
        ]
        }
    }, // data()


    updated(){
        // alert(1)
    },

    methods: {
        onChangeStep(step){
            // console.log(step);
            this.selector = step;
        }

    }
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
