<template>
    <div class="">

        <!-- ======================== 페이지 타이틀 ============================ -->
        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>
                APL기간
                <button class="ui icon button tiny" style="margin: 4px 0 0 5px; padding:7px; font-size:.5em; position:absolute;">
                    <i class="help circle icon"></i> 가이드
                </button>
            </h2>
        </div>
        <!-- ======================== 페이지 타이틀 ============================ -->










        <!-- ======================== 차시설정 ============================ -->
        <div class="cardbox" style="margin:0; padding:25px; ">
            <h3>전체 기간</h3>
            <table class="ui table celled form centerLayout">
                <colgroup>
                    <col width="40%">
                    <col width="40%">
                    <col width="20%">
                </colgroup>
                <thead>
                    <tr>
                        <th>시작일</th>
                        <th>종료일</th>
                        <th>회차</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{{ date.startDate }}</td>
                    <td>{{ date.endDate }}</td>
                    <td>
                        <input type="number" value="0" style="width:55%;" v-model="cc" min="0" max="100" step="1">
                        <button type="button" class="ui primary button" @click.prevent="addSession">확인</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <!-- ======================== 차시설정 ============================ -->










        <!-- ======================== 상세시간표 ============================ -->
        <div class="cardbox" style="margin:10px 0; padding:25px; min-height:350px;">

            <h3>상세 기간</h3>
            <p>* 시작일과 종료일은 <b>APL기간</b> 페이지에서 수정가능합니다.</p>
            <table class="ui celled table form">
                <colgroup>
                    <col width="7%">
                    <col width="17%">
                    <col width="17%">
                    <!-- <col width="53%"> -->
                </colgroup>
                <thead>
                    <tr>
                      <th>회차</th>
                      <th>시작일</th>
                      <th>종료일</th>
                      <th>장소</th>
                    </tr>
                </thead>
                <tbody  v-if="terms.sessionCount<1">
                    <tr>
                      <td colspan="3">아직 회차정보를 입력하지 않으셨군요. 회차정보를 입력해 주세요</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(t, i) in terms.sessionDetail">
                      <td>
                          {{ i+1 }}
                      </td>
                      <td >
                          <div class="ui input disabled" v-if="i==0?'disabled':''">
                                  <input type="date" placeholder="제목을 입력해 주세요" style="width:95%;" v-bind:value="terms.sessionDetail[i].ls_startDate" >
                          </div>
                          <div class="ui input" v-else>
                              <input type="date" placeholder="제목을 입력해 주세요" style="width:95%;" v-model="terms.sessionDetail[i].ls_startDate" @change="dateRagneCheck(i)">
                          </div>
                      </td>
                      <td>
                          <div class="ui input disabled" >
                              {{ terms.sessionDetail[i].ls_endDate }}
                          </div>
                      </td>
                      <td>
                          <input type="text" placeholder="장소를 입력해 주세요" style="width:100%;" v-model="terms.sessionDetail[i].ls_location">
                      </td>
                    </tr>
                </tbody>
            </table>

        </div>
        <!-- ======================== 상세시간표 ============================ -->








        <!-- ======================== 하단 ============================ -->
        <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
            <button class="ui button  button" @click.prevent="save">저장</button>
            <button class="ui primary button" @click.prevent="goTo">다음페이지</button>
        </div>
        <!-- ======================== 하단 ============================ -->


    </div>
</template>



<!-- Script -->
<script>
const page = 'NewAplterm';

