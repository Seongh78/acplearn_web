<template>
    <div class="">

        <!-- ======================== 페이지 타이릍 ============================ -->
        <card-title title="수강생" guide="/"/>
        <!-- ======================== /페이지 타이릍 ============================ -->




        <!-- ======================== 내용 ============================ -->
        <div class="cardbox" style="margin:10px 0; padding:25px;">

            <h3>참여기업</h3>

            <div class="ui top secondary  menu">
                <!-- 전체 기업/수강생 현황 -->
                <a
                    class="item"
                    v-bind:class="[thisTab=='f01'?'active':'']"
                    v-on:click.prevent="selectTab('f01',-1)">
                        전체
                 </a>

                <!-- 기업목록/동적으로 표시 -->
                <a
                    class="item"
                    v-for="(company,ii) in companies"
                    v-bind:class="[thisTab==company.com_code?'active':'']"
                    v-on:click.prevent="selectTab(company.com_code, ii)">
                        {{ company.com_name }}
                 </a>

                <!-- 기업추가버튼 -->
                <a class="item">
                    <button type="button" class="ui primary button" @click="modal.newCompany = true">기업추가</button>
                </a>
            </div>


            <!-- 탭 01 - 전체기업 현황 -->
            <div class="ui bottom tab " v-bind:class="[thisTab=='f01'?'active viewAnimate':'']" >
                <table class="ui celled table">
                    <colgroup>
                        <col width="10%;"><col >
                        <col width="10%;"><col >
                        <col width="10%;"><col >
                    </colgroup>
                    <tbody v-if="companies!=''">
                        <tr>
                            <th colspan="6">참여기업 현황</th>
                        </tr>
                        <tr>
                            <th class="borderTop"><b>업체 수</b></th>
                            <td>{{ companies.length }}개 업체</td>
                            <th class="borderTop"><b>수강인원</b></th>
                            <td>150명</td>
                            <th class="borderTop"><b>비고</b></th>
                            <td>-</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <th colspan="6">등록된 업체가 없습니다.</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 탭 01 - 전체기업 현황 -->

            <!-- 탭 02 - 기업목록 -->
            <div
                class="ui bottom tab"
                v-for="company in companies"
                v-bind:class="[thisTab==company.com_code ? 'active viewAnimate':'']" >

                    <!-- 기업정보 -->
                    <table class="ui celled table">
                        <colgroup>
                            <col width="10%;">
                            <col width="">
                            <col width="10%;">
                            <col width="30%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th class="">기업명</th>
                                <td >{{ company.com_name }}</td>
                                <th class="borderTop">담당자</th>
                                <td >{{ company.com_managerName }}</td>
                            </tr>
                            <tr>
                                <th class="borderTop">업종</th>
                                <td colspan="">{{ company.com_category }}</td>
                                <th class="borderTop">연락처</th>
                                <td >{{ company.com_managerPhone }}</td>
                            </tr>
                            <tr>
                                <th class="borderTop">주소</th>
                                <td >{{ company.com_location }}</td>
                                <th class="borderTop">수강인원</th>
                                <td>
                                    45명 &nbsp;
                                    <label @click.prevent="modal.newStudent = true">
                                        <div class="ui black basic button small" tabindex="0" style="padding:5.5px 12px;">
                                            <div class="visible content ">수강생 개별등록</div>
                                        </div>
                                    </label>
                                    <label for="studentsFile">
                                        <div class="ui black basic button small" tabindex="0" style="padding:5.5px 12px;">
                                            <div class="visible content ">수강생 일괄등록 ( Excel파일 )</div>
                                        </div>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- 기업정보 하단버튼 -->
                    <div class="" style="text-align:center;">
                        <button class="ui blue basic button tiny" @click.prevent="companyUpdateForm">정보수정</button>
                        <button class="ui red basic button tiny" @click.prevent="companyRemove(company.com_code)">삭제</button>
                    </div>
            </div>
            <!-- 탭 02 - 기업목록 -->


        </div>
        <!-- ======================== /내용 ============================ -->









        <!-- ======================== 수강생목록 ============================ -->
        <div class="cardbox" style="margin:0; padding:25px;">

            <h3>
                전체 수강생 <small>총 {{ tempStudents.length }}명</small>
            </h3>
            <search-form/>

            <!-- 수강생 -->
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>소속</th>
                        <th>부서</th>
                        <th class="center aligned">직급</th>
                        <th class="center aligned">이름</th>
                        <th class="center aligned">연락처</th>
                        <th class="center aligned">생년월일</th>
                        <th class="center aligned">성별</th>
                    </tr>
                </thead>
                <!-- 전체 수강생 목록 -->
                <tbody v-if="thisTabAddr<0 ">
                    <tr v-for="std in tempStudents">
                        <td>{{ std.stu_company }}</td>
                        <td>{{ std.stu_department }}</td>
                        <td class="center aligned">{{ std.stu_position }}</td>
                        <td class="center aligned">{{ std.stu_name }}</td>
                        <td class="center aligned">-</td>
                        <td class="center aligned">-</td>
                        <td class="center aligned">{{ std.stu_gender }}</td>
                    </tr>
                </tbody>
                <!-- 선택된 기업 수강생 목록 -->
                <tbody v-else>
                    <tr v-for="std in tempStudents" v-if="std.com_code==thisTab">
                        <td>{{ std.stu_company }}</td>
                        <td>{{ std.stu_department }}</td>
                        <td class="center aligned">{{ std.stu_position }}</td>
                        <td class="center aligned">{{ std.stu_name }}</td>
                        <td class="center aligned">-</td>
                        <td class="center aligned">-</td>
                        <td class="center aligned">{{ std.stu_gender }}</td>
                    </tr>
                </tbody>
            </table>

            <br>

            <!-- 페이지 하단 -->
            <div class="ui two column centered grid">
                <div class="ui centered pagination menu">
                    <a class="icon item"><i class="left chevron icon"></i></a>
                    <a class="item">1</a>
                    <a class="item">2</a>
                    <a class="item">3</a>
                    <a class="item">4</a>
                    <a class="icon item"><i class="right chevron icon"></i></a>
                </div>
                <input type="file" id="studentsFile" @change="onFileChange"  style="display:none;" ref="fileInput">
            </div>
            <!-- 페이지 하단 -->

            <br>
            <br>

        </div>
        <!-- ======================== /수강생목록 ============================ -->









        <!-- ======================== 하단 ============================ -->
        <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
            <!-- <button class="ui button" @click.prevent="save">저장</button> -->
            <button class="ui button" @click.prevent="resetSessionStorage">초기화</button>
            <button class="ui button" @click.prevent="save">저장</button>
            <button class="ui primary button" @click.prevent="goTo">다음페이지</button>
        </div>
        <!-- ======================== /하단 ============================ -->









