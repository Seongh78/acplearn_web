<template>
    <div class="">

        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>APL기간 </h2>
        </div>


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
                    <td><input type="date" placeholder="시작일을 입력해 주세요" style="width:90%;" v-model="terms.start_date"></td>
                    <td><input type="date" placeholder="종료일을 입력해 주세요" style="width:90%;" v-model="terms.end_date"></td>
                    <td>
                        <input type="number" value="0" style="width:55%;" v-model="cc" min="0" max="100" step="1">
                        <button type="button" class="ui primary button" @click.prevent="addSession">확인</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>




        <div class="cardbox" style="margin:10px 0; padding:25px; min-height:350px;">

            <h3>상세 기간</h3>
            <table class="ui celled table form">
                <colgroup>
                    <col width="7%">
                    <col width="20%">
                    <col width="20%">
                    <col width="53%">
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
                      <td>
                          <input type="date" placeholder="제목을 입력해 주세요" style="width:95%;" v-model="terms.sessionDetail[i].start">
                      </td>
                      <td>
                          <input type="date" placeholder="제목을 입력해 주세요" style="width:95%;" v-model="terms.sessionDetail[i].end">
                      </td>
                      <td>
                          <input type="text" placeholder="장소를 입력해 주세요" style="width:100%;">
                      </td>
                    </tr>
                </tbody>
            </table>

        </div>



        <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
            <button class="ui button" @click.prevent="save">저장</button>
            <button class="ui primary button" onclick="move('/lectures/new/timetable')">다음페이지</button>
        </div>


    </div>
</template>



<!-- Script -->
<script>
const page = 'NewAplterm';

export default {
    name: page,
    data () {
        return {
            msg: page,
            cc:0,
            termCount:0,
            terms: { // apl기간 model
                start_date : '',
                end_date  : '',
                location    : '',
                sessionCount:0,
                sessionDetail: []
            },

            sd: []
        }
    }
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }
</style>
