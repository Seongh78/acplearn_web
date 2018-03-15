<template lang="html">
    <div class="fields" style="padding-top:13px;">
        <div class="eight wide field" style="padding-right:3px;">
            <select class="ui fluid search dropdown timepicker" @change="hChange" v-model="valHour" >
                <option value="">시간</option>
                <option v-for="h in hh" v-bind:value="h" >{{h<10?'0':''}}{{h}}시</option>
            </select>
        </div>
        <div class="eight wide field" style="padding-left:3px;">
            <select class="ui fluid search dropdown timepicker" @change="hChange" v-model="valMinute" >
                <option value="">분</option>
                <option v-for="(m) in mm" v-bind:value="m" >{{m<10?'0':''}}{{m}}분</option>
            </select>
        </div>
    </div>
</template>

<script>
/*
Description>
1. 미리 저장된 값을 불러올땐 Props(defaultHour, defaultMinute)로 바인딩 시키면됨
2. 값 변경시 flag로 받은 값으로 이벤트버스 발송 - 상위에서 맵핑 필요
3. start*, end*로 값을 받을 경우 시간/분의 범위지정 가능
*/
export default {
    name: 'timepicker',

    props: {
        defaultTime:{
            default () { return '' }
        },

        starth:{ // 시간범위 - 시작시간
            type: [String,Number],
            default() { return 1 }
        },
        endh:{ // 시간범위 - 종료시간
            type: [String,Number],
            default() { return 24 }
        },
        startm:{ // 시간범위 - 시작분
            type: [String,Number],
            default() { return 0 }
        },
        endm:{ // 시간범위 - 종료분
            type: [String,Number],
            default() { return 59 }
        },

        flag:{
            type:String,
            default() { return 'timepicker'}
        }  // 시작시간, 종료시간 여부 확인 (미기재시 통합으로 인지)
    },

    data(){
        return{
            valHour : '',
            valMinute : '',
            hh   : [],
            mm : []
        }
    }, // data

    created(){
        // console.log("this.defaultTime : ", this.defaultTime);
        var aa = new Date(Date.parse(this.defaultTime))
        console.log("TIME: ", Date.parse(this.defaultTime));
        this.rangeSetting()
        this.defaultSetting()
        this.hChange()
    }, // created

    updated(){

        this.defaultSetting()
    },


    methods:{

        defaultSetting(){
            if (this.defaultTime) {
                var tt = new Date()
                this.$set(this, 'valHour', tt.getHours())
                this.$set(this, 'valMinute', tt.getMinutes())
            }
        },//

        rangeSetting(){
            for(var i=this.starth;  i<=this.endh;  i++ ){
                this.hh.push(i)
            }
            for(var j=this.startm;  j<=this.endm;  j++ ){
                this.mm.push(j)
            }
        },

        hChange(){

            var test = new Date()
            test.setHours(this.valHour)
            test.setMinutes(this.valMinute)

            console.log(test);

            // 입력받은 플래그값과 맵핑시킬 함수에서 선택값을 리턴받을 수 있음
            this.$EventBus.$emit(this.flag, test)
        }

    }// methods

}
</script>

<style lang="css">
</style>
