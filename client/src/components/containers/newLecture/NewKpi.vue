<template>
    <div class="">

        <div class="cardbox" style="margin:10px 0; padding:25px; ">
            <h2>
                KPI
                <button class="ui icon button tiny" style="margin: 4px 0 0 5px; padding:7px; font-size:.5em; position:absolute;">
                    <i class="help circle icon"></i> 가이드
                </button>
            </h2>
        </div>



        <!-- 컨텐츠 -->
    <div class="cardbox ui grid" style="margin:0; padding:25px;">

        <!-- 좌측 -->
        <div class="nine wide column" style="height:600px; overflow:scroll; border:1px solid #f2f2f2;">

            <div class="" v-for="(kpi, kpiIndex) in kpiGroup">
                <h3>{{ kpi.cc1_name }}</h3>
                <div class="ui form" >
                    <div class="ui checkbox" v-for="(item, listIndex) in kpi.list">
                      <input type="checkbox" v-bind:id="item.cc2_idx" v-bind:name="item.cc2_idx" v-bind:value="{cc2_idx: item.cc2_idx, cc2_name: item.cc2_name}" v-model="checkedKPI">
                      <label :for="item.cc2_idx">{{ item.cc2_name }}&nbsp;&nbsp;</label>
                    </div>
                </div>
                <br>
                <hr style="opacity:0.15">
                <br>
            </div>
            <!-- <div class="" >
                <div class="ui form" >
                    <div class="ui checkbox" v-for="(item, listIndex) in kpiGroup">
                      <input type="checkbox" v-bind:id="item.cc2_idx" v-bind:name="item.cc2_name" v-bind:value="item" v-model="checkedKPI">
                      <label :for="item.cc2_idx">{{ item.cc2_name }}&nbsp;&nbsp;</label>
                    </div>
                </div>
                <br>
                <hr style="opacity:0.15">
                <br>
            </div> -->


        </div>
        <!-- /좌측 -->


        <!-- 우측 -->
        <div class="seven wide column" style="height:600px; overflow:scroll; border:1px solid #f2f2f2;">
            <div class="">
                <a class="ui label large viewAnimate" style="margin:0 5px 5px 0;" v-for="(kpi, index) in checkedKPI">{{kpi.cc2_name}}<i class="delete icon" @click="unCheck(index)"></i></a>
            </div>
            <!-- <div class="">
                <a class="ui label large viewAnimate" style="margin:0 5px 5px 0;" v-for="(kpi, index) in checkedKPI">{{kpi}}<i class="delete icon" @click="unCheck(index)"></i></a>
            </div> -->
        </div>
        <!-- /우측 -->


        <br>
        <br>
    </div>
    <!-- 컨텐츠 -->



    <!-- 하단 -->
    <div class="cardbox" style="margin:10px 0; padding:25px; text-align:center;">
        <button class="ui button" @click.prevent="save">저장</button>
        <button class="ui primary button" @click.prevent="goTo">다음페이지</button>
    </div>



    </div>
</template>



<!-- Script -->
<script>
const page = 'NewKpi';

export default {
    name: page,

    data () {
        return {
            lec_idx:0,
            msg: page,
            kpiGroup: [
                {
                    title: '리더십',
                    list: ['리더십', '커뮤니케이션', '팔로워십', '조직활성화']
                },
                {
                    title: 'CS',
                    list: ['인사', '상담', '서비스마인드', '고객응대']
                },
                {
                    title: '산업안전',
                    list: ['화제안전', '실내안전', '전기안전', '현장점검']
                }
            ],
            kp:[],
            checkedKPI:[],
            checkedKPI2:[]
        }//return
    }, //data


    watch: {
        // KPI개수 설정
        checkedKPI(hook) {
            var leng = hook.length
            if (leng > 5) {
                alert("KPI는 최대 5개까지 설정할 수 있습니다.");
                this.checkedKPI.splice(leng-1,1)
                return;
            }
        }//
    },

    created(){
        const id = sessionStorage.getItem('lecture-idx')
        this.$set(this, 'lec_idx', id ? id : -1)
        console.log("this.lec_idx : ",this.lec_idx);
        this.initialData()

        console.log(this.$ro);
    },


    mounted(){

        let kpi = JSON.parse(sessionStorage.getItem('lecture-kpi'));
        this.$set(this, 'checkedKPI', (kpi ==null) ? [] : kpi )
        console.log(this.checkedKPI);
    }, // mounted

    methods: {

        // 초기데이터 - KPI 목록
        initialData() {
            this.$http.get('/api/lectures/initial')
            .then(resp=>{
                // console.log(resp.data);
                // var category = resp.data.category
                var category = resp.data.mainCategory
                this.$set(this, 'kpiGroup', category)
            })
            .catch(e=>{
                alert('사소한 문제가 발생했습니다. 페이지를 새로고침 해주세요')
            })
        }, // initialData



        // 체크해제 클릭 시
        unCheck(id){
            this.checkedKPI.splice(id, 1)
        }, // unCheck

        // 저장
        save(){
            // console.log(this.checkedKPI);
            // return

            this.$http.post('/api/lectures/create/kpi', {kpi: this.checkedKPI, lec_idx: this.lec_idx})
            .then(resp=>{
                console.log(resp);
                sessionStorage.setItem('lecture-kpi', JSON.stringify(this.checkedKPI));
                alert('KPI가 저장되었습니다.')
            }).catch(err=>{
                console.log(err);
                alert('Error.')
            })


        },  // save

        goTo(){
            if (!sessionStorage.getItem('lecture-kpi')) {
                alert('저장 후 이동 가능합니다.')
                return
            }
            this.$ro.push({path:'/lectures/new/students'})
        }
    }
}
</script>



<!-- Style -->
<style scoped>
    a {
        color: #42b983;
    }


    .checkbox,
    label{
        cursor: pointer !important;
    }



    .viewAnimate {
      animation:fade-in-fwd .3s cubic-bezier(.39,.575,.565,1.000) both
    }
    @keyframes fade-in-fwd{0%{transform:translateZ(-80px);opacity:0}100%{transform:translateZ(0);opacity:1}}
</style>
