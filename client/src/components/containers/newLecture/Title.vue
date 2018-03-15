<template lang="html">
    <div class="cardbox" style="margin:10px 0; padding:25px; ">
        <h2>
            {{ title }}
            <button v-if="guide" @click="goto(guide)" class="ui icon button tiny" style="margin: 4px 0 0 5px; padding:7px; font-size:.5em; position:absolute;">
                <i class="help circle icon"></i> 가이드
            </button>
        </h2>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: ['title','guide'],
    data(){
        return{

        }
    },
    methods:{
        goto(link){
            console.log(link);
        }
    } // methods
}
</script>

<style lang="css">
</style>
