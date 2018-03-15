<template>
    <div class="">

        <!-- ======================== 페이지 타이릍 ============================ -->
        <card-title title="팀빌딩" guide="/"/>
        <!-- ======================== /페이지 타이릍 ============================ -->





        <div class="cardbox ui grid" style="margin:0; padding:25px;">

            <!-- 팀목록 -->
            <div class="seven wide column" style=" padding:0; background:#f7f7f7;">
                <h3 style="background:#fff; padding:5px;">
                    팀목록
                    <small style="color:orange;">[ {{ teams.length }} ]</small>
                </h3>
                <div class="" style="height:600px; overflow:auto; padding:0 .5rem;">
                    <table class="ui table celled">
                        <colgroup>
                            <col width="40%">
                            <col width="20%">
                            <col width="25%">
                            <col width="12%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>팀명</th>
                                <th class="center aligned">인원</th>
                                <th class="center aligned">수정</th>
                                <th class="center aligned">선택</th>
                            </tr>
                        </thead>
                        <tbody v-if="teams==undefined">
                            <tr>
                                <td colspan="4" class="center aligned">
                                    <!-- 생성된 팀이 없습니다  -->
                                    <button type="button" class="ui blue button tiny basic" @click.prevent="modal.createTeam=true">팀생성</button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr v-for="(team, ii) in teams" v-bind:class="[colorAnimate==ii ? 'color-change-2x':'']">
                                <td >{{ team.name }}</td>
                                <td class="center aligned">{{ (team.students==undefined? '0명' : team.students.length+'명') }}</td>
                                <td class="center aligned" style="padding-right:0; padding-left:5px;">
                                    <button type="button" class="tiny basic ui button teamEdit" @click.prevent="editTeam(team.id)">수정</button>
                                    <button type="button" class="tiny basic red ui button teamEdit" @click.prevent="removeTeam(team.id)">삭제</button>
                                </td>
                                <td class="center aligned"><input type="radio" name="" v-bind:value="team.id" v-model="selectTeam"></td>
                            </tr>
                            <tr>
                                <td colspan="4" class="center aligned">
                                    <!-- 생성된 팀이 없습니다  -->
                                    <button type="button" class="ui blue button tiny basic" @click.prevent="modal.createTeam=true">팀생성</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- <p>{{this.checkedStudents}}</p> -->
            </div>



            <!-- 중앙버튼 -->
            <div class="two wide column" style="text-align:center; padding:20% 2%;">
                <button type="button" class="ui blue basic button small" @click.prevent="addStudents">
                    <i class="arrow left icon"></i> 추가
                </button>
                    <br><br>
                <button type="button" class="ui blue basic button small">
                    제외 <i class="arrow right icon"></i>
                </button>
                    <br><br><br>

                    <button type="button" class="ui blue basic button small" @click="modal.random=true">
                        랜덤배치
                    </button>
            </div>



            <!-- 수강생목록 -->
            <div class="seven wide column" style=" padding:0; background:#f7f7f7;">
                <h3 style="background:#fff; padding:5px;">
                    수강생
                    <small style="color:orange;">[ {{ students.length }}명 ]</small>
                </h3>
                <div class="" style="height:600px; overflow:auto; padding:0 .5rem;">
                    <table class="ui celled table">
                        <colgroup>
                            <col width="5%">
                            <col width="20%">
                            <col width="25%">
                            <col >
                            <col >
                        </colgroup>
                        <thead>
                            <tr>
                                <th class="center aligned"></th>
                                <th class="center aligned">이름</th>
                                <th class="center aligned">소속</th>
                                <th class="center aligned">부서</th>
                                <th class="center aligned">직급</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- selectable positive -->
                            <tr v-for="(std, i) in students" :key="i" class="trhover" v-bind:class="[]" @click="onSelect(std)">
                                <label for="i" v-bind:for="i">
                                <td class="center aligned">
                                    <input type="checkbox" v-bind:id="i" v-bind:name="std" v-bind:value="std" v-model="checkedStudents">
                                </td>
                                </label>
                                <td class="center aligned"><label for="i" v-bind:for="i">{{ std.stu_name }}</label></td>
                                <td class="center aligned">{{ std.stu_company }}</td>
                                <td class="center aligned">{{ std.stu_department }}</td>
                                <td class="center aligned">{{ std.stu_position }}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <!-- <br>
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
                </div> -->
            </div>



                <br>
                <br>



            </div>

            <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
                <button class="ui button" @click.prevent="resetSessionStorage">초기화</button>
                <button class="ui button" @click.prevent="save">저장</button>
                <button class="ui primary button" @click.prevent="goTo">다음페이지</button>
            </div>








