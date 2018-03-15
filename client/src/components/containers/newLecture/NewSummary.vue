<template>
  <div class="hash">



        <!-- 타이틀 -->
        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>
                강의개요
                <small>
                    <!-- <button id="loadTemplate" class="ui button small" @click="showModal = true">강의템플릿</button> -->
                    <button
                    id="loadTemplate"
                    class="ui button small "
                    v-bind:class="[tempLectures.length>0?'green':'']"
                    @click="modal.tempLecture=true"
                    v-if="!flag">
                        임시저장 강의 {{ tempLectures.length }}건
                    </button>
                </small>
            </h2>
        </div>

        <!-- 컨텐츠 -->
        <div class="cardbox" style="margin:0; padding:25px; ">

            <table class="ui table celled form centerLayout">
                <colgroup>
                    <col width="7.5%">
                    <col width="60%">
                </colgroup>
                <tr>
                    <th>강의제목</th>
                    <td>
                        <input type="text" placeholder="제목을 입력해 주세요" style="width:95%;" v-model="summary.lec_title">
                    </td>
                </tr>

                <tr>
                    <th class="borderTop">강의목적</th>
                    <td>
                        <textarea style="width:95%;" rows="6" placeholder="내용을 입력해 주세요" v-model="summary.lec_goal"></textarea>
                    </td>
                </tr>
                <tr>
                    <th class="borderTop">내용</th>
                    <td>
                        <textarea style="width:95%;" rows="6" placeholder="내용을 입력해 주세요" v-model="summary.lec_content"></textarea>
                    </td>
                </tr>
                <tr>
                    <th class="borderTop">기대효과</th>
                    <td>
                        <textarea style="width:95%;" rows="6" placeholder="내용을 입력해 주세요" v-model="summary.lec_effect"></textarea>
                    </td>
                </tr>

                <tr>
                    <th class="borderTop">계획서/자료</th>
                    <td>
                        <input id="file" type="file" placeholder="제목을 입력해 주세요" style="width:85%;" >
                        <!-- <input id="file" type="file" placeholder="제목을 입력해 주세요" style="width:85%;" v-model="summary.lec_introFile"> -->
                        <button type="button" for="file" class="ui basic button" style="width:10%; height:42.5px;">추가</button>
                    </td>
                </tr>
                <tr>
                    <th class="borderTop">강의기간</th>
                    <td>
                        <input type="date" placeholder="제목을 입력해 주세요" style="width:27%;" v-model="summary.lec_startDate">
                        &nbsp;&nbsp;&nbsp;
                        <input type="date" placeholder="제목을 입력해 주세요" style="width:27%;" v-model="summary.lec_endDate">
                    </td>
                </tr>
            </table>

        </div>

        <!-- 하단버튼 -->
        <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
            <button class="ui button">템플릿으로 저장</button>
            <button class="ui button" v-on:click="save">저장</button>
            <button class="ui primary button" @click.prevent="goTo">다음페이지</button>
        </div>
        <!-- content -->




<!-- ======================== Modal ============================ -->

    <!-- 강의템플릿 모달 -->
    <modal v-if="showModal" @close="showModal = false" w="w-50">
        <h3 slot="header">강의안 템플릿</h3>
        <div slot="body">
            <table class="ui celled table">
                <colgroup>
                    <col width="8%">
                    <col width="50%">
                </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>강의명</th>
                      <th>분야</th>
                      <th>저장날짜</th>
                    </tr>
                  </thead>
                  <tbody v-if="tempSummary">
                      <tr>
                        <td colspan="3">저장된 강의가 없습니다.</td>
                      </tr>

                  </tbody>
                  <tbody v-else>
                      <tr v-for="temp in tempSummary">
                        <td><input type="radio" v-bind:value="temp.lec_idx" v-model="summaryImport" ></td>
                        <td>{{temp.lec_title}}</td>
                        <td>
                            산업안전
                        </td>
                        <td>{{temp.lec_start_date}}</td>
                      </tr>
                  </tbody>
            </table>
        </div>
    </modal>



    <!-- 임시저장 모달 -->
    <modal v-if="modal.tempLecture" @close="modal.tempLecture = false" w="w-60">
        <h3 slot="header">임시저장 강의</h3>
        <div slot="body">
            <table class="ui celled table">
                <colgroup>
                    <col width="8%">
                    <col width="50%">
                </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>강의명</th>
                            <th>분야</th>
                            <th>날짜</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody v-if="!tempLectures">
                        <tr>
                            <td colspan="3">저장된 강의가 없습니다.</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr class="tempRow" v-for="temp in tempLectures" v-bind:class="[summaryImport==temp.lec_idx? 'tempSelect':'']" @click="chooseRow(temp.lec_idx)">
                            <td><input type="radio"   v-bind:value="temp.lec_idx" v-model="summaryImport" ></td>
                            <td>{{temp.lec_title}}</td>
                            <td>
                                산업안전
                            </td>
                            <td>{{temp.lec_startDate}}</td>
                            <td>
                                <button type="button" class="ui basic red mini button" @click.prevent="removeTempLecture(temp.lec_idx)">삭제</button>
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>
        <div slot="footer">
            <div class="ui two bottom attached buttons">
                <div class="ui button" @click.prevent="modal.tempLecture=false">닫기</div>
                <div class="ui blue button" @click.prevent="chooseLecture">확인</div>
            </div>
        </div>
    </modal>



