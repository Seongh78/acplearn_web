<template>
    <!-- 진행강의 목록 -->
    <div class="">


        <h1 class="ui header">강의현황</h1>
        <hr style="opacity:0.37;">
        <div class="ui secondary  menu" style="padding:0;">
            <a href="#" class="item active">진행강의</a>
            <a href="/lectures/waiting" class="item">승인중강의</a>
            <a href="/lectures/open" class="item">개설중강의</a>

            <div class="right menu" style="padding:0;">
                <div class="item" style="padding:0;">
                  <div class="ui icon input form">
                    <select class="" name="">
                        <option value="">년도(전체)</option>
                        <option value="">2017</option>
                        <option value="">2016</option>
                        <option value="">2015</option>
                        <option value="">2014</option>
                    </select>&nbsp;&nbsp;
                    <select class="" name="">
                        <option value="">상태(전체)</option>
                        <option value="">2017</option>
                        <option value="">2016</option>
                        <option value="">2015</option>
                        <option value="">2014</option>
                    </select>
                  </div>
                </div>

                <div class="item" style="padding:0;">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search...">
                        <i class="search link icon"></i>
                    </div>
                </div>
          </div>

        </div>


        <table class="ui celled padded table ">
            <colgroup>
                <col width="6%">
                <col width="40%">
                <col width="20%">
                <col width="6%">
                <col width="10%">
                <col width="8%">
            </colgroup>
            <thead>
                <tr>
                    <th class="center aligned">상태</th>
                    <th class="center aligned">강의명</th>
                    <th class="center aligned">액션러닝기간</th>
                    <th class="center aligned">회차</th>
                    <th class="center aligned">시간</th>
                    <th class="center aligned">수강인원</th>

                </tr>
            </thead>
            <tbody>
            <tr v-for="lec in lectures">
                <td>
                    <h5 class="ui center aligned header" v-bind:class="(lec.status==='진행중'?'green':'')">{{ lec.status }}</h5>
                    <!-- <h4 class="ui center aligned header" style="color:#a9a9a9;">종료</h4> -->
                </td>
                <td class="single line"><a href="#">감성안전을 위한 우리조직 안전리더십 개발</a></td>
                <td class="center aligned">{{ lec.dateTerm }} </td>
                <td class="center aligned">{{ lec.count }}회</td>
                <td class="center aligned">총 24시간(4일)</td>
                <td class="center aligned">{{ lec.person }}명</td>
            </tr>
            </tbody>
        </table>

        <br>
        <div class="ui two column centered grid">
          <div class="ui centered pagination menu">
                  <a class="icon item">
                    <i class="left chevron icon"></i>
                  </a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="icon item">
                    <i class="right chevron icon"></i>
                  </a>
                </div>

                <router-link tag="a" :to="{path:'/lectures/new/summary'}">
                <div class="ui  animated button" tabindex="0" style="position:absolute; right:25px; height:40px; background:#4374D9; color: #fff;">
                  <div class="visible content ">강의개설</div>
                  <div class="hidden content">
                    <i class="right arrow icon"></i>
                  </div>
              </div></router-link>
        </div>


    </div>
</template>



<!-- Script -->
<script>
const page = 'LectureProcesses';

export default {
    name: page,
    data () {
        return {
            msg: page,
            lectures: [
                {
                    title: "감성안전을 위한 우리조직 안전리더십 개발",
                    status: "진행중",
                    dateTerm: "2017년01월01일 ~ 2017년01월05일",
                    count: 4,
                    person: 150
                },
                {
                    title: "감성안전을 위한 우리조직 안전리더십 개발",
                    status: "진행중",
                    dateTerm: "2017년01월01일 ~ 2017년01월05일",
                    count: 4,
                    person: 150
                },
                {
                    title: "감성안전을 위한 우리조직 안전리더십 개발",
                    status: "종료",
                    dateTerm: "2017년01월01일 ~ 2017년01월05일",
                    count: 4,
                    person: 150
                },
                {
                    title: "감성안전을 위한 우리조직 안전리더십 개발",
                    status: "진행중",
                    dateTerm: "2017년01월01일 ~ 2017년01월05일",
                    count: 4,
                    person: 150
                },
                {
                    title: "감성안전을 위한 우리조직 안전리더십 개발",
                    status: "종료",
                    dateTerm: "2017년01월01일 ~ 2017년01월05일",
                    count: 4,
                    person: 150
                },
                {
                    title: "감성안전을 위한 우리조직 안전리더십 개발",
                    status: "종료",
                    dateTerm: "2017년01월01일 ~ 2017년01월05일",
                    count: 4,
                    person: 150
                },
                {
                    title: "감성안전을 위한 우리조직 안전리더십 개발",
                    status: "종료",
                    dateTerm: "2017년01월01일 ~ 2017년01월05일",
                    count: 4,
                    person: 150
                },
                {
                    title: "감성안전을 위한 우리조직 안전리더십 개발",
                    status: "종료",
                    dateTerm: "2017년01월01일 ~ 2017년01월05일",
                    count: 4,
                    person: 150
                },
                {
                    title: "감성안전을 위한 우리조직 안전리더십 개발",
                    status: "종료",
                    dateTerm: "2017년01월01일 ~ 2017년01월05일",
                    count: 4,
                    person: 150
                }
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
