<template lang="html">
<div class="">
    <h4 class="ui icon header" v-bind:class="[size?size:'']">
        <i class="icon" style="font-size:2em; color:rgba(0,0,0, 0.25);" v-bind:class="[icon?icon:'exclamation circle ']"></i>
        <div class="content" style="color:rgba(0,0,0, 0.75);">
            {{
                headerText ? headerText : '해당 차시의 컨텐츠가 없습니다.'
            }}
            <div class="sub header">
                {{
                    subText ? subText : 'No contents. 404'
                }}
            </div>
        </div>
    </h4>

</div>
</template>

<script>
export default {
    name : 'NoContent',

    props : [
        'headerText',  // 메인 텍스트
        'sub-text',  // 서브 텍스트
        'icon',  // 사용할 아이콘
        'size' // 폰트 사이즈 - 기본은 H4사이즈

    ], // props

    created(){
        // console.log(this.headerText);
    }, // created()
}
</script>

<style lang="css">

.size1{ font-size: 1em !important; }
.size2{ font-size: 2em !important; }
.size3{ font-size: 3em !important; }
.size4{ font-size: 4em !important; }

</style>
