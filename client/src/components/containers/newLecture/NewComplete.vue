<template>
    <div class="">

        <!-- ======================== 페이지 타이릍 ============================ -->
        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>
                결제
                <button class="ui icon button tiny" v-bind:class="(term?'green':'basic')" style="margin: 4px 0 0 5px; padding:7px; font-size:.5em; position:absolute;" @click.prevent="modal.agree=true">
                    <i class="check circle outline icon" v-if="!term"></i>
                    <i class="check circle icon" v-else></i>
                    약관보기
                </button>
            </h2>
        </div>
        <!-- ======================== /페이지 타이릍 ============================ -->

        <div class="cardbox ui grid" style="margin:0; padding:25px;">

            <div class="eleven wide column">
                <form class="ui form">
                    <div class="field">
                        <div class="inline fields">
                            <label style="font-size:1.15em;">
                                결제여부
                            </label>
                            &nbsp;
                            &nbsp;
                            <div class="field">
                                <div class="ui radio checkbox disabled">
                                    <input type="radio" name="fruit" tabindex="0" class="hidden">
                                    <label>선결제</label>
                                </div>
                            </div>
                            &nbsp;
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="fruit" tabindex="0" class="hidden" checked="" >
                                    <label>개설 후 결제</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <br>
                <br>



                <form class="ui form">
                  <h4 class="ui dividing header">결제자정보</h4>

                  <div class="field">
                    <label>Billing Address</label>
                    <div class="fields">
                      <div class="twelve wide field">
                        <input type="text" name="shipping[address]" placeholder="Street Address">
                      </div>
                      <div class="four wide field">
                        <input type="text" name="shipping[address-2]" placeholder="Apt #">
                      </div>
                    </div>
                  </div>
                  <div class="two fields">
                    <div class="field">
                      <label>State</label>
                      <select class="ui fluid dropdown">
                        <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                      </select>
                    </div>
                    <div class="field">
                      <label>Country</label>
                      <div class="ui fluid search selection dropdown">
                        <input type="hidden" name="country">
                        <i class="dropdown icon"></i>
                        <div class="default text">Select Country</div>
                        <div class="menu">
                    <div class="item" data-value="af"><i class="af flag"></i>Afghanistan</div>
                    <div class="item" data-value="ax"><i class="ax flag"></i>Aland Islands</div>
                    <div class="item" data-value="al"><i class="al flag"></i>Albania</div>
                  </div>
                       </div>
                    </div>
                  </div>

                  <br>

                  <h4 class="ui dividing header">카드정보</h4>
                  <div class="field">
                    <label>Card Type</label>
                    <div class="ui selection dropdown">
                      <input type="hidden" name="card[type]">
                      <div class="default text">Type</div>
                      <i class="dropdown icon"></i>
                      <div class="menu">
                        <div class="item" data-value="visa">
                          <i class="visa icon"></i>
                          Visa
                        </div>
                        <div class="item" data-value="amex">
                          <i class="amex icon"></i>
                          American Express
                        </div>
                        <div class="item" data-value="discover">
                          <i class="discover icon"></i>
                          Discover
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="fields">
                    <div class="seven wide field">
                      <label>Card Number</label>
                      <input type="text" name="card[number]" maxlength="16" placeholder="Card #">
                    </div>
                    <div class="three wide field">
                      <label>CVC</label>
                      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC">
                    </div>
                    <div class="six wide field">
                      <label>Expiration</label>
                      <div class="two fields">
                        <div class="field">
                          <select class="ui fluid search dropdown" name="card[expire-month]">
                            <option value="">Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>
                        </div>
                        <div class="field">
                          <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year">
                        </div>
                      </div>
                    </div>
                  </div>
                   <div class="ui segment">
                    <div class="field">
                      <div class="ui toggle checkbox">
                        <input type="checkbox" name="gift" tabindex="0" class="hidden">
                        <label>Do not include a receipt in the package</label>
                      </div>
                    </div>
                  </div>
                </form>




            </div>



            <div class="one wide column" ></div>



            <!-- 수강생목록 -->
            <div class="four wide column" >
                <h3 >
                    결제금액
                </h3>
                <h1>1,250,000원 <small style="font-size:0.5em;"> (부가세포함)</small></h1>
                <hr>
                <h5>세부항목</h5>
                    <div class="ui middle aligned divided list">
                      <div class="item">
                        <div class="right floated content">
                          <div class="ui ">50,000원</div>
                        </div>
                        <div class="content">
                          수수료
                        </div>
                      </div>
                      <div class="item">
                        <div class="right floated content">
                          <div class="ui ">50,000원</div>
                        </div>
                        <div class="content">
                          시스템이용료
                        </div>
                      </div>
                      <div class="item">
                        <div class="right floated content">
                          <div class="ui ">50,000원</div>
                        </div>
                        <div class="content">
                          리포트
                        </div>
                      </div>
                      <div class="item">
                        <div class="right floated content">
                          <div class="ui ">50,000원</div>
                        </div>
                        <div class="content">
                          부가세
                        </div>
                      </div>
                    </div>

                <hr>
                <button class="fluid ui  button" v-if="!term" disabled>약관에 동의해 주세요</button>
                <button class="fluid ui green button" @click="complete" v-else>등록완료</button>
            </div>

        </div>




