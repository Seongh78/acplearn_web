<template>
    <div class="hash">

        <!-- Navbar -->
        <top-layout bg="">
            <nav-bar bg=""/>
        </top-layout>


        <!-- Content -->
        <div id="sbcWrap" class="ui grid">

            <!-- Sidebar -->
            <side-navi  />
            <!-- Main content -->
            <div class="thirteen wide column centered rightContents" >
                <router-view/>
            </div>

        </div>
        <!-- /Content -->

        <foot-bar/>
    </div>
</template>

<script>
import { Navbar, Card, PageTitle, TopLayout, PageLayout, SideNavi, Footer } from '../components'

export default {
  name: 'SideBarContainer',
  components: {
      'nav-bar' : Navbar,
      'card' : Card,
      'page-title' : PageTitle,
      'top-layout' : TopLayout,
      'page-layout' : PageLayout,
      'side-navi' : SideNavi,
      "foot-bar":Footer
  },
  data () {
    return {
      msg: 'LectureContainer'
    }
  }
}
</script>



<!--  -->
<style scoped>

    #sbcWrap{
        padding:0;
        margin:0;
    }

    .rightContents{
        padding-top: 35px !important;
        padding-bottom: 55px !important;
        min-height: 700px !important;
    }


</style>
