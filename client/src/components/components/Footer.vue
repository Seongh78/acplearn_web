<template>
    <div class="container  foot">
        <p>COPYRIGHT ⓒ ACASTAR. ALL RIGHTS RESERVED.</p>
    </div>
</template>


<!--  -->
<script>
const page = "Footer"

export default {
    name: page,
    props:[],
    data(){
        return {
            msg: page
        }
    } // data()
}
</script>


<!--  -->
<style lang="css">
    .foot{
        background: #333;
        color:#fff;
        padding: 1.5%;
        text-align: center;
    }
</style>