<!-- ======================== Modal영역 ============================ -->

    <!-- 팀생성 모달 -->
    <modal v-if="modal.createTeam" @close="modal.createTeam = false" w="w-40" h="">
        <h3 slot="header">팀생성</h3>
        <div slot="body" class="ui form">

            <table width="100%">
                <colgroup>
                    <col width="10%">
                </colgroup>
                <tr>
                    <td>팀명</td>
                    <td class="field">
                          <input type="text" placeholder="미 입력시 생성된 순서의 번호로 자동생성됩니다." v-model="teamInfo.name">
                    </td>
                </tr>
                <tr>
                    <td>설명</td>
                    <td class="field">
                          <textarea rows="2" v-model="teamInfo.description"></textarea>
                    </td>
                </tr>
            </table>

        </div>
        <div slot="footer">
            <div class="ui two bottom attached buttons">
                <div class="ui button" @click.prevent="modal.createTeam=false">닫기</div>
                <div class="ui button blue" @click.prevent="addTeam">등록</div>
            </div>
        </div>
    </modal>






    <!-- 팀 수정 및 인원수정 모달 -->
    <modal v-if="modal.editTeam" @close="modal.editTeam = false" w="w-50" h="h-50">
        <h3 slot="header">팀정보 수정</h3>
        <div slot="body" class="ui form">

            <table width="100%">
                <colgroup>
                    <col width="10%">
                </colgroup>
                <tr>
                    <td>팀명</td>
                    <td class="field">
                          <input type="text" placeholder="" v-model="teams[selectTeam].name">
                    </td>
                </tr>
                <tr>
                    <td>설명</td>
                    <td class="field">
                          <textarea rows="2" v-model="teams[selectTeam].description"></textarea>
                    </td>
                </tr>
            </table>

            <br>
            <br>


            <div class="seven wide column" style=" padding:0; background:#f7f7f7;">
                <h3 style="background:#fff; padding:5px;">
                    팀원
                    <small style="color:orange;">[ {{ teams[selectTeam].students==undefined ? '0': teams[selectTeam].students.length }}명 ]</small>
                </h3>
                <div class="" style=" overflow:auto; padding:0 .5rem;">
                    <table class="ui celled table">
                        <colgroup>
                            <col width="20%">
                            <col width="25%">
                            <col >
                            <col >
                            <col width="12%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th class="center aligned">이름</th>
                                <th class="center aligned">소속</th>
                                <th class="center aligned">부서</th>
                                <th class="center aligned">직급</th>
                                <th class="center aligned">제외</th>
                            </tr>
                        </thead>
                        <tbody v-if="teams[selectTeam].students==undefined">
                            <!-- selectable positive -->
                            <tr>
                                <td class="center aligned" colspan="5">아직 등록된 팀원이 없습니다.</td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr v-for="(std, i) in teams[selectTeam].students" :key="i">
                                <td class="center aligned"><label for="i" v-bind:for="i">{{ std.stu_name }}</label></td>
                                <td class="center aligned">{{ std.stu_company }}</td>
                                <td class="center aligned">{{ std.stu_department }}</td>
                                <td class="center aligned">{{ std.stu_position }}</td>
                                <td class="center aligned">
                                    <button type="button" class="ui red basic button tiny" @click.prevent="removeStudent(std.id)">제외</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
        <div slot="footer">
            <div class="ui two bottom attached buttons">
                <div class="ui blue button" @click.prevent="modal.editTeam=false">확인</div>
            </div>
        </div>
    </modal>







    <!-- 랜덤배치 모달 -->
    <modal v-if="modal.random" @close="modal.editTeam = false" w="w-50" h="h-50">
        <h3 slot="header">랜덤배치</h3>
        <div slot="body" class="ui form">





        </div>
        <div slot="footer">
            <div class="ui two bottom attached buttons">
                <div class="ui button" @click.prevent="modal.random=false">닫기</div>
            </div>
        </div>
    </modal>


