<template>
    <div class="viewLoadAnimation">

        <top-layout bg="true">
            <nav-bar bg="true"/>
            <page-title mainTitle="Acplearn" subTitle="Premium flipped learning management system Acplearn" />
        </top-layout>




        <page-layout>
            <div class="container" style="text-align:center;">
                <no-contents size="size3" header-text="잘못된 접근경로 입니다." />
            </div>
        </page-layout>




    </div>
</template>



<!-- Script -->
<script>
import { Navbar, Card, PageTitle, TopLayout, PageLayout, NoContents } from '@/components/components'
const page = 'Notice';

export default {
    name: page,
    components: {
        'nav-bar' : Navbar,
        'card' : Card,
        'page-title' : PageTitle,
        'top-layout' : TopLayout,
        'page-layout' : PageLayout,
        'no-contents' : NoContents
    },
    data () {
        return {
            msg: page,
            notices: [
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
                {title:'공지사항 테스트', date:'2018-01-22', writer: '관리자'},
            ]
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
