<template>
    <div class="">

        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>설문</h2>
        </div>




        <div class="cardbox ui grid" style="margin:0; padding:25px;">

                <div class="seven wide column" style="height:600px; overflow:auto; border:1px solid #f2f2f2;">
                    <h3>사용할 설문</h3>

                    <table class="ui celled table">
                        <colgroup>
                            <col width="5%">
                        </colgroup>
                        <tbody>
                        <tr>
                            <td><input type="checkbox" name="" value=""></td>
                            <td >
                                <h5> 본 교육에 대해 전반적으로 만족하십니까?</h5>
                                <p>매우아니다 / 아니다 / 보통이다 / 그렇다 / 매우그렇다</p>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" value=""></td>
                            <td >
                                <h5> 본 교육에 추가되었으면 하는 바람이 있다면 적어주세요</h5>
                                <p>(직접입력)</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>


                </div>


                <div class="two wide column" style="text-align:center; padding:20% 2%;">
                        <a onclick="confirm('선택한 문항을 삭제하시겠습니까?')">
                            <div class="ui  animated button" tabindex="0" style="width:100%; background:#4374D9; color: #fff;">
                              <div class="visible content "><i class="long arrow left icon"></i></div>
                              <div class="hidden content">
                                추가하기
                              </div>
                            </div>
                        </a>
                        <br>
                        <br>
                        <a onclick="confirm('선택한 문항을 삭제하시겠습니까?')">
                            <div class="ui  animated button" tabindex="0" style="width:100%; background:#4374D9; color: #fff;">
                              <div class="visible content "><i class="long arrow right icon"></i></div>
                              <div class="hidden content">
                                제외하기
                              </div>
                            </div>
                        </a>
                        <br>
                        <br>

                </div>

                <div class="seven wide column" style="height:600px; overflow:auto; border:1px solid #f2f2f2;">
                    <h3>저장된 설문</h3>
                    <a href="#" id="newSurvey">
                        <div class="ui  animated button" tabindex="0" style="width:80px; background:#4374D9; color: #fff;">
                          <div class="visible content "><i class="write icon"></i></div>
                          <div class="hidden content">새 문항</div>
                        </div>
                    </a>
                    <a onclick="confirm('선택한 문항을 삭제하시겠습니까?')">
                        <div class="ui  animated button" tabindex="0" style="width:80px; background:#F15F5F; color: #fff;">
                          <div class="visible content "><i class="sign out icon"></i></div>
                          <div class="hidden content">삭제</div>
                        </div>
                    </a>

                    <table class="ui celled table">
                        <colgroup>
                            <col width="5%">
                        </colgroup>
                        <tbody>
                        <tr>
                            <td><input type="checkbox" name="" value=""></td>
                            <td >
                                <h5> 본 교육에 대해 전반적으로 만족하십니까?</h5>
                                <p>매우아니다 / 아니다 / 보통이다 / 그렇다 / 매우그렇다</p>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" value=""></td>
                            <td >
                                <h5> 본 교육에서 불편한 점이 있었다면 무엇입니까?</h5>
                                <p>시설 / 강사 / 강의내용 / 시간 / 기타(직접입력)</p>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" value=""></td>
                            <td >
                                <h5> 강사에 대한 평점은 몇점인가요?</h5>
                                <p>1점 / 2점 / 3점 / 4점 / 5점</p>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" value=""></td>
                            <td >
                                <h5> 본 교육에 추가되었으면 하는 바람이 있다면 적어주세요</h5>
                                <p>(직접입력)</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>




                <br>
                <br>



            </div>

            <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
                <button class="ui button">저장</button>
                <button class="ui primary button" onclick="move('/lectures/new/done')">다음페이지</button>
            </div>




    </div>
</template>



<!-- Script -->
<script>
const page = 'NewSurvey';

export default {
    name: page,
    data () {
        return {
            msg: page
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
