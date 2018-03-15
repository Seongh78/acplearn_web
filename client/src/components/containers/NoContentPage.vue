<template lang="html">
    <div class="container viewLoadAnimation" style="text-align:center;">
        <br>
            <no-contents header-text="준비중인 페이지 입니다." size="size3" />
        <br>
        <br>
        <br>
    </div>

</template>

<script>
import { NoContents } from '../components'

export default {
    name : 'NoContentPage',

    components : {
        'no-contents' : NoContents
    }
}
</script>

<style lang="css">
</style>
