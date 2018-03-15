<template>
    <div class="">

        <h1 class="ui header">승인대기 강의</h1>
        <hr style="opacity:0.3;">
        <div class="ui secondary  menu" style="padding:0;">
            <router-link href="#" class="item" tag="a" :to="{ name: 'lectures_processes'}">진행강의</router-link>
            <a class="item active">승인대기강의</a>
            <router-link class="item" tag="a" :to="{ name: 'lectures_cwait'}">개설대기강의</router-link>

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
                <col width="7.5%">
                <col width="38.5%">
                <col width="21.5%">
                <col width="5%">
                <col width="10%">
                <col width="6%">
            </colgroup>
            <thead>
                <tr>
                    <th class="center aligned">상태</th>
                    <th class="center aligned">강의명</th>
                    <th class="center aligned">액션러닝기간</th>
                    <th class="center aligned">회차</th>
                    <th class="center aligned">시간</th>
                    <th class="center aligned">인원</th>

                </tr>
            </thead>
            <tbody v-if="lectures.length<1">
                <tr>
                    <td class="center aligned" colspan="6">
                        <h4>승인대기 중인 강의가 없습니다.</h4>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr v-for="lec in lectures">
                    <td>
                        <h5 class="ui center aligned header" v-bind:class="(lec.lec_flag==='진행중'?'green': (lec.lec_flag=='승인대기')? 'grey' : 'red' )">{{ lec.lec_flag }}</h5>
                    </td>
                    <td class="single line">
                        <router-link tag="a" :to="{path:'/lectures/detail/'+lec.lec_idx}">{{ lec.lec_title }}</router-link>
                    </td>
                    <td class="center aligned">{{ lec.lec_startDate }} ~ {{ lec.lec_endDate }}</td>
                    <td class="center aligned">{{ lec.lec_sessionCount }}회</td>
                    <td class="center aligned">-</td>
                    <td class="center aligned">{{ lec.lec_personnel }}명</td>
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
const page = 'LectureWait';

export default {
    name: page,

    created() {
        var ss = window.sessionStorage;
        sessionStorage.clear();

        this.getLectures()
    },

    data () {
        return {
            msg: page,
            lectures: []
        }
    }, // data

    methods: {
        getLectures() {
            this.$http.get('/api/lectures?lecType=승인대기')
            .then(resp=>{
                // console.log(resp.data.data);
                this.$set(this, 'lectures', resp.data.data)
            }).catch(err=>{
                console.log(err);
                alert('Err')
            })
        }// getLectures
    }// methods
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }
</style>
