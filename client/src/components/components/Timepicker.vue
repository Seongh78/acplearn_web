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
        defaultTime : { // 기본값 - 시간
            type: [String,Number],
            default() { return '' }
        },

        defaultHour:{ // 기본값 - 시간
            type: [String,Number],
            default() { return '' }
        },
        defaultMinute:{ // 기본값 - 분
            type: [String,Number],
            default() { return '' }
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
        // console.log("this.defaultHour : ", this.defaultHour);
        this.rangeSetting()
        this.defaultSetting()
        this.hChange()
    }, // created

    updated(){
        // console.log("this.flag : ", this.flag);
        this.defaultSetting()
    },




    methods:{

        defaultSetting(){
            // if (this.defaultHour) {
            //     this.$set(this, 'valHour', this.defaultHour)
            //     this.$set(this, 'valMinute', this.defaultMinute)
            // }
            // console.log("this.defaultTime : ", this.defaultTime);
            // console.log('deffffff');
            if (this.defaultTime && this.defaultTime!='') {

                var d = this.defaultTime.split(":")
                this.$set(this, 'valHour', Number(d[0]?d[0]:0))
                this.$set(this, 'valMinute', Number(d[1]?d[1]:0))
            }
        },//

        rangeSetting(){
            var sh = this.starth // 시작시간
            var sm = this.startm// 시작 분
            var eh = this.endh // 종료시간
            var em = this.endm // 종료 분

            // 프롭스로 전달받았을때 문자열일 경우
            if ( typeof(sh)=="string" ) {
                var tem = this.starth.split(":")
                sh = Number(tem[0])
                // sm = Number(tem[1])
            }
            if ( typeof(eh)=="string" ) {
                var tem = this.endh.split(":")
                eh = Number(tem[0])
                // em = Number(tem[1])
            }

            // console.log(this.flag+": "+sh);

            // 기본값
            this.$set(this, 'valHour', sh)
            this.$set(this, 'valMinute', sm)


            for(var i=sh;  i<=eh;  i++ ){
                this.hh.push(i)
            }
            for(var j=sm;  j<=em;  j++ ){
                this.mm.push(j)
            }
        },

        hChange(){
            var timepicker = {
                h: this.valHour,
                m: this.valMinute
            }
            if (this.flag) {
                timepicker.flag= this.flag
            }
            // 입력받은 플래그값과 맵핑시킬 함수에서 선택값을 리턴받을 수 있음
            // console.log("this.valMinute : ", String((this.valHour?this.valHour:"00")+":"+(this.valMinute?this.valMinute:"00")+":00"));
            // console.log("this.valMinute : ", this.valMinute);
            this.$EventBus.$emit(this.flag, String((this.valHour?this.valHour:"00")+":"+(this.valMinute?this.valMinute:"00")+":00"))
        }

    }// methods

}
</script>

<style lang="css">
</style>
