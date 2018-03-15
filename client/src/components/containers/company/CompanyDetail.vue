<template>
  <div class="hash">


      <h1 class="ui header">{{ company.com_name }}</h1>

        <table class="ui celled table">
        <colgroup>
            <col width="13%;">
            <col width="42%;">

            <col width="13%;">
            <col width="32%;">
        </colgroup>
        <tbody>
            <tr>
                <td>사업자번호</td>
                <td>{{ company.com_code }}</td>
                <td>업종</td>
                <td>{{ company.com_category }}</td>
            </tr>
            <tr>
                <td>주소</td>
                <td>{{ company.com_location }}</td>
                <td>진행과정</td>
                <td>{{ lectures.length }}회</td>
            </tr>
            <tr>
                <td>등록된 수강생</td>
                <td>{{ company.com_registrationCount }}명</td>
                <td>누적 수강생</td>
                <td>{{cumulativeCount}}명</td>
            </tr>
        </tbody>
    </table>




    <br>

    <h4>{{ company.com_name }}와 진행한 과정</h4>
    <table class="ui table celled">
        <thead>
            <tr>
                <th>no</th>
                <th>강의명</th>
                <th>액션러닝기간</th>
                <th>강의시간</th>
                <th>수강인원</th>
                <th>담당자</th>
            </tr>
        </thead>
        <tbody v-if="lectures.length==0">
            <tr>
                <td colspan="6">아직 이 기업과 진행한 과정이 없습니다.</td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr v-for="(lec, lid) in  lectures">
                <td>{{ lid+1 }}</td>
                <td>{{ lec.lec_title }}</td>
                <td>{{ lec.lec_startDate }} ~ {{ lec.lec_endDate }}</td>
                <td>-</td>
                <td>{{ lec.lec_studentCount }}명</td>
                <td>{{ lec.mg_name }}</td>
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
              <a class="icon item">
                <i class="right chevron icon"></i>
              </a>
            </div>

    </div>








  </div>
</template>

<script>
const page = "CompanyDetail"
export default {
    name: page,

    // data
    data () {
        return {
            msg: page,
            com_code:'', // 기업코드
            company:{}, // 기업정보
            lectures:[], // 진행한 수업 목록
            cumulativeCount : 0
        }
    }, // data


    //Created
    created(){
        // 기업코드 파싱
        var id = this.$ro.history.current.params.id
        this.$set(this, 'com_code', id)
        this.getCompany(id) // 기업정보 조회
    },


    //methods
    methods: {

        // 기업정보 조회
        getCompany(cid){
            this.$http.get('/api/companies/'+cid)
            .then(resp=>{
                console.log("LELE : ", resp.data.lectures.length);
                this.$set(this, 'company', resp.data.company)
                this.$set(this, 'lectures', resp.data.lectures)
                // 누적수강생 만들기
                resp.data.lectures.forEach((r)=>{
                    if(cid==r.com_code)
                        this.$set(this, 'cumulativeCount', this.cumulativeCount+r.lec_studentCount)
                })
            })
            .catch(err=>{
                alert('Error - ')
            })
        }// 기업정보 조회

    }// methods
}
</script>


<!--  -->
<style scoped>

</style>
