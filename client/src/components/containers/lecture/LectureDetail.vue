<template>
  <div class="hash">








    <div class="ui grid">
        <div class="eleven wide column">
            <!-- 타이틀 -->
            <h2 class="ui header" @click.prevent="modal.aadd=true">
                <div class="ui right pointing  basic label" style="margin-left:0;"
                v-bind:class="(lecture.lec_flag==='진행중'?'green': (lecture.lec_flag=='승인대기')? 'grey' : 'red' )">
                {{ lecture.lec_flag }}</div>
                {{ lecture.lec_title }}
            </h2>
        </div>
        <div class="five wide column" style="text-align:right;">
            <div class="ui basic buttons small">
              <div class="ui button basic green " v-if="lecture.lec_flag=='임시저장'">
                  <i class="icon check circle"></i>승인요청
              </div>
              <router-link tag="div" class="ui button" :to="{ path:'/lectures/new/summary', query:{flag:lec_idx} }">
                  <i class="icon edit"></i>수정
                  <!-- , query: {flag:'edit'} -->
              </router-link>
              <div class="ui button" @click.prevent="removeLecture">
                  <i class="icon minus circle"></i>삭제
              </div>
              <!-- <div class="ui button">Three</div> -->
            </div>
        </div>
    </div>



    <!-- 강의정보 -->
    <table class="ui celled table lectureInfo">
        <colgroup>
            <col width="10%;">
            <col width="45%;">

            <col width="10%;">
            <col width="35%;">
        </colgroup>
        <tbody>
            <tr>
                <td>강의기간</td>
                <td>{{ lecture.lec_startDate }} ~ {{ lecture.lec_endDate }}</td>
                <td>시간</td>
                <td>매일 13:00~17:00</td>
            </tr>
            <tr>
                <td>장소</td>
                <td>부산광역시 남구 수영대로 99-1 부산본사</td>
                <td>강의시간</td>
                <td>4일 25시간</td>
            </tr>
            <tr>
                <td>참여기업</td>
                <td>
                    <span v-for="(com,i) in companies">
                        <span v-if="(i>0)"> , </span>
                        <a @click.prevent="$EventBus.$emit('onModal', 'companyDetail', true, {a:1})">{{ com.com_name }}</a>
                    </span>
                </td>
                <td>인원</td>
                <td>{{ students.length }}명</td>
            </tr>
            <tr>
                <td>KPI</td>
                <!-- <td colspan="3" class="ui tag labels"> -->
                <td colspan="3">
                        <div class="ui basic label" v-for="k  in  kpi">{{ k.cc2_name }}</div>
                </td>
            </tr>
        </tbody>
    </table>







    <!-- ======================== 탭메뉴 ============================ -->
    <!-- <div class="ui top attached tabular  menu"> -->
    <!-- <div class="ui eight item attached tabular menu"> -->
    <div class="ui eight item attached   menu lectureMenu" style=" top:0;">
        <a class="item" v-bind:class="[tab==0?'active':'']" v-on:click.prevent="selectTab(0)">강의개요</a>
        <a class="item" v-bind:class="[tab==1?'active':'']" v-on:click.prevent="selectTab(1)">기간/일정</a>
        <a class="item" v-bind:class="[tab==2?'active':'']" v-on:click.prevent="selectTab(2)">팀/수강생</a>
        <a class="item" v-bind:class="[tab==3?'active':'']" v-on:click.prevent="selectTab(3)">교육진행</a>
        <a class="item" v-bind:class="[tab==4?'active':'']" v-on:click.prevent="selectTab(4)">참여점수</a>
        <a class="item" v-bind:class="[tab==5?'active':'']" v-on:click.prevent="selectTab(5)">액션플랜</a>
        <a class="item" v-bind:class="[tab==6?'active':'']" v-on:click.prevent="selectTab(6)">리포트</a>
        <a class="item" v-bind:class="[tab==7?'active':'']" v-on:click.prevent="selectTab(7)">설문결과</a>
    </div>
    <!-- ======================== 탭메뉴 ============================ -->





    <!-- 컨텐츠 -->




    <!-- ======================== 강의개요 ============================ -->
    <div class="ui bottom attached tab segment" v-bind:class="[tab==0?'active viewAnimate':'']" >


        <h3><i class="align left icon"></i> 강의목표</h3>
        <p>{{ lecture.lec_goal }}</p>
        <br>

        <h3><i class="align left icon"></i> 내용</h3>
        <p>{{ lecture.lec_content }}</p>
        <br>

        <h3><i class="align left icon"></i> 기대효과</h3>
        <p>{{ lecture.lec_effect }}</p>
        <br>

        <h3><i class="align left icon"></i> 강의대상</h3>
        <p>{{ lecture.lec_target | capitalize }} ppp</p>
        <br>
    </div>
    <!-- ======================== 강의개요 ============================ -->







    <!-- ======================== 세션/시간표 ============================ -->
    <div class="ui bottom attached tab segment" v-bind:class="[tab==1?'active viewAnimate':'']" >
        <h3>
            <i class="align left icon"></i> 강의정보
        </h3>
        <table class="ui table celled">
            <colgroup>
                <col width="13%">
                <col >
                <col width="13%">
            </colgroup>
            <tr>
                <th>회차정보</th>
                <td>총 {{ lecture.sessions.length }}회</td>
            </tr>
            <tr>
                <th class="borderTop">액션러닝 시작일</th>
                <td>총 {{ lecture.sessions.length }}회</td>
                <th class="borderTop">액션러닝 종료일</th>
                <td>총 {{ lecture.sessions.length }}회</td>
            </tr>
            <tr>
                <th class="borderTop">교육일자</th>
                <td colspan="3">
                    <p v-for="(sess, ii) in lecture.sessions">{{ii+1}}회 - {{sess.ls_startDate}} (강의장소: {{sess.ls_location}})</p>
                </td>
            </tr>
        </table>

        <br>



        <h3>
            <i class="align left icon"></i> 상세일정
        </h3>

        <!-- 탭메뉴 -->
        <div class="ui top secondary pointing menu">
            <a class="item" v-bind:class="[sessionTab < 0?'active':'']" @click.prevent="sessionTabChange(-1)">전체</a>
            <a class="item" v-for="(sess, jj) in lecture.sessions" v-bind:class="[sessionTab==jj?'active':'']" @click.prevent="sessionTabChange(jj)">{{ jj+1 }}회</a>
        </div>
        <br>


        <!-- 상세시간표 -->
        <div class="ui bottom tab active">

            <!-- 타임라인 컨포넌트 -->
            <timeline class="container33" v-for="(sess, ii)  in  lecture.sessions"  :key="sess.ls_idx" v-if="sessionTab < 0 || sessionTab==ii">

                    <!-- 세션헤더 -->
                    <h3 class="ui header">
                        {{ ii+1 }}회차 - {{ sess.ls_title }}
                        <div class="sub header">
                            <b>강의일정 :</b> {{ sess.ls_startDate }}
                            &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
                            <b>시간 :</b> {{ sess.startTime }} ~ {{ sess.endTime }} (00시간)</div>
                    </h3>

                    <!-- 세션내용(상세시간표) -->
                    <table class="ui table celled structured">
                        <colgroup>
                            <col width="12%">
                            <col width="40%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>시간</th>
                                <th>주제</th>
                                <th>강의내용</th>
                            </tr>
                        </thead>
                        <!-- 상세시간표가 있을 경우 -->
                        <tbody v-if="sess.timetables.length > 0">
                            <tr v-for="(timetable, tid)  in  sess.timetables">
                                <td>{{ timetable.lt_startTime ? timetable.lt_startTime : '00:00' }} ~ {{ timetable.lt_endTime ? timetable.lt_endTime : '00:00' }}</td>
                                <td>{{ timetable.lt_title }}</td>
                                <!-- 모듈수만큼 rowspan -->
                                <td>


                                    <!-- 모듈 -->
                                    <div class="ui relaxed divided list">
                                        <div class="item" v-for="(md, mid)  in  timetable.modules">
                                        <!-- <i class="large github middle aligned icon"></i> -->
                                            <div class="ui label small middle aligned horizontal" style="float:left; margin-top:5px; padding:5px 8px;" v-bind:class="[ md.lm_type=='강의' ? 'blue' :  md.lm_type=='미션' ? 'green' : 'orange' ]">
                                                {{ md.lm_type }}
                                            </div>
                                            <div class="content horizontal" style="float:left; margin-left:7px;">
                                                <span class="header">
                                                    <small>{{ md.lm_startTime }} ~ {{ md.lm_endTime }}</small> <br>
                                                     {{md.lm_title}}
                                                </span>
                                                <div class="description">{{ md.lm_text }}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- <div class="ui middle aligned divided list" >
                                        <div class="item ui grid" v-for="(md, mid)  in  timetable.modules">
                                            <div class="content  wide column moduleLabel" >
                                                <div class="ui right pointing basic label medium" v-bind:class="[md.lm_type=='강의'?'blue': md.lm_type=='미션'?'green':'orange']">{{ md.lm_type }} </div>
                                            </div>
                                            <div class="content  wide column moduleContent">
                                                <div class="header">{{md.lm_title}}</div>
                                                {{ md.lm_text }}
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- 모듈 -->

                                </td>
                            </tr>
                        </tbody>
                        <!-- 상세시간표가 없을 경우 -->
                        <tbody v-else>
                            <tr>
                                <td class="center aligned" colspan="3">
                                    <no-contents />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <br>

            </timeline>





            <div class="" v-else>

            </div>


        </div>


    </div>
    <!-- ======================== 세션/시간표 ============================ -->














    <!-- ======================== 팀/수강생 ============================ -->
    <div class="ui bottom attached tab segment" v-bind:class="[tab==2?'active viewAnimate':'']" >
        <h3><i class="align left icon"></i> 출석률</h3>
        <div class="ui basic message container" style="text-align:center;" v-if="students.length < 1">
            <no-contents header-text="등록된 수강생이 없습니다." />
        </div>
        <div class="" v-else>
            <table class="ui celled table" >
            <colgroup>
                <col width="15%">
                <col width="65%">
                <col width="35%">
            </colgroup>
            <thead>
                <tr>
                    <th>차시/인원</th>
                    <th>차시</th>
                    <th>전체</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(sess,sid)  in  lecture.sessions">
                    <td>1차 - 총 145명</td>
                    <td>
                        <div class="ui basic olive progress" style="margin:0;">
                            <div  class="bar" v-bind:style="{ width: attendancePercent(sid) + '%' }">
                                <div class="progress">{{ attendancePercent(sid) }}%</div>
                            </div>
                        </div>
                    </td>
                    <td v-if="sid==0" v-bind:rowspan="lecture.sessions.length" style="text-align:center;">
                        <div class="ui statistic">
                          <div class="label">평균 출석률</div>
                          <div class="value">94%</div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>

        <br>
        <br>

        <br>
        <br>



        <div class="ui grid">
            <!-- 팀목록 -->
            <div class="three wide column">
                <h3><i class="align left icon"></i> 팀</h3>
                <div class="ui secondary vertical menu " style="width:100%;">
                <!-- <div class="ui vertical pointing menu " style="width:95%;"> -->
                    <a class="item" v-bind:class="[groupTab==''?'active':'']" @click.prevent="chooseGroup('')">전체</a>
                    <a class="item" v-for="(group, gid)  in  groups" v-bind:class="[group.group_idx==groupTab?'active':'']" @click.prevent="chooseGroup(group.group_idx)">
                        {{ group.group_name }}
                    </a>
                    <a class="item" v-bind:class="[groupTab==null?'active':'']" @click.prevent="chooseGroup(null)">팀미지정</a>
                    <a class="tiny button ui blue active" style="width:100%;" @click.prevent="$EventBus.$emit('onModal', 'addGroup', true)" >
                        <i class="icon plus square