<!-- ======================== Modal영역 ============================ -->

    <!-- 신규기업추가 모달 -->
    <modal v-if="modal.newCompany" @close="modal.newCompany = false" w="w-50" h="h-50">
        <h3 slot="header">기업등록</h3>
        <div slot="body">

            <div class="ui top attached tabular  menu">
                <a class="item" v-bind:class="[thisTab2=='t01'?'active':'']" v-on:click.prevent="selectTab2('t01')" >
                    신규기업등록
                </a>
                <a class="item" v-bind:class="[thisTab2=='t02'?'active':'']" v-on:click.prevent="selectTab2('t02')" >
                    기업검색
                </a>
            </div>

            <!-- 신규기업등록 폼 -->
            <div class="ui bottom attached segment tab " v-bind:class="[thisTab2=='t01'?'active':'']" >
                <br>
                <form class="ui form">
                    <div class="field">
                        <label>사업자번호</label>
                        <input type="text" placeholder="사업자번호를 입력해 주세요" style="width:100%;" v-model="newCompany.com_code">
                    </div>
                    <div class="field">
                        <label>기업명</label>
                        <input type="text" placeholder="기업명을 입력해 주세요" style="width:100%;" v-model="newCompany.com_name">
                    </div>
                    <div class="field">
                        <label>주소</label>
                        <input type="text" placeholder="주소를 입력해 주세요" style="width:100%;" v-model="newCompany.com_location">
                    </div>
                    <div class="field">
                        <label>업종</label>
                        <input type="text" placeholder="업종을 입력해 주세요" style="width:100%;" v-model="newCompany.com_category">
                    </div>
                    <div class="field">
                        <label>담당자</label>
                        <input type="text" placeholder="이름을 입력해 주세요" style="width:100%;" v-model="newCompany.com_managerName">
                    </div>
                    <div class="field">
                        <label>연락처</label>
                        <input type="text" placeholder="ex) 010-0000-0000" style="width:100%;" v-model="newCompany.com_managerPhone">
                    </div>

                </form>
                <br>
            </div>

            <!-- 신규기업검색 폼 -->
            <div class="ui bottom attached segment tab " v-bind:class="[thisTab2=='t02'?'active':'']" >
                <search-form/>
                <!-- <label>선택기업</label> -->
                <div v-if="1>selectCompanies.length">
                    <p>선택한 기업이 없습니다.<br><small style="color:#FF7012;">이미 등록된 기업은 자동으로 제외됩니다.</small></p>
                </div>
                <div v-else>
                    <a class="ui label large viewAnimate" style="margin:0 5px 5px 0;" v-for="(com, index) in selectCompanies">{{com.com_name}}<i class="delete icon" @click="unCheck(index)"></i></a>
                </div>

                <table class="ui celled table">
                    <colgroup>
                        <col width="5%">
                        <col width="18%">
                        <col width="32%">
                        <col width="17%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th></th>
                            <th>사업자번호</th>
                            <th>기업명</th>
                            <th>업종</th>
                            <th>주소</th>
                        </tr>
                    </thead>
                    <tbody v-if="beforeCompanies !='' ">
                        <tr v-for="(com, i) in beforeCompanies">
                            <td class="center aligned">
                                 <input type="checkbox" :key="com.com_code"  v-bind:value="com" v-model="selectCompanies">
                            </td>
                            <td>{{ com.com_code }}</td>
                            <td>{{ com.com_name }}</td>
                            <td>{{ com.com_category }}</td>
                            <td>{{ com.com_location }}</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="7">000-00-00000</td>
                        </tr>
                    </tbody>
                </table>
                <br>
            </div>

        </div>
        <div slot="footer">
            <div class="ui two bottom attached buttons">
                <div class="ui button" @click="modal.newCompany=false">닫기</div>
                <div class="ui button blue" @click="insertCompany">등록</div>
            </div>
        </div>
    </modal>







    <!-- 수강생 개별등록 모달 -->
    <modal v-if="modal.newStudent" @close="modal.newStudent = false" w="w-30" h="">
        <h3 slot="header">수강생 등록</h3>
        <div slot="body">




            <form class="ui form">
                <div class="field">
                    <label>소속</label>
                    <input type="text" name="first-name" placeholder="First Name" value="(주)아카스타 - 자동기입" disabled>
                </div>

                <div class="field">
                    <label>부서/직급</label>
                    <div class="two fields">
                        <div class="field">
                            <input type="text" name="shipping[first-name]" placeholder="부서">
                        </div>
                        <div class="field">
                            <input type="text" name="shipping[last-name]" placeholder="직급">
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label>이름</label>
                    <input type="text" name="last-name" placeholder="이름을 입력해 주세요">
                </div>

                <div class="field">
                    <label>연락처</label>
                    <input type="text" name="last-name" placeholder=" '-'(하이픈) 없이 입력해 주세요 ">
                </div>



                <div class="field">
                    <label>생년월일</label>
                    <div class="four fields">
                        <div class="field">
                            <select class="ui fluid dropdown">
                                <option value="">연도</option>
                                <option value="">2018년</option>
                                <option value="">2017년</option>
                                <option value="">2016년</option>
                            </select>
                        </div>
                       <div class="field">
                            <select class="ui fluid dropdown">
                               <option value="">월</option>
                               <option value="">01월</option>
                               <option value="">02월</option>
                               <option value="">03월</option>
                            </select>
                       </div>
                       <div class="field">
                           <select class="ui fluid dropdown">
                               <option value="">일</option>
                               <option value="">01일</option>
                               <option value="">02일</option>
                               <option value="">03일</option>
                            </select>
                       </div>
                    </div>
                </div>



                <div class="field">
                    <label>성별</label>
                    <div class="inline fields">
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="fruit" checked="" tabindex="0" class="hidden">
                                <label>남자</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="fruit" tabindex="0" class="hidden">
                                <label>여자</label>
                            </div>
                        </div>
                    </div>
                </div>



                <!-- <button class="ui button" type="submit">Submit</button> -->
            </form>




        </div>
        <div slot="footer">
            <div class="ui two bottom attached buttons">
                <div class="ui button" @click="modal.newStudent=false">닫기</div>
                <div class="ui button blue" @click="insertCompany">등록</div>
            </div>
        </div>
    </modal>





    <!-- 기업정보수정 -->
    <modal v-if="modal.companyUpdate" @close="modal.companyUpdate = false" w="w-40" h="">
        <h3 slot="header">기업정보 수정</h3>
        <div slot="body">

            <form class="ui form">
                <div class="field">
                    <label>기업명</label>
                    <!-- {{ companyUpdate.com_name }} -->
                    <input type="text" name="first-name" placeholder="First Name" v-bind:value="companyUpdate.com_name" disabled>
                </div>

                <div class="field">
                    <label>사업자번호</label>
                    <!-- {{ companyUpdate.com_code }} -->
                    <input type="text" name="first-name" placeholder="First Name" v-bind:value="companyUpdate.com_code" disabled>
                </div>

                <div class="field">
                    <label>업종</label>
                    <!-- {{ companyUpdate.com_category }} -->
                    <input type="text" name="last-name" v-bind:value="companyUpdate.com_category" placeholder="이름을 입력해 주세요" disabled>
                </div>

                <div class="field">
                    <label>주소</label>
                    <!-- {{ companyUpdate.com_location }} -->
                    <input type="text" name="last-name" v-bind:value="companyUpdate.com_location" placeholder=" '-'(하이픈) 없이 입력해 주세요 " disabled>
                </div>

                <div class="field">
                    <label>담당자</label>
                    <input type="text" name="last-name" v-model="companyUpdate.com_managerName">
                </div>

                <div class="field">
                    <label>담당자 연락처</label>
                    <input type="text" name="last-name" placeholder=" '-'(하이픈) 없이 입력해 주세요 " v-model="companyUpdate.com_managerPhone">
                </div>

            </form>

        </div>
        <div slot="footer">
            <div class="ui two bottom attached buttons">
                <div class="ui button" @click="modal.companyUpdate=false">닫기</div>
                <div class="ui button blue" @click.prevent="companyUpdateData">등록</div>
            </div>
        </div>
    </modal>