export default {
    name: page,
    data () {
        return {
            deleteFlag         : false, // 세션저장시 삭제여부 (true: 삭제)
            ls_idx        : 0, // 세션저장 시 기준아이디
            lec_idx               : '', // 강의아이디
            showModal       : false,
            msg                   : page,
            cc                       : 0, // 입력회차
            termCount        : 0,

            date : {
                startDate:'', endDate:''
            },
            terms : { // apl기간 model
                sessionCount:0,
                sessionDetail: []
            },

            sd: []
        }
    }, // data



    created () {
        const id = sessionStorage.getItem('lecture-idx')
        let summary = JSON.parse(sessionStorage.getItem('lecture-summary'));

        this.$set(this, 'lec_idx', id ? id : -1)
        console.log("this.lec_idx : ",this.lec_idx);

        if (summary) {
            this.$set(this.date, 'startDate', summary.lec_startDate)
            this.$set(this.date, 'endDate', summary.lec_endDate)
        }

        let term = sessionStorage.getItem('lecture-term');
        let count = sessionStorage.getItem('lecture-sessionCount');



        if(term){
            this.$set(this, 'terms', JSON.parse(term))
            console.log(this.terms);
            this.cc = this.terms.sessionCount = count;
            this.fixedDate()
        }



    }, // created








    methods: {

        // == 고정날짜설정 == //
        fixedDate(){
            var L = this.terms.sessionDetail.length-1 < 0 ? 0 : this.terms.sessionDetail.length-1
            // console.log('LLLL: ', L);
            this.$set( this, 'cc', L) // 시작날짜 고정
            this.$set( this.terms.sessionDetail[L], 'ls_endDate', this.date.endDate) // 시작날짜 고정
            this.$set( this.terms.sessionDetail[0], 'ls_startDate', this.date.startDate) // 종료날짜 고정
        },



        // == 입력기간확인 == //
        dateRagneCheck( addr ){
            /*
            날짜는 유닉스타임으로 변환후 비교
            시작/종료확인값과 바뀐값의 번지를 받아서 해당번지 값의 전후값을 비교
            */
            // console.log(this.terms.sessionDetail[addr]);
            var dayOne = 24*60*60 // 하루치 시간
            var selectDate      = new Date(this.terms.sessionDetail[addr].ls_startDate).getTime() / 1000           // 바뀌는 날짜
            var selectDate2    = new Date(this.terms.sessionDetail[addr].ls_endDate).getTime() / 1000            // 바뀌는 날짜- 종료
            var startDate        = new Date(this.terms.sessionDetail[0].ls_startDate).getTime() / 1000                // 시작일
            var endDate         = new Date(this.terms.sessionDetail[this.cc-1].ls_endDate).getTime() / 1000      // 종료일
            var beforeDate    = new Date(this.terms.sessionDetail[addr-1].ls_startDate).getTime() / 1000         // 직전 시작날짜
            var beforeDate2  = new Date(this.terms.sessionDetail[addr-1].ls_endDate).getTime() / 1000         // 직전 종료날짜


            if( ( selectDate <= startDate+dayOne ) || ( selectDate >= endDate ) ){
                this.$set(this.terms.sessionDetail[addr], 'ls_startDate', '')
                this.$set(this.terms.sessionDetail[addr-1], 'ls_endDate', '--')
                alert('해당 날짜와 겹치는 일정이 존재합니다.')
                return
            }// if


            //  이전회차 종료일 자동생성로직
            var aaaa = selectDate-dayOne // 하루 뺀값
            var val = new Date( aaaa*1000 ) // 포맷변환

            var intMonth = Number(val.getMonth()) +1 // 숫자형 Month
            var vYear = val.getFullYear()
            var vMonth = ( intMonth < 10 ? '0' : '') + intMonth  // getMonth는 -1값을 반환함
            var vDay = val.getDate()

            val  =  vYear+ "-" + vMonth + "-" + vDay
            this.$set(this.terms.sessionDetail[addr-1], 'ls_endDate', val)

        }, // dateRagneCheck



        // == 회차(세션)등록 == //
        addSession(){//회차
            /*
            회차(세션) 등록 시 기존 데이터가 없으면 그냥 insert
            데이터가 있을 경우 기존데이터의 데이터 유지 후 추가/삭제
            */

            // 삭제기준
            if(this.cc > this.terms.sessionDetail.length)
                this.$set(this, 'deleteFlag', false)
            else
                this.$set(this, 'deleteFlag', true)


            this.$set(this.terms, 'sessionCount', this.cc)
            this.terms.sessionDetail = []

            for(var ii=0;   ii<this.cc;  ii++){
                this.terms.sessionDetail.push({
                    id: ii,
                    ls_startDate:'0000-00-00', //시작일
                    ls_endDate:'0000-00-00', // 종료일
                    ls_startTime:'', //시작시간
                    ls_endTime: '', // 종료시간
                    sessions:new Array(),
                    ls_idx: this.ls_idx+ii
                })
            }// for

            this.fixedDate()
        }, //회차



        // == 저장 == //
        save(){ //저장
            // console.log("this.terms.sessionDetail[0].ls_idx : ");
            // console.log("this.terms.sessionCount: ",this.terms.sessionCount);
            // return

            if (this.terms.sessionDetail==''  ||  this.terms.sessionDetail==null  ||  this.terms.sessionDetail==undefined) {
                alert('회차정보를 입력해 주세요')
                return
            }

            // 수정 후 저장시 시간표초기화 로직
            if (sessionStorage.getItem('lecture-timetables')) {
                if ( !confirm('수정사항 저장 시 작성하신 시간표는 초기화 됩니다. APL기간을 저장하시겠습니까?') )
                    return
                sessionStorage.removeItem('lecture-timetables');
            }// if


            // 서버로 저장
            var id = this.lec_idx


            // 강의개요를 저장하지 않았을 경우
            if (id<0 || id==undefined) {

                if ( !confirm('강의개요가 저장되지 않았습니다. 모두 저장하시겠습니까?') )
                    return

                // HTTP
                this.$http.post('/api/lectures/create/aplterm', this.terms)
                .then(resp=>{
                    // console.log(resp)
                    var sid = resp.data.session_idx // 저장 ID
                    this.$set(this, 'ls_idx', sid) // 세션아이디 저장
                    for(var t in this.terms.sessionDetail){
                        this.$set(this.terms.sessionDetail[t], 'ls_idx', sid++)
                    }// for
                })
                .catch(err=>{
                    console.log(err)
                    alert('Error')
                    return
                })

            }else{
                // 세션 저장여부 확인
                this.$http.post('/api/lectures/create/aplterm', { lec_idx:id, terms: this.terms})
                .then(resp=>{
                    console.log(resp);
                    var sid = resp.data.session_idx // 저장 ID
                    this.$set(this, 'ls_idx', sid) // 세션아이디 저장
                    for(var t in this.terms.sessionDetail){
                        this.$set(this.terms.sessionDetail[t], 'ls_idx', sid++)
                    }// for

                    //세션스토리지에 저장
                    sessionStorage.setItem('lecture-term', JSON.stringify(this.terms));
                    sessionStorage.setItem('lecture-sessionCount', this.terms.sessionCount);
                    alert('저장되었습니다.')
                })
                .catch(err=>{
                    console.log(err)
                    alert('Error')
                    return
                })

            }// else




        }, // 저장



        // == 페이지이동 == //
        goTo(){
            if ( !sessionStorage.getItem('lecture-term') ) {
                alert('저장 후 이동 가능합니다.')
                return
            }
            this.$ro.push({ path: '/lectures/new/timetable' })
        }// goTo

    } // methods
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }

    .disabled {
        cursor: not-allowed !important;
    }
</style>
