<template lang="html">
    <div class="mainBanner container" v-bind:class="bg?'mainBannerImg':''">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TopLayout',
    props: [
        'bg'  // 배경이미지 사용여부
    ]
}
</script>

<style lang="css">

    .mainBanner{
        background: #3b485f;
        color:#fff;
    }
    .mainBannerImg{
        background-image: url('../../assets/newbg3.jpg');
        background-size: cover;
        background-position: center center;
    }


</style>
