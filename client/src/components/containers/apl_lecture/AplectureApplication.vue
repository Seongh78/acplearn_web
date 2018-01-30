<template>
    <div class="">

        <div class="mainBanner">
            <nav-bar bg="true"/>

            <div class="container ">
                <div class="sloganWrap">
                    <h1>APL 수강신청</h1>
                    <p>Manage your account settings and set e-mail preferences.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>



<!-- Script -->
<script>
import { Navbar } from '@/components/components'
const page = 'AplectureApplication';

export default {
    name: page,
    components: {'nav-bar':Navbar},
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