"></i>팀생성</a>
                </div>
            </div>

            <!--수강생목록 -->
            <div class="thirteen wide column">
                <!-- <div class=""  v-if="groupTab==-1"> -->
                <div class=""  >
                    <h3>{{ groupTab=='' ? '전체' : '조별' }} 수강생</h3>
                    <table class="ui celled table">
                        <colgroup>
                            <col width="15%">
                            <col width="18%">
                            <col width="12%">
                            <col width="7%">
                            <col width="12%">
                            <col width="7%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>팀</th>
                                <th>소속</th>
                                <th>부서</th>
                                <th class="center aligned">직급</th>
                                <th class="center aligned">이름</th>
                                <th class="center aligned">성별</th>
                                <th class="center aligned" v-bind:colspan="lecture.sessions.length">강의출결 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(std, stdId)  in  students" v-if="std.group_idx==groupTab || groupTab==''">
                                <td> {{ std.group_idx }} </td>
                                <td>{{ std.com_name  }}</td>
                                <td>{{ std.stu_department }}</td>
                                <td class="center aligned">{{ std.stu_position }}</td>
                                <td class="center aligned">{{ std.stu_name }}</td>
                                <td class="center aligned">-</td>
                                <td class="center aligned ui form" v-for="(atd, atdId)  in  JSON.parse(std.stu_attendance)">
                                    <div class="inline field">
                                    <div class="ui checkbox " @click.prevent="attendanceCheck(stdId, atdId)">
                                        <input type="checkbox" tabindex="0" class="hidden" :checked="atd">
                                        <label></label>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>



    </div>
    <!-- ======================== 팀/수강생 ============================ -->










    <!-- ======================== 교육진행 ============================ -->
    <div class="ui bottom attached tab segment" v-bind:class="[tab==3?'active viewAnimate':'']" >
        <h3>
            <i class="align left icon"></i> 교육진행
        </h3>

        <!-- 탭메뉴 -->
        <div class="ui top secondary pointing menu">
            <a class="item" v-bind:class="[sessionTab2 < 0?'active':'']" @click.prevent="sessionTabChange2(-1)">전체</a>
            <a class="item" v-for="(sess, jj) in lecture.sessions" v-bind:class="[sessionTab2==jj?'active':'']" @click.prevent="sessionTabChange2(jj)">{{ jj+1 }}회</a>
        </div>
        <br>


        <!-- 상세시간표 -->
        <div class="ui bottom tab active">

            <!-- 타임라인 컨포넌트 -->
            <timeline class="container33" v-for="(sess, ii)  in  lecture.sessions"  :key="sess.ls_idx" v-if="sessionTab2 < 0 || sessionTab2==ii">

                    <!-- 세션헤더 -->
                    <h3 class="ui header">
                        {{ ii+1 }}회차 - {{ sess.ls_title }}
                        <div class="sub header">
                            <b>강의일정 :</b> {{ sess.ls_startDate }}
                            &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
                            <b>시간 :</b> {{ sess.ls_startTime }} ~ {{ sess.ls_endTime }} (00시간)</div>
                    </h3>

                    <!-- 세션내용(상세시간표) -->
                    <table class="ui table celled structured" v-if="sess.timetables.length > 0" v-for="(timetable, tid)  in  sess.timetables" style="margin-bottom:55px;">
                        <colgroup>
                            <col width="14%">
                            <col >
                        </colgroup>
                        <tbody>
                            <tr>
                                <th class="borderTop">주제</th>
                                <td>{{ timetable.lt_title }}</td>
                            </tr>
                            <tr>
                                <th class="borderTop">시간</th>
                                <td>{{ timetable.start ? timetable.start : '00:00' }} ~ {{ timetable.end ? timetable.end : '00:00' }}</td>
                            </tr>
                            <tr>
                                <th class="borderTop">내용</th>
                                <!-- 모듈수만큼 rowspan -->
                                <td>
                                    <!-- 모듈 -->
                                    <div class="ui relaxed divided list" v-if="timetable.modules.length>0">
                                        <div class="item" v-for="(md, mid)  in  timetable.modules">
                                        <!-- <i class="large github middle aligned icon"></i> -->
                                            <div class="ui label small middle aligned horizontal" style="float:left; margin-top:5px; padding:5px 8px;" v-bind:class="[ md.lm_type=='강의' ? 'blue' :  md.lm_type=='미션' ? 'green' : 'orange' ]">
                                                {{ md.lm_type }}
                                            </div>
                                            <div class="content horizontal" style="float:left; margin-left:7px;">
                                                <span class="header">
                                                    <small>{{ md.lm_startTime }} ~ {{ md.lm_endTime }}</small> <br>
                                                     {{md.lm_title}}
                                                </span>
                                                <div class="description">{{ md.lm_text }}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="center aligned" v-else>
                                        <no-contents header-text="강의모듈이 없는 강의입니다" icon="calendar minus outline" size="size1" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th class="borderTop">활동내용</th>
                                <td class="borderBottom">
                                    <!--  -->
                                    <test-feed />
                                    <br>
                                    <br>
                                    <button class="fluid ui button small">피드 더 보기</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="center aligned container" style="text-align:center;" v-if="sess.timetables.length < 1">
                        <br>
                        <no-contents header-text="시간표가 없는 차시입니다" icon="calendar minus outline" size="size2" />
                    </div>
                    <br>
                    <br>




            </timeline>





        </div>
    </div>
    <!-- ======================== 교육진행 ============================ -->









    <!-- ======================== 참여점수 ============================ -->
    <div class="ui bottom attached tab segment" v-bind:class="[tab==4?'active viewAnimate':'']" >
        <h3>참여점수</h3>
        <table class="ui celled padded table">
            <colgroup>
                <col width="20%">
                <col>
                <col>
                <col>
                <col width="47%">
            </colgroup>
            <thead>
                <tr>
                    <th class="single line center aligned">팀명</th>
                    <th class="single line center aligned">팀점수</th>
                    <th class="single line center aligned">개인합계</th>
                    <th class="single line center aligned">전체합계</th>
                    <th>개별점수</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr  v-for="(group, gid)  in  groups" :key="gid" @click.prevent="$EventBus.$emit('groupScoreModal', group.group_idx)"> -->
                <tr  v-for="(group, gid)  in  groups" :key="gid" >
                    <td class="single line center aligned">
                        <h3 class="ui center aligned header grey">{{ group.group_name }}</h3>
                    </td>
                    <td class="single line center aligned">
                        <h4 class="ui header grey">{{gid+24}}점</h4>
                        <div class="ui basic buttons mini icon ">
                            <div class="ui button">1점</div>
                            <div class="ui button">2점</div>
                            <div class="ui button">3점</div>
                            <div class="ui button">4점</div>
                            <div class="ui button active">5점</div>
                        </div>
                    </td>
                    <td class="single line center aligned">
                        <h4 class="ui header grey">{{gid+24}}점</h4>
                    </td>
                    <td class="center aligned">
                        <h4 class="ui header grey">{{gid+54}}점</h4>
                    </td>
                    <td>

                        <div class="ui middle aligned divided list">
                            <div class="item"  v-for="(std, stdId)  in  students" v-if="std.group_idx==group.group_idx ">
                                <div class="right floated content">
                                    <div class="ui basic buttons mini icon ">
                                        <div class="ui button">1점</div>
                                        <div class="ui button">2점</div>
                                        <div class="ui button">3점</div>
                                        <div class="ui button">4점</div>
                                        <div class="ui button active">5점</div>
                                    </div>
                                </div>
                                <i class="large user circle middle aligned icon" style="color:rgba(0,0,0,0.35)"></i>
                                <div class="content">
                                    <div class="header">{{std.stu_name}}</div>
                                    {{std.stu_company}} ({{std.stu_department}}  {{std.stu_position}})
                                </div>
                            </div>
                        </div>


                    </td>
                </tr>
                <tr>
                    <td colspan="4" class="single line center aligned">
                        <h4 class="ui center aligned header grey">팀 미지정</h4>
                    </td>
                    <td>

                        <div class="ui middle aligned divided list">
                            <div class="item"  v-for="(std, stdId)  in  students" v-if="std.group_idx==undefined || std.group_idx==''">
                                <div class="right floated content">
                                    <div class="ui basic buttons mini icon ">
                                        <div class="ui button">1점</div>
                                        <div class="ui button">2점</div>
                                        <div class="ui button">3점</div>
                                        <div class="ui button">4점</div>
                                        <div class="ui button active">5점</div>
                                    </div>
                                </div>
                                <i class="large user circle middle aligned icon" style="color:rgba(0,0,0,0.35)"></i>
                                <div class="content">
                                    <div class="header">{{std.stu_name}}</div>
                                    {{std.stu_department}} - {{std.stu_position}}
                                </div>
                            </div>
                        </div>

                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th class="center aligned">평균</th>
                    <th class="center aligned">100</th>
                    <th class="center aligned">100</th>
                    <th class="center aligned">100</th>
                    <th class="center aligned"></th>
                </tr>
            </tfoot>
        </table>
    </div>
    <!-- ======================== 참여점수 ============================ -->












    <div class="ui bottom attached tab segment" v-bind:class="[tab==5?'active viewAnimate':'']" >
        <br>
        <br>
        <div class="container" style="text-align:center;">
            <no-contents header-text="액션플랜 컨텐즈를 준비중입니다." icon="calendar minus outline" />
        </div>
        <br>
        <br>
    </div>

    <div class="ui bottom attached tab segment" v-bind:class="[tab==6?'active viewAnimate':'']" >
        <br>
        <br>
        <div class="container" style="text-align:center;">
            <no-contents header-text="리포트 컨텐즈를 준비중입니다." icon="signal" />
        </div>
        <br>
        <br>
    </div>

    <div class="ui bottom attached tab segment" v-bind:class="[tab==7?'active viewAnimate':'']" >
        <br>
        <br>
        <div class="container" style="text-align:center;">
            <no-contents header-text="설문조사 기간이 아닙니다." icon="edit" />
        </div>
        <br>
        <br>
    </div>















