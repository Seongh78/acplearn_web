<template>

<div name="modal" id="modal-template">
    <div class="modal-mask">
        <div class="modal-wrapper" >
            <div class="modal-container" v-bind:class="w" >

                <div class="modalCon" v-bind:class="h">
                    <div class="modal-header">
                        <slot name="header">알림</slot>
                    </div>
                    <hr style="opacity:0.25;">
                    <div class="modal-body">
                      <slot name="body">default body</slot>
                    </div>
                </div>



                <div class="modal-footer">
                    <slot name="footer">
                    <!-- <button class="modal-default-button" @click="$emit('close')">OK</button> -->
                        <div class="ui two bottom attached buttons">
                            <div class="ui button" @click="$emit('close')">Close</div>
                            <!-- <div class="ui button blue">Confirm</div> -->
                        </div>
                    </slot>
                </div>

        </div>
      </div>
    </div>
</div>

</template>


<!--  -->
<script>
const page = "Modal"

export default {
    name: page,
    props:['mtitle' , 'w', 'h'],
    data(){
        return {
            msg: page,
            showModal: false
        }
    }, // data()

    methods:{
        closeModal(){
            // alert(1)
            // console.log(props.view);
        }
    }
}
</script>


<!--  -->
<style lang="css">
    .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}


.w-70{ width: 70%; }
.w-60{ width: 60%; }
.w-50{ width: 50%; }
.w-40{ width: 40%; }
.w-30{ width: 30%; }

.h-70,
.h-60,
.h-50,
.h-40,
.h-30{
    overflow:auto;
}

.h-70{  height:700px;  }
.h-60{  height:600px;  }
.h-50{  height:500px;  }
.h-40{  height:400px;  }
.h-30{  height:300px;  }



.modal-container {
  /*min-width: 300px;
  max-width: 1000px;*/
  margin: 0px auto;
  padding:0 1px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modalCon{
    padding: 20px 30px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
