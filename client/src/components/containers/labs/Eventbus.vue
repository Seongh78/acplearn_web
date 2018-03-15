<template lang="html">
<div class="">




            <h3>이벤트버스 <small>Event bus</small> </h3>
            <hr>
            <div class="">
                <button type="button" class="ui blue button" @click="add"><slot></slot>$emit</button>
                <button type="button" class="ui blue button" @click="save">데이터 저장</button>
                <button type="button" class="ui blue button" @click="confirm">데이터 확인</button>
                <button type="button" class="ui blue button" @click="confirm2">데이터2 확인</button>
            </div>






</div>
</template>

<script>

export default {
    name: 'Eventbus',



    data () {
        return {
            items: 0,
            stds: [
                {
                    "companyCode": "000-00000-01",
                    "companyName": "acastar",
                    "companyCategory": "IT",
                    "companyLocation": "Suyeong-ro 221, Nam-gu, Busan",
                    "employee": [
                            {
                                "empCode": "0001",
                                "empName": "박길동",
                                "empDepartment": "영업팀",
                                "empPosition": "팀장"
                            }
                    ]
                },
                {
                    "companyCode": "000-00000-02",
                    "companyName": "bluekings",
                    "companyCategory": "교육",
                    "companyLocation": "Suyeong-ro 221, Nam-gu, Busan",
                    "employee": [
                            {
                                "empCode": "0001",
                                "empName": "김길동",
                                "empDepartment": "영업팀",
                                "empPosition": "팀장"
                            }
                    ]
                }
            ]
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

        confirm2() {
            this.$EventBus.$emit('toto', 'students', 'a','b')
        },

        clos(){
                alert(1)
        },

        save() {
            // var jsonData = JSON.stringify(this.stds)
            this.$EventBus.$emit('save', 'students', this.stds)
        }
    }
}
</script>

<style lang="css">
</style>