<!--  -->
<!-- 팀생성 모달 -->
<modal v-if="modal.aadd" @close="modal.aadd = false" w="w-30" h="" style="position:fixed;">
    <h3 slot="header">기업정보</h3>
    <div slot="body" class="ui form">

        <table width="100%">
            <colgroup>
                <col width="10%">
            </colgroup>
            <tr>
                <td>팀명</td>
                <td class="field">
                      <input type="text" placeholder="미 입력시 생성된 순서의 번호로 자동생성됩니다." >
                </td>
            </tr>
            <tr>
                <td>설명</td>
                <td class="field">
                      <textarea rows="2"></textarea>
                </td>
            </tr>
        </table>

    </div>
    <div slot="footer">
        <div class="ui two bottom attached buttons">
            <div class="ui button" @click.prevent="modal.aadd=false">닫기</div>
            <div class="ui button blue" >등록</div>
        </div>
    </div>
</modal>
<!--  -->





  </div>
</template>





<script>
import {
    Modal,
    SearchForm,
    CardTitle,
    Timeline ,
    TestFeed ,
    NoContents
} from '../../components'

export default {
    name: 'LectureDetail',

    components : {
        'modal' : Modal,
        'search-form' : SearchForm,
        'timeline' : Timeline,
        'test-feed' : TestFeed,
        'no-contents' : NoContents
    },

    data () {
        return {
            modal: {
                aadd:false
            },
          msg: '감성안전을 위한 우리조직 안전리더십 개발 - TEST',
          lec_idx:null,
          lecture:{},
          companies: [],
          groups:[],
          students: [],
          tempStudents:[] ,  // 렌더링 전용 학생목록
          kpi:[],
          sessionTab:-1,
          sessionTab2:-1, // 교육진행 내 차시 탭
          groupTab:'' , // 선택한 그룹아이디
          chooseTeam:{}, // 선택한 그룹 정보
          companyTab:0,
          tab:0, // 현재 활성화 탭
          attendanceCount : 0, // 출석 카운트
          avgAttendancePercent : 50 // 평균출석률
        }
    },// data



    // Filter
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },




    created(){
        var id = this.$ro.history.current.params.id
        this.$set(this, 'lec_idx', id)
        // console.log(this.lec_idx);
        this.getLecture(id)

        // $On
        this.$EventBus.$on('addTeam', this.addTeam)
    },

    methods: {

        chooseGroup(id){
            if(id != -1){
                var sid = this.groups.findIndex((g)=>{
                    return g.group_idx==id
                })
                this.$set(this, 'tempStudents', this.groups[sid])
            }// if
            this.$set(this, 'groupTab', id)

        },

        // 탭메뉴선택
        selectTab(s) {
            this.tab=s;
        },

        sessionTabChange(jj){
            this.$set(this, 'sessionTab', jj)
        },

        sessionTabChange2(jj){
            this.$set(this, 'sessionTab2', jj)
        },

        getLecture(id){
            this.$http.get('/api/lectures/dt/'+id)
            .then(resp=>{
                // console.log(resp.data);
                this.$set(this, 'lecture', resp.data.lecture)
                this.$set(this, 'companies', resp.data.companies)
                this.$set(this, 'groups', resp.data.groups)
                this.$set(this, 'students', resp.data.students)
                this.$set(this, 'kpi', resp.data.kpi)
            }).catch(err=>{
                // console.log(err);
                alert('Error')
            })
        }, // getLecture





        // 차시별 출석률 퍼센테이지 구하기
        attendancePercent(sid){
            var stds = this.students
            var all = stds.length

            var temp
            var sum=0
            for(var ii  in  stds){
                temp = JSON.parse(stds[ii].stu_attendance)
                sum+=temp[sid] ? 1 : 0
            }
            var ff = (all/sum) * 1

            return ff.toFixed(1)
        },





        // 출석체크
        attendanceCheck(stdId, atdId){
            /*
            stdId : 학생 아이디
            atdId : 체크한 출석배열 번지수
            */

            // var ar = this.students.findIndex((std)=>{
            //     return std.stu_idx == stdId
            // })



            var attd = JSON.parse(this.students[stdId].stu_attendance) // 출석 형변환
            attd[atdId] = attd[atdId]==1 ? 0 : 1


            // 서버로
            this.$http.put('/api/students/attendance', {
                lec_idx : this.lec_idx,
                stu_idx : this.students[stdId].stu_idx,
                attendance : attd
            })
            .then(resp=>{
                this.students[stdId].stu_attendance = JSON.stringify(attd)
            })
            .catch(err=>{
                console.log("통신에러");
                console.log(err);
                alert("Error - ")
            })

        }, // 출석체크








        // 팀 추가
        addTeam(){
            alert(1)
        }, // addTeam()




        // 강의삭제
        removeLecture(){
            if ( !confirm('삭제된 강의는 복구가 불가능합니다. 삭제하시겠습니까?') )
                return


            this.$http.delete('/api/lectures/'+this.lec_idx)
            .then(resp=>{
                alert('강의가 삭제되었습니다. 확인을 누르면 진행강의현황 페이지로 이동합니다.')
                this.$ro.push({ path:'/lectures' })
            })
            .catch(err=>{
                alert('Error - r')
            })
        },// removeLecture()



    }// methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.segment{
    padding:20px;
}


.lectureInfo a:hover{color:#c1c1c1;}
.lectureInfo a{color:#333; text-decoration: underline; cursor: pointer;}




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




    .lectureMenu .active{
        color: #fff !important;
        background: #3b485f !important;
        border-radius: 0 !important;
    }

    .tab.segment{
        padding:30px 25px !important;
    }




    .list > .item {
        margin:3px;
        padding-top: 10px;
        padding-bottom: 5px;
    }



    h3 .icon {
        color:rgba(0, 0, 0, 0.45) !important;
        font-size: 0.95em !important;
    }



    .moduleLabel{
        padding:0 !important;
        width:57px !important;
    }
    .moduleContent{
        padding:0 !important;
        width:calc(90% - 60px) !important;
    }


    .fixButton{
        position: absolute;
        top: 0;
        right:0;
        z-index: 99;
    }


</style>
