<template lang="html">
    <div class="ui grid viewLoadAnimation">
        <div class="nine wide column centered page-layout">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageLayout',
    props: ['width'],
    data(){
        return{
        }
    }//data
}
</script>

<style lang="css">

    .page-layout{
        margin-top:35px !important;
        margin-bottom:55px !important;
        /*padding-bottom:5% !important;*/
    }


</style>