<!-- ======================== Modal ============================ -->







  </div>
</template>



<script>
import { Modal } from '../../components'

export default {
    name: 'NewSummary',


    // ====== 컴포넌트 ====== //
    components : {
        'modal' : Modal
    },


    // ====== Data ====== //
    data () {
        return {
            flag : false, //신규/수정 여부 확인
            lec_idx:'',
            tempSelect:-1, // 선택된 임시저장 강의
            modal:{
                tempLecture: false // 임시저장 모달
            },
            showModal: false,
            summaryImport:null, // 임시저장 선택
            closeMsg:'적용',
            summary: {
                lec_title: '',
                lec_content : '',
                lec_goal : '',
                lec_effect : '',
                lec_startDate : '2018-02-16',
                lec_endDate : '2018-03-22'
            }, // 강의개요
            tempSummary:{}, // 개요 임시저장
            tempLectures:[], // 임시저장 강의 목록
            errors: []
        }
    },//data




    // ====== Created ====== //
    created() {

        //  수정인지 신규인지 판단
        var f = this.$ro.history.current.query.flag
        console.log("f : ", f);
        if(f){// 수정일경우

            this.$set(this, 'summaryImport', f)
            this.$set(this, 'flag', true)
            this.chooseLecture() // 강의정보 불러오기

        }else{// 신규일경우

            const id = sessionStorage.getItem('lecture-idx')
            this.$set(this, 'lec_idx', id ? id : -1)

            // 임시저장 중인 강의가 있을 시 목록 선택화면 출력
            let lec = sessionStorage.getItem('lecture-summary');
            if(lec){
                this.summary = JSON.parse(lec);
            }

            // DB에 저장중인 임시저장강의
            this.tempLectureLoad()
        }//else



    },



    // ====== 메소드 ====== //
    methods:{

        // == 모달ON == //
        onModal(){
            this.mactive = "active"
        }, // onModal



        // == 임시저장강의 목록 == //
        tempLectureLoad() {

            this.$http.get('/api/lectures/temp')
            .then(resp=>{
                // console.log(resp.data);
                this.$set(this, 'tempLectures', resp.data.tempLectures)
            }).catch(err=>{
                alert('Error - ')
            })

        }, // tempLectureLoad






        // == 임시저장강의 선택 - 클릭영역 == //
        chooseRow(id){
            this.$set(this, 'summaryImport', id)
        },




        // == 임시저장강의 선택 == //
        chooseLecture()  {

            var id = this.summaryImport // 선택 아이디

            if (id==null) {
                alert('강의를 선택해 주세요')
                return
            }

            // 불러오기
            this.$http.get('/api/lectures/dt/'+id)
            .then(resp=>{
                console.log(resp.data);
                var tempLec = resp.data.lecture
                var tempKpi = resp.data.kpi
                var da = [ new Date(tempLec.lec_startDate) , new Date(tempLec.lec_endDate) ]

                // 시작일자 만들기
                tempLec.lec_startDate =
                da[0].getFullYear() + '-' +
                ( da[0].getMonth()+1 < 10 ? '0' : '' ) + (da[0].getMonth()+1) + '-' +
                ( da[0].getDate() < 10 ? '0' : '' ) + da[0].getDate()

                // 종료일자 만들기
                tempLec.lec_endDate =
                da[1].getFullYear() + '-' +
                ( da[1].getMonth()+1 < 10 ? '0' : '' ) + (da[1].getMonth()+1) + '-' +
                ( da[1].getDate() < 10 ? '0' : '' ) + da[1].getDate()

                // 메인모델로 푸시
                this.$set(this, 'summary', {
                    lec_title               : tempLec.lec_title,
                    lec_goal              : tempLec.lec_goal,
                    lec_content        : tempLec.lec_content,
                    lec_effect           : tempLec.lec_effect,
                    lec_startDate     : tempLec.lec_startDate,
                    lec_endDate      : tempLec.lec_endDate
                })

                this.$set(this, 'lec_idx', id)
                sessionStorage.setItem('lecture-idx', id)

                if(tempLec.sessions){
                    sessionStorage.setItem('lecture-term', JSON.stringify({ sessionDetail:tempLec.sessions }))
                    sessionStorage.setItem('lecture-sessionCount', tempLec.sessions.length)
                }
                if(tempLec.timetables){
                    sessionStorage.setItem('lecture-timetables', JSON.stringify(tempLec.timetables))
                }
                if(tempKpi){
                    sessionStorage.setItem('lecture-kpi', JSON.stringify(tempKpi))
                }

            })
            .catch(err=>{
                console.log(err);
                alert('Error')
            })
            this.modal.tempLecture=false

        }, // chooseLecture








        // == 임시저장강의 삭제 == //
        removeTempLecture(id){
            if( confirm('삭제한 강의는 복구가 불가능합니다. 해당 강의를 삭제하시겠습니까?') ){
                var rid = this.tempLectures.findIndex((t)=>{
                    return t.lec_idx == id
                })

                this.$http.delete('/api/lectures/'+id)
                .then(resp=>{
                    // 디비 삭제 후 배열에서 삭제
                    if(this.tempLectures.length>0)
                        this.tempLectures.splice(rid, 1)
                    else
                        this.tempLectures.pop()
                })
                .catch(err=>{
                    alert('Error ')
                })
            }// if
        },// removeTempLecture()












        // == 저장 == //
        save() {
            // TEST
            // console.log("this.lec_idx : ", this.lec_idx);
            // console.log(this.summary);
            // return

            if (this.lec_idx < 0) {
                // 서버로 저장 - 신규
                this.$http.post('/api/lectures/create/summary', this.summary)
                .then(resp=>{

                    this.$set(this, 'lec_idx', resp.data.lec_idx)
                    sessionStorage.setItem('lecture-idx', resp.data.lec_idx)

                    // 확인
                    sessionStorage.setItem('lecture-summary', JSON.stringify(this.summary));
                    alert('저장되었습니다.')
                })
                .catch(err=>{
                    console.log(err)
                    alert('Error - insert')
                    return
                })

            }else{
                // 서버로 저장 - 업데이트
                this.$set(this.summary, 'lec_idx', this.lec_idx) // 저장된 아이디
                this.$http.put('/api/lectures/create/summary', this.summary)
                .then(resp=>{
                    // 확인
                    sessionStorage.setItem('lecture-summary', JSON.stringify(this.summary));
                    sessionStorage.setItem('lecture-idx', this.lec_idx)
                    alert('저장되었습니다.')
                })
                .catch(err=>{
                    console.log(err)
                    alert('Error - update')
                    return
                })

            }// else


        }, // save


        // == 페이지 이동 == //
        goTo(){
            if (!sessionStorage.getItem('lecture-summary')) {
                alert('저장 후 이동 가능합니다.')
                return
            }
            this.$ro.push({ path: '/lectures/new/aplterm' })
        }// goTo

    } // methods
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

        a{
            cursor: pointer;
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


        .tempRow{ cursor: pointer; }
        .tempRow:hover{ background: #f9f9f9 !important; }

        .tempSelect{
            background: #f9f9f9 !important;
        }



</style>
