<template>
    <div id="app " class="">
        <router-view />
    </div>
</template>

<script>
    // import  {Footer}  from '@/components/components'
    export default {
        name: 'App',
        // components: { "foot-bar":Footer }

        created(){
            // this.autoLogin()
        },

        updated(){
            // this.autoLogin()
        },

        methods: {
            autoLogin(){
                // 자동로그인
                this.$http.get('/api/users/session')
                .then(res=>{
                    console.log('Auto Login OK');
                }).catch(e=>{
                    this.$http.post('/api/users/login', {id:'admin',pw:'123123'})
                    .then(resp=>{
                    })
                })
            }
        }// methods
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        min-width: 1100px !important;
    }

    .container-limit{
        max-width: 1200px;
    }

    .mainBanner{
        background: #3b485f;
        color:#fff;
        background-image: url('http://localhost:3000/images/newbg.png');
        background-size: cover;
        background-position: top center;
    }

    #mcon{
        width: 100%;
        min-width: 900px;
        margin:0 auto;
        padding:0;
        /*height: 100%;*/
    }
        .sloganWrap{
            color:#fff;
            width: 70%;
            margin:0 auto;
            padding: 3.5% 5%;
            text-align: center;
        }
        .sch{
            width:100%; padding:15px;
            background: rgba(255,255,255,0.07);
            border:1px solid #fff;
            color: #fff;

        }

    .cardbox{
        background: #fff;
        margin:10px;
        padding:10px;
        box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.08);
    }
</style>
