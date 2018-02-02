<template>
    <div class="">

        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>상세시간표 </h2>
        </div>


        <div class="cardbox" style="margin:0; padding:25px; ">
            <h3>회차 정보</h3>
                <!-- <hr> -->
                <!-- 회차선택 -->
                <div class="ui form" style="font-size:1.05em;">
                    <div class="field">
                        <div class="ui selection dropdown">
                            <input type="hidden" name="gender">
                            <i class="dropdown icon"></i>
                            <div class="default text">회차를 선택해 주세요</div>
                            <div class="menu">
                                <div class="item " >1회 : </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /회차선택 -->


                <table class="ui celled table form timetable">
                    <colgroup>
                        <col width="70%">
                        <col width="15%">
                        <col width="15%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>회차제목</th>
                            <th>시작시간</th>
                            <th>종료시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" placeholder="해당 회차의 제목을 입력해 주세요" >
                            </td>
                            <td>
                                <input type="date" placeholder="시작시간" style="width:97%;">
                            </td>
                            <td>
                                <input type="date" placeholder="시작시간" style="width:97%;">
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>




        <div class="cardbox" style="margin:10px 0; padding:25px; min-height:350px;">

            <h3>상세시간표</h3>
            <!-- viewFlag -->
            <div v-if="viewFlag">

                <div v-if=" timetables[selector].sessions=='' ">
                    <table class="ui table celled">
                        <tr>
                            <th >아직 등록된 시간표가 없습니다.</th>
                        </tr>
                    </table>
                </div>


                <!-- 시간표 템플릿 -->
                <table class="ui celled table form timetable" v-for="(timetable, timetableIndex) in timetables[selector].sessions">
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
                            <td style="border-left:1px solid #f2f2f2;">{{ timetable.title }}</td>
                            <td>{{ timetable.start }}</td>
                            <td>{{ timetable.end }}</td>
                            <td>02시간 10분</td>
                        </tr>
                        <tr>
                            <td colspan="4" style="border-left:1px solid #f2f2f2;">
                                <h4>강의모듈</h4>
                                <p v-if="timetable.modules==undefined">생성된 강의모듈이 없습니다.</p>
                                <ul v-else class="timetable-lectureModules">
                                    <li v-for="(module, moduleIndex) in timetable.modules" style="background:#f4f4f4; padding:8.5px;">
                                        <div class="ui right pointing blue basic label">{{ module.type }} </div>
                                        <span>{{ module.title }} &nbsp;&nbsp;</span>
                                        <a @click.prevent="updateModule(timetableIndex, moduleIndex)"> [수정] </a>
                                        <a href="#"> [삭제] </a>
                                        <p style="padding:6.5px; background:#fff; margin-top:5px;" v-if="module.content">{{module.content}}</p>
                                    </li>
                                </ul>
                                <button type="button" class="ui primary button addModule" @click.prevent="modal('lectureModule')">모듈추가</button>
                                <button type="button" class="ui green button addModule" @click.prevent="modal('lectureUpdate')">주제수정</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <br>



                <!-- 시간표 템플릿 입력 폼 -->
                    <div>
                        <table class="ui celled table form timetable" style="border:1px solid #3781bf">
                            <colgroup>
                                <col width="40%">
                                <col width="15%">
                                <col width="15%">
                                <col width="10%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th style="border-left:1px solid #f2f2f2;"><label for="">주제</label></th>
                                    <th><label for="">시작시간</label></th>
                                    <th><label for="">종료시간</label></th>
                                    <th><label for="">시간</label></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td style="border-left:1px solid #f2f2f2;">
                                        <input type="text" placeholder="제목을 입력해 주세요" style="width:100%;" v-model="tempTable.title">
                                    </td>
                                    <td>
                                        <input type="date" placeholder="시작시간" style="width:97%;" v-model="tempTable.start">
                                    </td>
                                    <td>
                                        <input type="date" placeholder="종료시간" style="width:97%;" v-model="tempTable.end">
                                    </td>
                                    <td>02시간 10분</td>
                                </tr>

                                <tr>
                                    <td colspan="4" style="border-left:1px solid #f2f2f2;">
                                        <h4>강의모듈</h4>
                                        <p v-if=" tempTable.modules==undefined ">생성된 강의모듈이 없습니다.</p>
                                        <ul v-else class="timetable-lectureModules">
                                            <li v-for="module in tempTable.modules">
                                                <div class="ui right pointing blue basic label">{{ module.type }} </div>
                                                <span>{{ module.title }} &nbsp;&nbsp;</span>
                                                <a @click="alert(1)"> [내용보기] </a>
                                                <a @click="alert(1)"> [수정] </a>
                                                <a href="#"> [삭제] </a>
                                                <p style="padding:6.5px; background:#f3f3f3; margin-top:5px;" v-if="module.content">{{module.content}}</p>
                                            </li>
                                        </ul>
                                        <button type="button" class="ui primary button addModule" @click.prevent="modal('lectureModule')">모듈추가</button>
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

        </div>



        <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
            <button class="ui button" @click.prevent="save">저장</button>
            <button class="ui primary button" onclick="move('/lectures/new/timetable')">다음페이지</button>
        </div>


    </div>
</template>



<!-- Script -->
<script>
const page = 'NewTimetable';

export default {
    name: page,
    data () {
        return {

            msg: page,
            viewFlag:false, //초기 뷰설정 플래그
            sessionCount:0,
            selector: 0, //현재 배열 번지
            sessionDetail: [],
            timetables:[], //메인 모델
            tempTable:{}, //추가 세션
            tempModule:{
                type:'lecture', title:'', content:''
            } //추가 모듈

        }//return
    }//data
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }
</style>
