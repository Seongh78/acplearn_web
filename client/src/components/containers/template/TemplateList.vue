<template>
    <!-- 진행강의 목록 -->
    <div class="">


        <h1 class="ui header">강의템플릿 관리</h1>
        <hr style="opacity:0.37;">
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


        <table class="ui celled padded table ">
            <colgroup>
                <col width="6%">
                <col width="">
                <col width="15%">
            </colgroup>
            <thead>
            <tr>
                <th class="center aligned">No</th>
                <th class="center aligned">강의명</th>
                <th class="center aligned">등록일</th>
            </tr>
            </thead>
            <tbody>

            <tr  v-for="(lec, ii) in lectures">
                <td class="center aligned">{{ ii+1 }}</td>
                <td class="single line"><a>{{ lec.title }}</a></td>
                <td class="center aligned">2017.01.05 </td>
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

                <a href="/lectures/new/summary">
                <div class="ui  animated button" tabindex="0" style="position:absolute; right:25px; height:40px; background:#4374D9; color: #fff;">
                  <div class="visible content ">강의개설</div>
                  <div class="hidden content">
                    <i class="right arrow icon"></i>
                  </div>
                </div></a>
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
