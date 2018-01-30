<template>
    <div class="">

        <h1>{{msg}}</h1>

    </div>
</template>



<!-- Script -->
<script>
const page = 'AplectureDetail';

export default {
    name: page,
    created(){

    },
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