<!-- ======================== Modal ============================ -->




    </div>
</template>



<!-- Script -->
<script>
import { Modal, SearchForm, CardTitle } from '../../components'
const page = 'NewTeam';

export default {
    name: page,

    // ====== 컴포넌트 ====== //
    components: {
        'modal' : Modal,
        'search-form' : SearchForm,
        'card-title' : CardTitle
    },
    // ====== 컴포넌트 ====== //





    // ============ data ============ //
    data () {
        return {
            lec_idx:0,
            msg: page,
            modal:{ // 모달
                createTeam : false,
                editTeam: false,
                random: false
            },
            colorAnimate: -1,
            teamInfo:{ // 팀정보
                id: '', name: '', description: ''
            },
            teams:[], // 팀목록
            selectTeam: -1, // 선택 팀
            selectStudent:-1, // 선택 수강생
            checkedStudents:[], // 선택된 수강생
            tempTeam:{},
            arrCount:0,
            companies:[],
            students:[], // 총 수강생목록
            students_temp:[] // 테스트모델
        }
    }, // data

    watch:{
        checkedStudents(h){
            // console.log(h);
        },
        selectTeam(h){
            // console.log(h);
        }
    },
    // ============ data ============ //





    // ============ created ============ //
    created() {
        const id = sessionStorage.getItem('lecture-idx')
        this.$set(this, 'lec_idx', id ? id : 0)

        // 저장데이터확인
        var storageData = JSON.parse(sessionStorage.getItem('lecture-teamBuilding'))
        var stds = JSON.parse(sessionStorage.getItem('lecture-students')) // 수강생

        // 세션스토리지에 저장되어있을 경우
        if(storageData){
            this.$set(this, 'teams', storageData.teams)
            this.$set(this, 'students', storageData.students)
            this.$set(this, 'students_temp', stds)
            return
        }
        //
        this.$set(this, 'students', stds)

    }, // created
    // ============ created ============ //





    // ============ methods ============ //
    methods: {


        // === 팀생성 === //
        addTeam() {
            // ID 자동생성
            var newId = !this.teams.length ? 1 : this.teams[this.teams.length - 1].id + 1;

            if (this.teamInfo.name == ''  ||  this.teamInfo.name == undefined) {
                if ( !confirm('팀명을 자동으로 생성하시겠습니까?') ) {
                    return
                }
                this.teamInfo.name = 'A'+newId+'팀'
            } // if


            this.teamInfo.id = newId
            this.teamInfo.students = new Array()

            // 데이터 삽입
            this.teams.push(this.teamInfo)

            // 임시모델 초기화
            this.teamInfo = { id:'', name: '', description: '' }
            this.modal.createTeam = false
        }, // addTeam




        // === 팀삭제 === //
        removeTeam(id) {
            var did; // Delete Idx
            var stds; // Students

            if (!id) return

            // 삭제할 아이디가 유효한지 검사
            did = this.teams.findIndex(function (team) {
                return team.id === id
            })


            if (did === -1) return

            if ( confirm('팀 삭제 후 팀원은 자동으로 미지정인원으로 반환됩니다. 삭제하시겠습니까?') ) {

                if (this.teams[did].students != undefined || this.teams[did].students != '') {
                    // 모델합치기
                    if(this.teams[did].students != '' && this.teams[did].students != undefined){
                        stds = this.students.concat(this.teams[did].students)
                        // this.students = stds;
                        this.$set(this, 'students', stds)
                    }
                }// if
                this.teams.splice(did, 1);

            }// if - confirm

        }, // removeTeam




        // === 팀수정 === //
        editTeam(id){
            // 아이디가 유효한지 검사
            var eid = this.teams.findIndex(function (team) {
                return team.id === id
            })

            // this.$set(this, 'tempTeam', this.teams[eid])
            this.selectTeam = eid
            this.modal.editTeam = true
        },// editTeam






        // === 수강생 to 팀 배치 === //
        addStudents(){
            var idx = this.selectTeam
            if ( idx<0  ||  idx==undefined ) {
                alert('선택된 팀이 없습니다.')
                return
            }//if

            // 초기화
            this.$set(this, 'selectTeam', -1)

            // 애니메이션
            this.$set(this, 'colorAnimate', idx-1)


            // 팀아이디가 유효한지 검사
            var rid = this.teams.findIndex(function (team) {
                return team.id === idx
            })

            // 체크된 수강생
            var stds = this.checkedStudents;


            // 빈배열 체크 후 concat함수로 배열 취합 후 삽입
            if ( typeof(this.teams[rid].students) != undefined ) {
                stds = stds.concat(this.teams[rid].students)
                // console.log(this.checkedStudents);
            }
            this.$set(this.teams[rid], 'students', stds) // 팀원 추가

            // console.log(stds);

            // 체크모델 초기화 & 수강생 목록에서 제외 => 수강생 전체 입력가능한 모델하나 더만들어야함
            this.checkedStudents.forEach((cstd,i)=>{
                this.students.forEach((std, j)=>{
                    if (cstd.com_code==std.com_code && cstd.id==std.id) {
                        this.students.splice(j,1)
                    }
                    if (this.checkedStudents.length-1 == i && this.students.length-1==j) {
                        this.checkedStudents = [];
                    }
                })
            })

            // 팀원 최초등록 시 빈객체가 하나 추가삽입되는 문제발생 해결해야함! = > 임시로 해결 / 마지막배열이 null일경우 pop시켰음
            var  ll = this.teams[rid].students.length;
            if (this.teams[rid].students[ll-1] == null) {
                this.teams[rid].students.pop()
            }
            // console.log(this.teams[rid]);


        }, // addStudents





        // === 팀원삭제 === //
        removeStudent(id) {
            var selectTeam = this.selectTeam
            var rid = this.teams[selectTeam].students.findIndex(std=>{
                return std.id == id
            })
            this.students.push(this.teams[selectTeam].students[rid])
            this.teams[selectTeam].students.splice(rid, 1)

        },




        // === 세션스토리지 초기화 === //
        resetSessionStorage() {
            sessionStorage.clear('lecture-teamBuilding');
        },





        // === 저장 === //
        save() {
            // console.log(this.teams)
            // return

            if (this.teams == undefined || this.teams.length==0) {
                if(!confirm('팀을 생성하지 않고 강의를 개설하시겠습니까?'))
                    return
            }

            // 서버로
            this.$http.post('/api/lectures/create/group', {
                teams  : this.teams,
                lec_idx : this.lec_idx
            })
            .then(resp=>{
                // 그룹삽입 후 아이디가 반환되었을 경우 디비아이디를 맵핑
                var rid = resp.data.insertIdx
                if(rid != undefined){
                    for(var ii  in  this.teams){
                        this.teams.idx = rid
                        rid++
                    }// for
                }
            })
            .catch(err=>{
                alert('Err- ')
            })

            sessionStorage.setItem('lecture-teamBuilding', JSON.stringify({teams:this.teams, students:this.students}))
            alert('팀빌딩 정보가 저장되었습니다.')
        },// save



        goTo() {
            if (!sessionStorage.getItem('lecture-teamBuilding')) {
                alert('저장 후 이동 가능합니다.')
                return
            }
            this.$ro.push({ path:'/lectures/new/survey' })
        }// goTo



    } // ============ methods ============ //
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }

    .form  input,
    .form  textarea{
        width: 100% !important;
    }

    .teamEdit{
        padding: 5px 11px;
        margin:0;
    }


    .trhover:hover{
        background: #f3f3f3;
        cursor:pointer
    }


    .color-change-2x{animation:color-change-2x 1s alternate both}
    @keyframes color-change-2x{0%{background:#E4F7BA}100%{background:none}}


</style>
