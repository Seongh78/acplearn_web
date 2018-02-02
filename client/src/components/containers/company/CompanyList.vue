<template>
    <!-- 진행강의 목록 -->
    <div class="">


        <h1 class="ui header">기업관리</h1>
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
                <col width="13%">
                <col width="35%">
            </colgroup>
            <thead>
            <tr>
                <th class="center aligned">사업자번호</th>
                <th class="center aligned">기업명</th>
                <th class="center aligned">업종</th>
                <th class="center aligned">주소</th>
                <th class="center aligned">진행과정</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="lec in lectures">
                <td class="center aligned">251-02-220435</td>
                <td class="single line"><a href="/company/<%=ii%>">(주)Acplean</a></td>
                <td class="center aligned">의료</td>
                <td class="center aligned">부산광역시 남구 수영로 88</td>
                <td class="center aligned">5회 <button id="companyCompleteView" class="button ui mini basic">보기</button></td>
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
const page = 'CompanyList';

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
