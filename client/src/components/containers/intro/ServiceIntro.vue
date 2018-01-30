<template>
    <div class="container">

        <top-layout bg="true">
            <nav-bar bg="true"/>
            <page-title mainTitle="서비스소개" subTitle="" />
        </top-layout>



        <page-layout>


                <div class="" >
                    <div class="" style="width: 33%; text-align:center; display:inline-block;">
                        <img src="http://www.freemoa.net/public/images/dgm/prj_process_01.png" alt="">
                        <h2>Solution</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="" style="width: 33%; text-align:center; display:inline-block;">
                        <img src="http://www.freemoa.net/public/images/dgm/prj_process_02.png" alt="">
                        <h2>Standard</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="" style="width: 33%; text-align:center; display:inline-block;">
                        <img src="http://www.freemoa.net/public/images/dgm/prj_process_03.png" alt="">
                        <h2>Share</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <hr>
                <br>
                <br>
                <div class="" >
                    <h2>Solution</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br>

                    <h2>Standard</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br>

                    <h2>Share</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>


        </page-layout>





    </div>
</template>



<!-- Script -->
<script>
import { Navbar, Card, PageTitle, TopLayout, PageLayout } from '@/components/components'
const page = 'Guide';

export default {
    name: page,
    components: {
        'nav-bar' : Navbar,
        'card' : Card,
        'page-title' : PageTitle,
        'top-layout' : TopLayout,
        'page-layout' : PageLayout
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
