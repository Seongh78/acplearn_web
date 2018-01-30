<template>
    <div class="">

        <top-layout bg="true">
            <nav-bar bg="true"/>
            <page-title mainTitle="APL 수강신청" subTitle="" />
        </top-layout>



        <page-layout>


                <div class="ui secondary  menu" style="padding:0;">
                  <div class="left menu" style="padding:0;">
                    <div class="item" style="padding:0;">
                      <div class="ui icon input">
                        <input type="text" placeholder="Search...">
                        <i class="search link icon"></i>
                      </div>
                    </div>
                  </div>
                </div>


                <table class="ui single line table">
                    <colgroup>
                        <col width="5%">
                        <col width="53%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>제목</th>
                            <th style="text-align:center;">등록일</th>
                            <th style="text-align:center;">작성자</th>
                            <th style="text-align:center;">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(notice, ii) in notices">
                            <td>{{ ii }}</td>
                            <td><a href="">{{ notice.title }}</a></td>
                            <td style="text-align:center;">{{ notice.date }}</td>
                            <td style="text-align:center;">{{ notice.writer }}</td>
                            <td style="text-align:center;">{{ ii+23}}</td>
                        </tr>
                    </tbody>
                </table>
                <br>


                <div class="ui two column centered grid">
                    <div class="ui centered pagination menu">
                        <a class="icon item"><i class="left chevron icon"></i></a>
                        <a class="item">1</a>
                        <a class="item">2</a>
                        <a class="item">3</a>
                        <a class="item">4</a>
                        <a class="icon item"><i class="right chevron icon"></i></a>
                    </div>
                </div>


        </page-layout>





    </div>
</template>



<!-- Script -->
<script>
import { Navbar, Card, PageTitle, TopLayout, PageLayout } from '@/components/components'
const page = 'AplectureApplication';

export default {
    name: page,

    components: {
        'nav-bar' : Navbar,
        'card' : Card,
        'page-title' : PageTitle,
        'top-layout' : TopLayout,
        'page-layout' : PageLayout
    },

    data () {
        return {
            msg: page,
            notices: [
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
            ]
        }
    }
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }
</style>
