<template lang="html">
    <!-- 타임라인 컨테이나 -->
    <div class="container33">

        <!-- 타임라인 목록  -  세션 -->
        <div class="timeline-item" style="padding-left:20px;">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {
    name: "Timeline"
}
</script>

<style lang="css">

    .container33 {
        /*max-width: 1024px;
        width: 90%;
        margin: 0 auto;*/

        padding-left:8px;
    }

    .timeline-item {
        padding: 0 10px;
        position: relative;
        color: rgba(0, 0, 0, 0.7);
        border-left: 2px solid rgba(0, 0, 0, 0.25);
    }
    .timeline-item p {
        font-size: 1rem;
    }
    /*.timeline-item::before {
        content: attr(date-is);
        position: absolute;
        left: 1.5em;
        font-weight: bold;
        top: -.7em;
        display: block;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1.285rem;
    }*/
    .timeline-item::after {
        width: 17px;
        height: 17px;
        display: block;
        /*top: 1em;*/
        top: .1em;
        position: absolute;
        left: -9px;
        border-radius: 10px;
        content: '';
        border: 3px solid rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 5.5px rgba(255, 255, 255, 1);
        background: white;
    }
    /*.timeline-item:last-child {
        -o-border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0)) 1 100%;
        border-image: -webkit-gradient(linear, left top, left bottom, color-stop(60%, rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0))) 1 100%;
        border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0)) 1 100%;
    }*/


</style>
