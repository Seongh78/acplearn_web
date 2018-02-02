<template>
  <div class="hash">



        <!-- 타이틀 -->
        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>강의개요 <small><button id="loadTemplate" class="ui button" @click="showModal = true">강의템플릿</button> <button id="loadTemplate" class="ui button" v-on:click.prevent="savedLecture">임시저장 강의</button></small></h2>
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
                    <td><input type="text" placeholder="제목을 입력해 주세요" style="width:95%;" v-model="summary.lec_title"></td>
                </tr>
                <tr>
                    <th class="borderTop">강의목적</th>
                    <td><textarea style="width:95%;" rows="6" placeholder="내용을 입력해 주세요" v-model="summary.lec_goal"></textarea></td>
                </tr>
                <tr>
                    <th class="borderTop">내용</th>
                    <td><textarea style="width:95%;" rows="6" placeholder="내용을 입력해 주세요" v-model="summary.lec_content"></textarea></td>
                </tr>
                <tr>
                    <th class="borderTop">기대효과</th>
                    <td><textarea style="width:95%;" rows="6" placeholder="내용을 입력해 주세요" v-model="summary.lec_effect"></textarea></td>
                </tr>

                <tr>
                    <th class="borderTop">계획서/자료</th>
                    <td>
                        <input id="file" type="file" placeholder="제목을 입력해 주세요" style="width:85%;" >
                        <!-- <input id="file" type="file" placeholder="제목을 입력해 주세요" style="width:85%;" v-model="summary.lec_introFile"> -->
                        <button type="button" for="file" class="ui primary button" style="width:10%; height:42.5px;">추가</button>
                    </td>
                </tr>
            </table>

        </div>

        <!-- 하단버튼 -->
        <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
            <button class="ui button">템플릿으로 저장</button>
            <button class="ui button" v-on:click.prevent="save">저장</button>
            <button class="ui primary button" onclick="move('/lectures/new/aplterm')">다음페이지</button>
        </div>
        <!-- content -->





    <!-- 임시저장 모달 -->
    <modal v-if="showModal" @close="showModal = false" w="w-50">
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
                      <th>저장날짜</th>
                    </tr>
                  </thead>
                  <tbody v-if="temp_summary">
                      <tr>
                        <td colspan="3">저장된 강의가 없습니다.</td>
                      </tr>

                  </tbody>
                  <tbody v-else>
                      <tr v-for="temp in temp_summary">
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



  </div>
</template>

<script>
import { Modal } from '../../components'

export default {
    name: 'NewSummary',

    components : {
        'modal' : Modal
    },

    data () {
        return {
            showModal: false,
            summaryImport:null,
            closeMsg:'적용',
            summary: {},
            temp_summary:{},
            errors: [],
            gt(){
                axios.get('/api/lectures/temp').then((resp)=>{
                    console.log(resp.data.data);
                    if (resp.data.data!='') {
                        this.temp_summary = resp.data.data;
                        onModal('savedLectures');
                        return;
                    }
                });//ajax
            }//gt
        }
    },//data

    mounted(){
            // this.summary.lec_title="123";
            // 임시저장 중인 강의가 있을 시 목록 선택화면 출력
            let lec = sessionStorage.getItem('lecture-summary');
            if(lec){
                this.summary = JSON.parse(lec);
                console.log(this.summary);
                return;
            }
            // this.gt();
    },

    methods:{
        onModal(){
            this.mactive = "active"
        }
    }
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
</style>
