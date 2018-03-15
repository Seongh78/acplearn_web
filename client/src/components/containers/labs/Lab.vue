<template lang="html">
<div class="">

    <top-layout bg="true">
        <nav-bar bg="true"/>
        <page-title mainTitle="액플런 실험실" subTitle="" />
    </top-layout>



    <page-layout>
        <button type="button" class="ui green button" @click="callTest">call test{{ddd}}</button>
        <button type="button" class="ui blue button" @click="callTest2">call test2 {{ddd}}</button>
        <button type="button" class="ui red button" @click="$EventBus.$emit('close')">to child</button>

        <event-bus >
            <h3>{{ items }}</h3>
        </event-bus>

        <br>
        <br>
        <br>

        <react />


        <h4>Timepicker TEST</h4>
        <!-- <time-picker flag="dateTest" defaultTime="Mon Mar 05 2018 10:00:13 GMT+0900 (KST)" /> -->
        <time-picker flag="dateTest" v-bind:defaultTime="tdtd" />


    </page-layout>





</div>
</template>

<script>
import { Navbar, Card, PageTitle, TopLayout, PageLayout } from '@/components/components'
import Eventbus from './Eventbus'
import Reactivity from './Reactivity'
import Timepicker from './Timepicker'

export default {
    name: 'Lab',

    components: {
        'nav-bar' : Navbar,
        'card' : Card,
        'page-title' : PageTitle,
        'top-layout' : TopLayout,
        'page-layout' : PageLayout,
        'event-bus' : Eventbus,
        'react' : Reactivity,
        'time-picker' : Timepicker
    },

    data () {
        return {
            items:0,
            ddd:0,
            // tdtd : '2018-02-26 10:00:00'
            tdtd : '10:00:00'
        }
    }, //data

    created() {

        var aa = new Date("10:20:32")
        // console.log("aa.getHours : ");
        // console.log(aa.getTime());

        sessionStorage.clear();
        this.$EventBus.$on('add-item', this.addToCart)
        this.$EventBus.$on('save', this.save)
        this.$EventBus.$on('toto', this.toto)


        this.$EventBus.$on('dateTest', this.dtdt)
      },


      updated(){
        // console.log('uuuuuu');
      },



    methods: {

        dtdt(tt){
            this.$set(this, 'tdtd', tt)
            console.log("this.tdtd - ");
            console.log(this.tdtd);
        },

        callTest(){
            this.$http.get('/api/lectures/call/test').then(resp=>{
                if (resp.data.result== 200) {
                    this.$http.get('/api/lectures/call/test').then(r=>{
                        this.$set(this, 'ddd', 10)
                    })
                }
            })
        },

        callTest2(){
            this.$http.get('/api/lectures/call/test').then(resp=>{
                if (resp.data.result== 200) {
                    this.$http.get('/api/lectures/call/test').then(r=>{
                        this.$set(this, 'ddd', this.ddd+1)
                    })
                }
            })
        },

        addToCart(items) {
            this.items = items
        },

        toto(a,b,c){
            // console.log(a+': '+b+' : '+c);
        },

        save(storageName, jsonData) {
            // console.log(storageName+': ', jsonData);
            sessionStorage.setItem(storageName, JSON.stringify(jsonData));
        }
    },
}
</script>

<style lang="css">
</style>