<!-- ======================== Modal영역 ============================ -->

    <!-- 팀생성 모달 -->
    <modal v-if="modal.agree" @close="modal.agree = false" w="w-50" h="">
        <h3 slot="header">약관동의</h3>
        <div slot="body" class="ui form">

            <h4>이용안내</h4>
            <div class="" style=" overflow:auto; padding:15px 10px; background:#f5f5f5; height:150px;">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <h4>개인정보 취급방침</h4>
            <div class="" style=" overflow:auto; padding:15px 10px; background:#f5f5f5; height:150px;">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>
        <div slot="footer">
            <div class="ui two bottom attached buttons">
                <div class="ui button" @click.prevent="deagree">동의하지 않습니다</div>
                <div class="ui button green" @click.prevent="agree">동의합니다</div>
            </div>
        </div>
    </modal>

<!-- ======================== Modal ============================ -->


    </div>
</template>



<!-- Script -->
<script>
import { Modal, SearchForm, CardTitle } from '../../components'
const page = 'NewComplate';

export default {
    name: page,

    // ====== 컴포넌트 ====== //
    components: {
        'modal' : Modal,
        'search-form' : SearchForm,
        'card-title' : CardTitle
    },

    data () {
        return {
            lec_idx:0, // lecture id
            msg: page,
            modal:{
                agree:true
            },
            term:false // 약관동의 플래그
        }
    }, // data


    created() {
        const id = sessionStorage.getItem('lecture-idx')
        this.$set(this, 'lec_idx', id ? id : -1)

        this.$set(this.modal, 'agree', (this.term?false:true))

        this.$http.get('/api/users/session')
        .then(resp=>{
            console.log(resp);
        })
    }, // created


    methods: {

        // 약관동의
        agree() {
            this.$set(this, 'term', true)
            this.$set(this.modal, 'agree', false)
        }, // agree

        deagree() {
            this.$set(this, 'term', false)
            this.$set(this.modal, 'agree', false)
        },

        // 최종등록
        complete() {

            // 입력전 예외처리
            var lec={}
            lec.summary         = sessionStorage.getItem('lecture-summary')
            lec.terms               = sessionStorage.getItem('lecture-term')
            lec.timetables       = sessionStorage.getItem('lecture-timetables')
            lec.companies       = sessionStorage.getItem('lecture-companies')



            this.$http.post('/api/lectures/complete', {
                lec_idx: this.lec_idx
            })
            .then(resp=>{
                console.log(resp);
                alert('강의가 등록되었습니다. 결제를 완료하면 정식 개설이 가능합니다.')
                this.$ro.push({path:'/lectures/wait'})
            }).catch(err=>{
                alert("사소한 문제가 발생했습니다.")
                console.log(err);
            })// $http

        } // complete()



    }// methods
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }
</style>
