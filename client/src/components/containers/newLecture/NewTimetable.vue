<template>
    <div class="">

        <!-- ======================== 페이지 타이릍 ============================ -->
        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>
                상세시간표
                <button class="ui icon button tiny " style="margin: 4px 0 0 5px; padding:7px; font-size:.5em; position:absolute;">
                    <i class="help circle icon"></i> 가이드
                </button>
            </h2>
        </div>
        <!-- ======================== 페이지 타이릍 ============================ -->




<br>



        <!-- ======================== 회차정보 ============================ -->
        <div class="cardbox" style="margin:0; padding:0; ">
            <div class="ui top attached menu big lectureMenu" >
                  <a class=" item"
                          v-for="(sc, i) in timetables"
                          :key="i"
                          v-bind:class="[thisTab==i?'active':'']"
                          v-on:click.prevent="selectTab(i)">
                     {{ i+1 }}회차
                  </a>
                  <!-- <div class=" menu">
                        <a class="item "  style="color:green;">
                          <i class="add icon"></i> 차시등록
                        </a>
                  </div> -->
                </div>
        </div>



        <div class="cardbox" style="margin:0; padding:25px; ">
                <!-- <div class="ui bottom attached segment">
                  <p></p>
                </div> -->


            <!-- <h3>회차 정보</h3> -->

                <div
                    class="ui bottom tab"
                    v-for="(sc, i) in timetables"
                    :key="i"
                    v-bind:class="[thisTab==i?'active viewAnimate':'']" >
                    <table class="ui celled table form timetable" >
                        <colgroup>
                            <col width="60%">
                            <col width="20%">
                            <col width="20%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th><b>{{ thisTab+1 }}</b>회차 강의주제</th>
                                <th>시작시간</th>
                                <th>종료시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <!-- <input type="text" placeholder="해당 회차의 제목을 입력해 주세요" v-model="timetables[thisTab].timetableTitle"> -->
                                    <input type="text" placeholder="해당 회차의 제목을 입력해 주세요" v-model="timetables[thisTab].ls_title">
                                </td>
                                <td>
                                    <time-picker flag="sessionCountStart" v-bind:defaultTime="sc.ls_startTime" />
                                    <!-- {{sc.ls_startTime}} -->
                                </td>
                                <td>
                                    <time-picker flag="sessionCountEnd" v-bind:defaultTime="sc.ls_endTime" />
                                    <!-- {{sc.ls_endTime}} -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        <!-- ======================== 회차정보 ============================ -->




        <br>
        <!-- <br> -->







        <!-- ======================== 시간표 활성화 플래그 ============================ -->

        <!-- <div class="">
            <div class="ui ">
                <div class="field" style="">
                  <div class="ui toggle checkbox " v-bind:class="[ timetableFlag ? 'checked' : '' ]" @click="timetableFlag = !timetableFlag">
                    <input type="checkbox" name="gift" tabindex="0" class="hidden" v-model="timetableFlag" style="background:red;">
                    <label>상세시간표 사용하기</label>
                  </div>
                </div>
              </div>
        </div> -->
        <!-- ======================== 시간표 플래그 ============================ -->














        <!-- ======================== 상세시간표 ============================ -->
        <div class="cardbox viewAnimate" style="margin:10px 0; padding:25px; ">

            <div class="">
                <div class="ui ">
                    <div class="field" style="">
                      <div class="ui toggle checkbox " v-bind:class="[ timetableFlag ? 'checked' : '' ]" @click="timetableFlag = !timetableFlag">
                        <input type="checkbox" name="gift" tabindex="0" class="hidden" v-model="timetableFlag" style="background:red;">
                        <label>상세시간표 사용하기</label>
                      </div>
                    </div>
                  </div>
            </div>
            <hr style="opacity:.4; margin-top:10px; margin-bottom:20px;">


            <div  v-if="!timetableFlag">
                <h3  style="opacity:0.55;">상세시간표를 비활성화 했습니다.</h3>
            </div>




            <!-- timeflag -->
            <div v-if="timetableFlag">
            <h3>상세시간표</h3>
            <div v-if="viewFlag"><!-- viewFlag -->

                <div v-if=" timetables[thisTab].timetables=='' ">
                    <div class="ui warning message">
                          <div class="header">
                            아직 등록된 시간표가 없습니다.
                          </div>
                        </div>
                    <br>
                </div>

                <!-- 시간표 템플릿 -->
                <timeline class="session viewAnimate" v-for="(timetable, timetableIndex) in timetables[thisTab].timetables" :key="timetableIndex">
                <table class="ui celled table form timetable ">
                    <colgroup>
                        <col width="40%">
                        <col width="15%">
                        <col width="15%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th style="border-left:1px solid #f2f2f2;">주제</th>
                            <th>시작시간</th>
                            <th>종료시간</th>
                            <th>시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border-left:1px solid #f2f2f2;">
                                <input type="text" placeholder="제목을 입력해 주세요" style="width:100%;" v-model="timetable.lt_title">
                            </td>
                            <td>
                                {{ timetable.lt_startTime }}
                            </td>
                            <td>
                                {{ timetable.lt_endTime }}
                            </td>
                            <!-- <td>{{ timeCount(timetable.start ,  timetable.end) }}</td> -->
                            <td>{{ timeCount(timetable.lt_startTime ,  timetable.lt_endTime) }}</td>
                        </tr>
                        <tr>
                            <td colspan="4" style="border-left:1px solid #f2f2f2;">
                                <h4>강의모듈</h4>
                                <!-- 모듈없을때 -->
                                <p v-if="timetable.modules==undefined">생성된 강의모듈이 없습니다.</p>
                                <!-- 모듈리스트 -->
                                <div v-else class="ui icon small message" v-for="(module, moduleIndex) in timetable.modules">
                                    <!-- 플래그 -->
                                    <div class="ui right pointing  basic label large" style="margin-right:20px;" v-bind:class="[(module.lm_type=='lecture' ? 'blue' :  (module.lm_type=='mission'?'green':'orange')) ]">
                                        {{ (module.lm_type=='lecture' ? '강의' : (module.lm_type=='mission' ? '미션' : '토론')) }}
                                    </div>
                                    <div class="content">
                                        <div class="header">
                                            {{ module.lm_title }}  &nbsp;&nbsp;&nbsp;
                                            <a v-on:click.prevent="modal.editModule=true, tempModule = timetables[thisTab].timetables[timetableIndex].modules[moduleIndex]">[수정]</a>&nbsp;
                                            <a v-on:click.prevent="removeModule(timetableIndex,moduleIndex)"> [삭제] </a>
                                        </div>
                                        <p v-if="module.lm_text">
                                            {{module.lm_text}} <br>
                                            {{ module.lm_startTime }} ~ {{ module.lm_endTime }}
                                        </p>
                                    </div>
                                </div>
                                <button type="button" class="ui primary button addModule" @click.prevent="modal.addModule=true, thisSession=timetableIndex">모듈추가</button>
                                <button type="button" class="ui red button addModule right floated column" v-on:click.prevent="removeSession(timetableIndex)" v-if="timetableIndex==timetables[thisTab].timetables.length-1">세션삭제</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <br>
                </timeline>



                <!-- 시간표 템플릿 입력 폼 -->
                    <div>
                        <table class="ui celled table form timetable" style="border:1px solid #3781bf">
                            <colgroup>
                                <col width="50%">
                                <col width="16%">
                                <col width="16%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th style="border-left:1px solid #f2f2f2;"><label for="">주제</label></th>
                                    <th><label for="">시작시간</label></th>
                                    <th><label for="">종료시간</label></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td style="border-left:1px solid #f2f2f2;">
                                        <input type="text" placeholder="제목을 입력해 주세요" style="width:100%;" v-model="tempTable.lt_title">
                                    </td>
                                    <td>
                                        <time-picker
                                            flag="tempStart"
                                            v-bind:defaultTime="tempTable.lt_startTime" />
                                    </td>
                                    <td>
                                        <time-picker
                                            flag="tempEnd"
                                            v-bind:defaultTime="tempTable.lt_endTime" />
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="4" style="border:none; padding:0;">
                                        <button type="button" class="ui primary medium button" style="width:100%;  border-radius:0 0 1px 1px;" @click.prevent="addSession">세션등록</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- 시간표 템플릿 입력 폼 -->


            </div>
            <!-- viewFlag -->

            <!-- 차시가 없을때 -->
                <div v-else>
                    <hr>
                    <h4>회차정보 없음</h4>
                </div>


            </div><!-- timeflag -->
        </div>
        <!-- ======================== 상세시간표 ============================ -->








        <!-- ======================== 하단 ============================ -->
        <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
            <button class="ui button" @click.prevent="save">저장</button>
            <button class="ui primary button" @click="goTo">다음페이지</button>
        </div>
        <!-- ======================== 하단 ============================ -->












        <!-- ======================== 모달영역 ============================ -->


        <modal v-if="modal.addModule" @close="modal.addModule = false" w="w-50">
            <h3 slot="header">신규 모듈등록</h3>
            <div slot="body" class="content">

                <div class="ui form">
                    <div class="inline fields">
                        <label>강의유형</label>

                        <div class="field">
                            <div class="ui radio checkbox">
                                <input id="rr1" type="radio" v-model="tempModule.lm_type" value="debate" checked="checked">
                                <label for="rr1">토론</label>
                            </div>
                        </div>

                        <div class="field">
                            <div class="ui radio checkbox">
                                <input id="rr2" type="radio" v-model="tempModule.lm_type" value="mission">
                                <label for="rr2">미션</label>
                            </div>
                        </div>

                        <div class="field">
                            <div class="ui radio checkbox">
                                <input id="rr3" type="radio" v-model="tempModule.lm_type" value="lecture">
                                <label for="rr3">강의</label>
                            </div>
                        </div>

                    </div>
                </div>
                <br>

                <div class="ui form">

                    <div class="fields" >
                        <div class="eight wide field" >
                            <label for="" style="font-weight:500;">시작시간</label>
                            <!--
                            timetables[thisTab].timetables[thisSession].start : 해당 시간표의 시작시간
                            timetables[thisTab].timetables[thisSession].end : 해당 시간표의 종료시간
                            -->
                            <time-picker
                            flag="moduleStart"
                            v-bind:defaultTime="tempModule.lm_startTime"
                            v-bind:starth="timetables[thisTab].timetables[thisSession].lt_startTime"
                            v-bind:endh="timetables[thisTab].timetables[thisSession].lt_endTime" />
                        </div>
                        <div class="eight wide field" >
                            <label for="" style="font-weight:500;">종료시간 </label>
                            <time-picker
                            flag="moduleEnd"
                            v-bind:defaultTime="tempModule.lm_endTime"
                            v-bind:starth="timetables[thisTab].timetables[thisSession].lt_startTime"
                            v-bind:endh="timetables[thisTab].timetables[thisSession].lt_endTime" />
                        </div>
                    </div>

                    <label for="">제목</label>
                    <input type="text" placeholder="제목을 입력해 주세요" style="width:100%;" v-model="tempModule.lm_title">
                    <br>
                    <br>
                    <label for="">내용</label>
                    <textarea  rows="6" placeholder="내용을 입력해 주세요" v-model="tempModule.lm_text"></textarea>
                </div>
            </div>

            <div slot="footer" class="ui two bottom attached buttons">
                <div class="ui button" @click="modal.addModule=false">닫기</div>
                <div class="ui button blue" @click="addModule">등록</div>
            </div>
        </modal>
        <!-- 모듈추가 모달 -->





        <!-- 모듈수정 모달 -->
        <modal v-if="modal.editModule" @close="modal.editModule = false" w="w-50">
            <h3 slot="header">모듈 수정</h3>
            <div slot="body" class="content">

                <div class="ui form">
                    <div class="inline fields">
                        <label>강의유형</label>

                        <div class="field">
                            <div class="ui radio checkbox">
                                <input id="rr1" type="radio" v-model="tempModule.type" value="debate" checked="checked">
                                <label for="rr1">토론</label>
                            </div>
                        </div>

                        <div class="field">
                          <div class="ui radio checkbox">
                            <input id="rr2" type="radio" v-model="tempModule.type" value="mission">
                            <label for="rr2">미션</label>
                          </div>
                        </div>

                        <div class="field">
                          <div class="ui radio checkbox">
                            <input id="rr3" type="radio" v-model="tempModule.type" value="lecture">
                            <label for="rr3">강의</label>
                          </div>
                        </div>

                    </div>
                </div>
                <br>

                <div class="ui form">


                    <label for="">제목</label>
                    <input type="text" placeholder="제목을 입력해 주세요" style="width:100%;" v-model="tempModule.title">

                    <br>
                    <br>

                    <label for="">내용</label>
                    <textarea  rows="6" placeholder="내용을 입력해 주세요" v-model="tempModule.content"></textarea>
                </div>
            </div>

            <div slot="footer" class="ui two bottom attached buttons">
                <div class="ui button blue" @click="modal.editModule=false">확인</div>
            </div>
        </modal>
        <!-- 모듈수정 모달 -->

        <!-- ======================== 모달영역 ============================ -->

    </div>