<!-- ======================== Modal ============================ -->


    </div>
</template>



<!-- Script -->
<script>
import { Modal, SearchForm, CardTitle } from '../../components'

const page = 'NewStudent';

export default {
    name: page,

    // ============ 컴포넌트 ============ //
    components: {
        'modal' : Modal,
        'search-form' : SearchForm,
        'card-title' : CardTitle
    },

    // ============ 데이터모델 ============ //
    data () {
        return {
            lec_idx:0,
            modal:{
                newCompany : false,
                newStudent : false,
                companyUpdate : false
            },
            thisTab:'f01', //탭
            thisTabAddr:-1, //탭
            thisTab2:'t01', //탭
            attachment:{name:null, file:null}, //업로드 엑셀파일
            selectSheet:0, // 업로드시트 선택
            students:[], // 수강생목록

            tempStudents:[], //  수강생목록  -  TEST model

            companies:[], // 업체목록
            companyUpdate:{}, // 기업정보수정
            selectCompanies: [], // 선택기업목록
            beforeCompanies: [], // 테스트모델 - DB값으로 대체
            newCompany: { // 신규업체
                com_code : '',
                com_name : '',
                com_location : '부산광역시 남구 수영로 221 메디타워',
                com_managerName : '박길동',
                com_managerPosition : '팀장',
                com_managerPhone: '010-2322-4004',
                com_category : '교육'
            },
            thisCompany:'', //업체선택
            errors: []
        } // return
    }, // data




    // ============ Created ============ //
    created(){

        // 임시저장 데이터 불러오기
        var com = JSON.parse(sessionStorage.getItem('lecture-companies'));
        var stds = JSON.parse(sessionStorage.getItem('lecture-students'));
        this.$set(this, 'companies',        (com ==null) ? [] : com)
        this.$set(this, 'tempStudents',   (stds ==null) ? [] : stds )

        const id = sessionStorage.getItem('lecture-idx')
        this.$set(this, 'lec_idx', id ? id : -1)

        this.companiesLoad()
    },// created()


    // ============ Updated ============ //
    updated(){
        // this.companiesLoad()
    },




    // ============ 메소드 ============ //
    methods: {

        // === 탭메뉴 선택 === //
        selectTab(s,ii) {
            this.thisTab=s;
            this.thisTabAddr=ii;
        },

        // === 탭메뉴 선택 === //
        selectTab2(s) {
            this.thisTab2=s;
        },



        // === 기업정보 불러오기 === //
        companiesLoad() {
            this.$http.get('/api/companies')
            .then(resp=>{
                // console.log(resp.data.companies);
                this.$set(this, 'beforeCompanies', resp.data.companies)
            })
        },



        // === 기업정보 수정폼 === //
        companyUpdateForm(){
            this.$set(this, 'companyUpdate', this.companies[this.thisTabAddr])
            this.modal.companyUpdate = true // 모달ON
        },



        // === 기업정보 수정완료 === //
        companyUpdateData(){
            // console.log(this.companyUpdate);
            if (
                this.companyUpdate.com_mangerName=='' ||
                this.companyUpdate.com_managerName==undefined ||
                this.companyUpdate.com_mangerPhone=='' ||
                this.companyUpdate.com_managerPhone==undefined
            ) {
                alert('담당자 정보를 모두 입력해 주세요')
                return
            }
            this.companies[this.thisTabAddr] = this.companyUpdate
            this.modal.companyUpdate = false // 모달OFF
        },



        // 기업삭제
        companyRemove(rid){
            var id = this.companies.findIndex(function (com) {
                return com.com_code === rid
            })
            // return
            if(this.companies.length-1 == id)
                this.companies.pop()
            else
                this.companies.splice(id, 1)

            this.selectTab('f01',-1)
        },




        // === 체크해제 === //
        unCheck(id){
            this.selectCompanies.splice(id, 1)
        }, // unCheck



        // === 기업추가 === //
        insertCompany(){
            switch (this.thisTab2) { // 선택한 탭 기준

                // === 직접입력
                case 't01':
                    if (this.newCompany.com_code        == '' ||
                        this.newCompany.com_category  == '' ||
                        this.newCompany.com_name       == '' ||
                        this.newCompany.com_location   == '' ) {
                            alert('모든 항목을 입력해 주세요')
                            return
                    }
                    // === 중복검사
                    for(var com in this.companies){
                        // 중복없을시 메인모델로 push
                        if (this.newCompany.com_code == this.companies[com].com_code) {
                            alert('이미 등록된 기업정보입니다.');
                            return false;
                        }
                    }// for


                    // === 신규기업등록
                    this.$http.post('/api/companies', {
                        com_code        : this.newCompany.com_code,
                        com_category  : this.newCompany.com_category,
                        com_name       : this.newCompany.com_name,
                        com_location   : this.newCompany.com_location
                    }).then(resp=>{
                        if (resp.data.result !== 'success') { // DB중복확인
                            alert('이미 등록된 기업입니다. 목록에서 확인해 주세요')
                            return
                        }
                        this.companies.push(this.newCompany);
                        // 입력 후 초기화
                        this.newCompany =  {
                            com_code                    : '',
                            com_name                   : '',
                            com_location               : '',
                            com_managerName    : '',
                            com_managerPosition : '',
                            com_managerPhone    : '',
                            com_category               : ''
                        };
                        alert('업체가 추가되었습니다.');
                        this.modal.newCompany=false; // 모달OFF

                    }).catch(e=>{
                        alert('일시적인 오류가 발생했습니다. 페이지를 새로고침 해주세요')
                    })
                    break;



                // === 선택추가
                case 't02':
                    // 기업목록이 비어있을때
                    if (this.companies.length < 1) {
                        this.companies = this.selectCompanies
                    }
                    // 기업코드 중복확인
                    else{
                        // 중복찾기 반복
                        for(var i in this.selectCompanies){
                            for(var ii in this.companies){
                                // 중복일 때 배열에서 삭제
                                if ( this.selectCompanies[i].com_code == this.companies[ii].com_code) {
                                    this.selectCompanies.splice(i, 1)
                                }//if
                            }//for
                        }//for
                        // this.companies = this.selectCompanies
                        this.selectCompanies.forEach(c=>{
                            this.companies.push(c)
                        })

                    }//else

                    this.selectCompanies=[];
                    // alert("기업이 추가되었습니다.")
                    this.modal.newCompany=false;
                    break;

            }
            this.thisTab2='t01';
            this.companiesLoad()
        },



        // === 세션스토리지 초기화 === //
        resetSessionStorage() {
            sessionStorage.clear('lecture-companies');
        },



        // === <input="file"> 초기화 === //
        resetFile(tagName){
            const input = tagName
            // const input = tagName
            input.type = 'text'
            input.type = 'file'
        },



        // === 파일 업로드 시 엑셀파일->JSON 변환 -> 수강생 추가 === //
        onFileChange(e){
            // 업체선택
            if( this.companies == '' || this.thisTab=='t01') {
                alert("기업 선택 후 수강생 등록이 가능합니다.");
                this.resetFile(this.$refs.fileInput) // 인자로 ref명 맵핑
                return
            }

            // 파일처리를 위한 준비 - 통신용으로 가공
            var form = new FormData();
            this.attachment.file = event.target.files[0];
            form.append('name', this.attachment.name);
            form.append('file', this.attachment.file);

            //서버에서 변환
            this.$http.post('/api/lectures/xlsToJson/'+this.selectSheet, form).then(resp=>{
                // 확장자 필터링
                if(resp.status !== 200){
                    alert("엑셀파일만 선택 가능합니다.");
                    return;
                }

                var xlsStduents = resp.data.data.obj.data; // 서버 - 추출데이터
                var stds=[] // 수강생 모델

                // 엑셀데이터 추출함수 호출 - 동기처리( Promise 사용 )
                this.xlsParser(xlsStduents)
                .then((text)=>{
                    if (this.companies[this.thisTabAddr].com_code == this.thisTab) {
                        // 배열이 아닐 때 배열선언
                        if (this.companies[this.thisTabAddr].students === undefined) {
                            this.companies[this.thisTabAddr].students = new Array()
                        }

                        stds = text
                        this.$set(this.companies[this.thisTabAddr], 'students', stds)
                        // 추가일경우 기존배열과 합치기
                        // 메인모델로 푸시
                        this.$set(this, 'tempStudents', stds.concat(this.tempStudents))

                        // 실시간 반영때문에 붙여둠 = > 반응형 해결되면 지워야함
                        // this.selectTab('f01',-1)
                    }// if
                }, (error)=>{
                    alert('사소한 오류가 발생했습니다. 다시 시도해 주세요 :( ')
                    return
                })

                this.resetFile(this.$refs.fileInput) // 인자로 ref명 맵핑

            });//$http

        },  // onFileChange()



        // === 데이터 추출함수 - 비동기(Promise사용으로 분리) === //
        xlsParser(xlsStduents){

            // promise로직 - 처리 후 resolve로 데이터 반환
            return new Promise((resolve, reject)=>{

                // 임시저장 모델
                this.students = [] // 모델 초기화 - 데이터 중복방지
                var student;
                var newId; // 신규학생아이디 생성

                // 필드배열번지 저장
                var companyAddr          =-1  // 소속
                var departmentAddr      =-1 // 부서
                var positionAddr            =-1 // 직급
                var nameAddr                =-1 // 이름
                var birthdayAddr            =-1 // 생년월일
                var genderAddr              =-1 // 성별

                // 필드/리스트 여부 확인
                var arrCheck;
                // var stdLength = this.students.length;

                // 엑셀데이터 파싱
                // 행반복
                xlsStduents.forEach((arr, arrIndex)=>{
                    // 추가된 수강생데이터 push
                    if (student) {
                        if (student.stu_name) {
                            student.id = !this.students.length ? 1 : this.students[this.students.length - 1].id + 1;
                            student.com_code = this.thisTab
                            this.students.push(student);
                        }
                    }
                    // 모델 초기화
                    student={};
                    // 열반복
                    arr.forEach((std, stdIndex)=>{

                        // 필드추출
                        switch (std) {
                            case '소속':
                            case '업체':
                            case '업체명':
                            case '회사':
                            case '회사명':
                                companyAddr = stdIndex;
                                break;

                            case '부서':
                            case '부서명':
                            case '팀':
                            case '팀명':
                                departmentAddr = stdIndex;
                                break;

                            case '직급':
                            case '직함':
                            case '직위':
                                positionAddr = stdIndex;
                                break;

                            case '성':
                            case '성별':
                                genderAddr = stdIndex;
                                break;

                            case '이름':
                            case '이름명':
                            case '성함':
                            case '성명':
                                nameAddr = stdIndex;
                                break;

                            // 수강생 데이터 삽입
                            default:
                                 if( companyAddr      ==stdIndex ||
                                     departmentAddr  ==stdIndex ||
                                      positionAddr        ==stdIndex ||
                                      genderAddr          ==stdIndex ||
                                      nameAddr            ==stdIndex ){

                                          switch(stdIndex){
                                            case companyAddr:
                                                student.stu_company = std;
                                            break;
                                            case departmentAddr:
                                                student.stu_department = std;
                                            break;
                                            case positionAddr:
                                                student.stu_position = std;
                                            break;
                                            case genderAddr:
                                                student.stu_gender = std;
                                            break;
                                            case nameAddr:
                                                student.stu_name = std;
                                            break;
                                      }

                                     }
                        }//switch

                    });

                }); //forEach()

                resolve(this.students)
            })//promise
        },  // xlsParser()








        // === 저장 === //
        save() {
            // console.log(this.companies);
            // console.log(this.tempStudents);
            // return

            // 입력 예외체러
            if (this.companies.length<1 || this.companies==undefined) {
                alert('기업과 수강생을 등록해 주세요')
                return
            }

            // 담당자 예외처리
            for( var ii in this.companies){
                if(this.companies[ii].com_managerName == undefined || this.companies[ii].com_managerPhone == undefined ){
                    alert(this.companies[ii].com_name+'업체의 '+'담당자 정보를 입력해 주세요')
                    return
                }
            }// for

            // 수강생 입력 예외처리
            if(this.tempStudents==undefined || this.tempStudents.length<1){
                alert('수강생을 등록해 주세요')
                return
            }



            // 팀빌딩이 이루어졌을경우 초기화 여부 확인
            if (sessionStorage.getItem('lecture-teamBuilding')) {
                if ( confirm('새로 저장 시 팀빌딩 페이지의 데이터가 초기화 됩니다. 진행하시겠습니까?') ) {
                    sessionStorage.removeItem('lecture-teamBuilding')
                }else{
                    return
                }
            }// if

            // 서버로
            this.$http.post('/api/lectures/create/manager', {
                companies : this.companies ,
                students : this.tempStudents,
                sessionCount : Number(sessionStorage.getItem('lecture-sessionCount')),
                lec_idx : this.lec_idx
            })
            .then(resp=>{
                var stdIdx = resp.data.studentsIdx
                for(var ii  in  this.companies){
                    for(var jj  in  this.companies[ii].students){
                        // 수강생 아이디 발행
                        this.companies[ii].students[jj].stu_idx = stdIdx
                        stdIdx++
                        // console.log(this.companies[ii].students[jj].stu_idx);
                    }// for
                }// for

                sessionStorage.setItem('lecture-companies', JSON.stringify(this.companies))
                sessionStorage.setItem('lecture-students', JSON.stringify(this.tempStudents))
                alert('기업/수강생 정보가 저장되었습니다.')
            })
            .catch(err=>{
                alert('error.')
            })

            // console.log((this.companies));

        },// save








        // === 페이지 이동 === //
        goTo() {
            if (!sessionStorage.getItem('lecture-companies')) {
                alert('저장 후 이동 가능합니다.')
                return
            }
            this.$ro.push({ path:'/lectures/new/team' })
        }// goTo







    }//method
    // ============ 메소드 ============ //
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }

    .newStudent td{
        padding:4px 5px;
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

    .viewAnimate {
        animation:fade-in-fwd .3s cubic-bezier(.39,.575,.565,1.000) both
    }
    @keyframes fade-in-fwd{0%{transform:translateZ(-80px);opacity:0}100%{transform:translateZ(0);opacity:1}}
</style>
