<template>
    <div class="">

        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>팀빌딩</h2>
        </div>





        <div class="cardbox ui grid" style="margin:0; padding:25px;">

                <div class="six wide column" style="height:600px; overflow:auto; border:1px solid #f2f2f2;">
                    <h3>팀 목록</h3>

                        <table class="ui table celled">
                            <colgroup>
                                <col >
                                <col width="20%">
                                <col width="18%">
                                <col width="3%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>팀명</th>
                                    <th>인원</th>
                                    <th>수정</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="5">
                                        2조
                                    </td>
                                    <td>5명</td>
                                    <td>
                                        <button type="button" class="mini basic ui button teamEdit" style="padding: 5px 11px;">수정</button>
                                    </td>
                                    <td><input type="checkbox" name="" value=""></td>
                                </tr>
                            </tbody>
                        </table>


                </div>


                <div class="two wide column" style="text-align:center; padding:20% 2%;">
                    <a onclick="confirm('선택한 수강생을 추가하시겠습니까?')">
                        <div class="ui  animated button" tabindex="0" style="width:100%; background:#4374D9; color: #fff;">
                          <div class="visible content "><i class="long arrow left icon"></i></div>
                          <div class="hidden content">
                            추가하기
                          </div>
                        </div>
                    </a>
                        <br>
                        <br>
                    <a onclick="confirm('선택한 수강생을 제외하시겠습니까?')">
                        <div class="ui  animated button" tabindex="0" style="width:100%; background:#4374D9; color: #fff;">
                          <div class="visible content "><i class="long arrow right icon"></i></div>
                          <div class="hidden content">
                            제외하기
                          </div>
                        </div>
                    </a>
                        <br>
                        <br>
                        <br>
                    <a onclick="confirm('팀구성이 무작위로 매칭됩니다.')">
                        <div class="ui  animated button" tabindex="0" style="width:100%; background:#4374D9; color: #fff;">
                          <div class="visible content "><i class="random icon"></i></div>
                          <div class="hidden content">
                            랜덤배치
                          </div>
                        </div>
                    </a>
                </div>

                <div class="eight wide column" style="height:600px; overflow:auto; border:1px solid #f2f2f2;">
                    <h3>수강생</h3>
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

                            <tr>
                                <td class="center aligned"><input type="checkbox" name="" value=""></td>
                                <td class="center aligned">박길동</td>
                                <td class="center aligned">비전플랜</td>
                                <td class="center aligned">개발팀</td>
                                <td class="center aligned">팀장</td>
                            </tr>

                        </tbody>
                    </table>
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
                <button class="ui button">저장</button>
                <button class="ui primary button" onclick="move('/lectures/new/survey')">다음페이지</button>
            </div>




    </div>
</template>



<!-- Script -->
<script>
const page = 'NewTeam';

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