</template>











<!-- Script -->
<script>
import { Modal, Timepicker, Timeline } from '../../components'
const page = 'NewTimetable';

export default {
    name: page,
    components : {
        'modal' : Modal,
        'time-picker' : Timepicker,
        'timeline' : Timeline
    },



    // ============ data ============ //
    data () {
        return {
            lec_idx:0,                           // 강의아이디
            showModal: false,            // 모달테스트
            modal: {                             // 모달객체
                addModule:false,
                editModule:false
            },
            timetableFlag: true,           // 시간표 활성화 플래그
            thisTab:0,                           // 현재 배열 번지
            thisSession:0,                     // 현재 배열 번지
            viewFlag:false,                   // 초기 뷰설정 플래그
            sessionCount:0,
            selector: 0,
            sessionDetail: [],                // APL기간 저장
            timetables:[],                     // 메인 모델
            tempTable:{                       // 추가 세션
                lt_startTime : '00:00:00',
                lt_endTime  : '00:00:00',
                modules : []
            },
            tempModule:{                   // 추가 모듈
                lm_type : 'lecture',
                lm_title : '',
                lm_text : '',
                lm_startTime : '00:00:00',
                lm_endTime : '00:00:00'
            },
            timepicker:{                     // 타임픽커
                hh : [],
                mm : []
            },
            sessionCountStart:'',       // 강의시작시간
            sessionCountEnd:''         // 강의종료시간

        }//return
    },  // ============ data ============ //



    // ============ created ============ //
    created() {
        // 강의아이디
        const id = sessionStorage.getItem('lecture-idx')
        this.$set(this, 'lec_idx', id ? id : -1)

        // 세션스토리지의  APL Term 데이터 파싱
        var term = JSON.parse(sessionStorage.getItem('lecture-term'));
        var timetable = JSON.parse(sessionStorage.getItem('lecture-timetables'));

        // APL Term 존재 여부 확인
        if (timetable || term) {
            this.$set(this, 'sessionDetail', term)
            this.$set(this, 'timetables', term.sessionDetail)
            console.log(this.timetables);
            if (timetable){
                this.timetables = timetable;
            }
        }else{
            // if ( !confirm('APL기간 설정없이 진행하시겠습니까?') ) {
            //     this.$ro.push({path : '/lectures/new/aplterm'})
            //     return
            // }
        }// if




        // 시간선택시 시작시간/종료시간 구분 후 입력 - 배열로 변환해서 저장
        this.$EventBus.$on('tempStart', (v)=>{
            this.$set(this.tempTable, 'lt_startTime', v)
        })
        // 회차 시작시간
        this.$EventBus.$on('tempEnd', (v)=>{
            this.$set(this.tempTable, 'lt_endTime', v)
        })



        // 회차 시작시간
        this.$EventBus.$on('sessionCountStart', (v)=>{
            // console.log("vv: ", v);
            var c = this.timeRangeCheck(v,  this.sessionCountEnd,  'start')
            this.$set(this, 'sessionCountStart', v)
            this.$set(this.timetables[this.thisTab], 'ls_startTime', v)
        })

        // 회차 종료시간
        this.$EventBus.$on('sessionCountEnd', (v)=>{
            var c = this.timeRangeCheck(v,  this.sessionCountStart,  'end')
            this.$set(this, 'sessionCountEnd', v)
            this.$set(this.timetables[this.thisTab], 'ls_endTime', v)
        })


        // 모듈 타임픽커
        this.$EventBus.$on('moduleStart', (v)=>{
            console.log('moduleStart::',v);
            this.$set(this.tempModule, 'lm_startTime', v)
        })
        this.$EventBus.$on('moduleEnd', (v)=>{
            this.$set(this.tempModule, 'lm_endTime', v)
        })



    },  // ============ created ============ //






    // ============ mounted ============ //
    mounted(){
        // 시간표 플래그 ON
        this.viewFlag=true;
    },








    // ============ 메소드 ============ //
    methods: {

        // === 입력시간 확인 === //
        timeRangeCheck(compare , target , direction){
            /*
            compare     : 입력값
            target         : 비교대상
            direction    : up/down여부
            ( start: 입력값이 비교대상보다 높을경우 false / end: 입력값이 비교대상보다 낮을경우 false )
            */

            if (target=='' || target==undefined || target==null)
                return 2

            compare = compare.split(':')
            target = target.split(':')

            if (direction=='start') {
                if (compare[0] > target[0]) {
                    return 0
                }
            }else if(direction == 'end'){
                if (compare[0] < target[0]) {
                    return 0
                }
            }// elseif

            return 1

        }, // timeRangeCheck




        // == 시간비교 함수 == //
        timeCheck( nullValue, targetValue , compareValue , compareStandard ) {
            /*
            nullValue : 삽입변수 값 - 빈값확인
            targetValue : 비교할 값
            compareValue : 타임픽커 값
            compareStandard : 비교기준
            */

            //빈값여부 체크 => 빈값이 아닐경우만 비교
            if (nullValue != undefined) {
                if (compareStandard == 'end') { // 종료시간 체크
                    // 시간비교
                    if (compareValue < targetValue) {
                        alert('시작시간보다 낮게 설정할 수 없습니다')
                        return false
                    }
                    return true
                }else if(compareStandard == 'start'){ // 시작시간 체크
                    // 시간비교
                    if (compareValue > targetValue) {
                        // alert('종료시간보다 높게 설정할 수 없습니다')
                        return false
                    }
                    return true
                }// elseif
                return false

            }// if
        }, // timeCheck









        // == 합계시간 계산함수 == //
        timeCount(s, e){
            /*
            인자값
            */
            var sh = s.split(':')
            var eh = e.split(':')
            var start = (Number(sh[0])*60)+Number(sh[1])
            var end  = (Number(eh[0])*60)+Number(eh[1])
            var rs  = end - start
            var rsTime  = parseInt(rs/60);
            var rsMn  = (rs) - (rsTime*60)

            return  rsTime+"시간"+(rsMn>0 ? rsMn+"분" : '')
        },



        // == 탭메뉴선택 == //
        selectTab(s) {
            this.thisTab=s;
        },



        // == 세션등록 - (시간표) == //
        addSession(){

            // console.log("this.timetables[this.thisTab].timetables.length : ");
            // console.log(this.timetables[this.thisTab].timetables == undefined);

            // 선택된 차시의 시간
            var start =
            typeof(this.timetables[this.thisTab].ls_startTime) == 'string' ?
            this.timetables[this.thisTab].ls_startTime.split(':') :
            this.timetables[this.thisTab].ls_startTime // 비교데이터 - 시작시간

            var end =
            typeof(this.timetables[this.thisTab].ls_endTime) == 'string' ?
            this.timetables[this.thisTab].ls_endTime.split(':') :
            this.timetables[this.thisTab].ls_endTime // 비교데이터 - 종료시간

            var temp = this.tempTable // 입력데이터
            var prevTimetable = this.timetables[this.thisTab].timetables; // 해당차시의 시간표 목록
            var ptLength =(this.timetables[this.thisTab].timetables == undefined || this.timetables[this.thisTab].timetables =='') ? 0 : this.timetables[this.thisTab].timetables.length ; // 해당 차시의 시간표 개수

            // console.log("!!!!!!!! : ", typeof(temp.lt_startTime));
            // console.log("!!!!!!!! : ", temp.lt_startTime);

            // 비교하기 위해서 배열로 변환
            var tStart = typeof(temp.lt_startTime) == 'string' ? temp.lt_startTime.split(':') : temp.lt_startTime
            var tEnd = typeof(temp.lt_endTime) == 'string' ? temp.lt_endTime.split(':') : temp.lt_endTime


            // console.log("start : ", tStart[0]);
            // console.log("end : ", end);
            // console.log("temp.start : ", temp.lt_startTime);
            // console.log("temp.end : ", temp.lt_endTime);


            if ( temp.lt_title=='' || temp.lt_title==undefined ) { // 제목 입력확인
                alert('제목를 입력해 주세요')
                return
            } // if



            if ( Number(tStart[0])=='' || Number(tEnd[0])=='' ) { // 시간 입력확인
                alert('시간을 입력해 주세요')
                return
            } // if

            // 차시시간 > 입력시간 비교
            if ( Number(tStart[0]) < Number(start[0])  ||  Number(tStart[0])  > Number(end[0]) ||
                 Number(tEnd[0])  < Number(start[0])  ||  Number(tEnd[0])   > Number(end[0]) ) {
                alert('해당 차시의 시간범위를 초과할 수 없습니다')
                // console.log(temp);
                return

            }// if

            // 직전 시간표와 겹치는지 확인
            if ( ptLength > 0 ) {
                var ptEnd = prevTimetable[ptLength-1].lt_endTime.split(":") // 직전 세션의 시간
                if ( Number(tStart[0]) < Number(ptEnd[0]) ) {
                    alert('직전 시간표와 시간이 겹치네요. 다시 한번 확인해 주세요')
                    return
                }
            }// if




            // 시작시간 < 종료시간 비교
            if (Number(tStart[0]) > Number(tEnd[0])) {
                alert('종료시간은 시작시간보다 낮게 설정할 수 없습니다')
                return
            }else if( ( Number(tStart[0]) == Number(tEnd[0]) ) && ( Number(tStart[1]) > Number(tEnd[1]) ) ){
                alert('종료시간은 시작시간보다 낮게 설정할 수 없습니다')
                return
            }

            if(this.timetables[this.thisTab].timetables==undefined){
                this.timetables[this.thisTab].timetables = new Array()
            }
            this.timetables[this.thisTab].timetables.push(temp);

            // 시간초기화
            this.$set(this, 'tempTable', {
                // lt_startTime : '00:00:00',
                // lt_endTime : '00:00:00',
                lt_startTime : '',
                lt_endTime : '',
                modules : []
            })
            console.log(this.tempTable);
            // console.log("this.tempTable.start  :  ", this.tempTable);

        }, // addSession






        // == 모듈추가 == //
        addModule(){
            // 유효성
            if (this.tempModule.lm_title =='' || this.tempModule.lm_title==undefined) {
                alert('모듈제목을 입력해 주세요');
                return
            }

            // 배열이 없을경우 초기화
            if(this.timetables[this.thisTab].timetables[this.thisSession].modules===undefined){
                this.timetables[this.thisTab].timetables[this.thisSession].modules=new Array();
            }

            // 데이터 삽입
            this.timetables[this.thisTab].timetables[this.thisSession].modules.push(this.tempModule)

            // 초기화
            this.tempModule={
                lm_type : 'lecture',
                lm_title : '',
                lm_text : '',
                lm_startTime : '',
                lm_endTime : ''
            }

            // 모달OFF
            this.modal.addModule = false

        }, // addModule()







        // == 모듈삭제 == //
        removeModule(timetableIndex, moduleIndex) {

            var leng = this.timetables[this.thisTab].timetables[timetableIndex].modules.length // 배열길이
            if ( confirm('해당 모듈을 삭제하시겠습니까?') ){
                if (leng<=1) {
                    this.timetables[this.thisTab].timetables[timetableIndex].modules.pop()
                    return
                }
                this.timetables[this.thisTab].timetables[timetableIndex].modules.splice(moduleIndex,1)
            }// if

        }, // removeModule




        // == 세션삭제 == //
        removeSession(timetableIndex){
            if ( confirm('삭제한 세션은 다시 복구할 수 없습니다. 삭제하시겠습니까?') ){
                this.timetables[this.thisTab].timetables.splice(timetableIndex,1)
            }
        }, // removeSession




        // == 저장 == //
        save(){
            // console.log(this.timetables);
            // return

            if(this.timetableFlag){
                for(var ii  in  this.timetables){
                    if( this.timetables[ii].timetables== undefined || this.timetables[ii].timetables.length==0  ){
                        alert("상세시간표를 입력해 주세요")
                        return
                    }// if
                }// for
            }// if

            // 서버로
            this.$http.post('/api/lectures/create/timetable' , {
                // sessionDetail : this.timetables,
                sessionDetail : this.timetables,
                lec_idx : this.lec_idx,
                timetableFlag : this.timetableFlag
            }).then(resp=>{
                // console.log(resp);
            }).catch(err=>{
                console.log(err);
                alert('Error - ')
            })


            sessionStorage.setItem('lecture-timetables', JSON.stringify(this.timetables));
            sessionStorage.setItem('lecture-term', JSON.stringify(this.sessionDetail));
            alert('저장되었습니다.')

        }, // save



        goTo(){
            this.$ro.push({ path: '/lectures/new/students' })
        }



    }// method()
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
        cursor: pointer;
    }
    a:hover{
        text-decoration: underline;
    }


    label{
        cursor: pointer!important;
    }


    .timetable-lectureModules{
        padding:0;
    }
    .timetable-lectureModules li{
        list-style: none;
        margin:7px 0;
        background:#f4f4f4;
        padding:8.5px;
    }

    .session{
        margin-bottom: 15px;
    }



    .lectureMenu {
        border-left:none !important;
        border-right:none !important;
        border-top:none !important;
        border-radius: 0 !important;
    }
    .lectureMenu .active{
        color: #fff !important;
        background: #3b485f !important;
        border-radius: 0 !important;
    }


    /*타임피커*/
    .timepicker{
        /*width: 40% !important;*/
    }


    .checkbox label::before,
    .checkbox label::after{
        border: 1px solid #c8c8c8 !important;
    }



    /*.session,*/
    .timetable-lectureModules li,
    .viewAnimate {
          animation:fade-in-fwd .6s cubic-bezier(.39,.575,.565,1.000) both
      }
      @keyframes fade-in-fwd{0%{transform:translateZ(-80px);opacity:0}100%{transform:translateZ(0);opacity:1}}




</style>
