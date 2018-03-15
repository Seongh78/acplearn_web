<template>
    <!-- 진행강의 목록 -->
    <div class="">


        <h1 class="ui header">기업관리</h1>
        <hr style="opacity:0.37;">



        <!-- ======================== 검색바 ============================ -->
        <div class="ui secondary  menu" style="padding:0;">

            <div class="left menu" >
                <div class="item ui" style="padding:0;">
                    <!-- <div class="ui "> -->
                        <div class="field" style="">
                          <div class="ui toggle checkbox"  v-bind:class="[ timetableFlag ? 'checked' : '' ]" @click.prevent="flagOn">
                            <input type="checkbox" name="gift" tabindex="0" class="hidden" style="background:red;" v-model="timetableFlag">
                            <label>전체기업 보기</label>
                          </div>
                        </div>
                      <!-- </div> -->
                </div>
            </div>


            <div class="right menu" style="padding:0;">

                <div class="item" style="padding:0;">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search...">
                        <i class="search link icon"></i>
                    </div>
                </div>
          </div>

        </div>
        <table class="ui celled padded table viewLoadAnimation">
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

            <tr v-for="(com, cid) in companies" >
                <td class="center aligned">{{ com.com_code }}</td>
                <td class="single line">
                    <router-link tag="a" :to="{ path: '/companies/detail/'+com.com_code }">{{com.com_name}}</router-link>
                </td>
                <td class="center aligned">{{com.com_category}}</td>
                <td class="center aligned">{{com.com_location}}</td>
                <td class="center aligned">5회</td>
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

        </div>


    </div>
</template>



<!-- Script -->
<script>
const page = 'CompanyList';

export default {
    name: page,

    // <!-- ======================== data() ============================ -->
    data () {
        return {
            msg: page,
            timetableFlag:false, // 전체기업보기 플래그
            companies: [] // 기업목록
        }
    },  // data()


    // <!-- ======================== created ============================ -->
    created(){
        this.getCompanies()
    }, // created



    updated(){

    },





    // <!-- ======================== methods ============================ -->
    methods :{

        getCompanies(p=''){
            var param = p ? '?apply=all' : ''
            this.$http.get('/api/companies'+param)
            .then(resp=>{
                this.$set(this, 'companies', resp.data.companies)
            })
            .catch(err=>{

            })
        },

        flagOn(){
            this.timetableFlag = !this.timetableFlag
            this.getCompanies(this.timetableFlag)
        },


    } // methods
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }


    .checkbox label::before,
    .checkbox label::after{
        border: 1px solid #c8c8c8 !important;
    }
</style>
