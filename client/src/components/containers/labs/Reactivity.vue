<template lang="html">
<div class="">




            <h3>반응형 <small>Reactivity</small> </h3>
            <hr>
            <button type="button" class="ui basic button" @click="Setter">Save</button>
            <h5>data:</h5>
            <p>{{ dd }}</p>
            <hr>






</div>
</template>

<script>

export default {
    name: 'Eventbus',



    data () {
        return {
            items: 0,
            dd:{}
        }
    }, // data


    created(){
        this.$EventBus.$on('close', this.clos)
    },

    methods: {
        add() {
            this.$EventBus.$emit('add-item', ++this.items)
        },

        confirm() {
            var da = JSON.parse(sessionStorage.getItem('students'))
            console.log(da);
        },

        clos(){
                alert(1)
        },

        Setter() {
            var ddd = [
                {name:'aa', age:22},
                {name:'bb', age:23},
                {name:'cc', age:24},
                {name:'dd', age:25},
                {name:'ee', age:26}
            ]

            this.$set(this.dd, 'stds', ddd)
        }
    }
}
</script>

<style lang="css">
</style>
