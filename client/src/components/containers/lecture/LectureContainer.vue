<template>
    <div class="hash">

        <top-layout bg="">
            <nav-bar bg=""/>
        </top-layout>


        <!-- <h1 class="ui header">{{msg}}</h1>
        <div class="">
            <a><router-link :to="{ path: '/lectures' }">List</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/lectures/detail' }">Detail</router-link></a>
            <a>/</a>
            <a><router-link :to="{ path: '/lectures/insert' }">Insert</router-link></a>
        </div>

        <hr> -->


        <!-- <div class="ui grid" style="margin:0; padding:0;">
            <div class="two wide column" style="padding:0;">
            <side-navi  />
            </div>
            <div class="fourteen wide column centered" style="background:#f1f1f1; ">
                <router-view/>
            </div>
        </div> -->


        <div class="ui grid" style="padding:0; margin:0;">
            <side-navi  />
            <div class="fourteen wide column" >
                <h1>asd</h1>
            </div>
        </div>









    </div>
</template>

<script>
import { Navbar, Card, PageTitle, TopLayout, PageLayout, SideNavi } from '@/components/components'

export default {
  name: 'LectureContainer',
  components: {
      'nav-bar' : Navbar,
      'card' : Card,
      'page-title' : PageTitle,
      'top-layout' : TopLayout,
      'page-layout' : PageLayout,
      'side-navi' : SideNavi
  },
  data () {
    return {
      msg: 'LectureContainer'
    }
  }
}
</script>


<style scoped>

</style>
