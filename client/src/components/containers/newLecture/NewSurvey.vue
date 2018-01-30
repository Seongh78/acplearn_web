<template>
    <div class="">

        <h1>{{msg}}</h1>

    </div>
</template>



<!-- Script -->
<script>
const page = 'NewSurvey';

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
