<template>
    <div class="TopButtion"  v-show="Show">
        <div class="Item" m-5 @click="BackTop()"> <div i-carbon-up-to-top></div> </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        Show:false
      }
    },
    methods:{
      BackTop:function () {
        var ScrollHeigh = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
        Timer = setInterval(function () {
          if(ScrollHeigh < 0){
            clearInterval(Timer);
          }
          ScrollHeigh -= 10;
          document.documentElement.scrollTop = ScrollHeigh;
          window.pageYOffset = ScrollHeigh;
        },3);
      }
    },
    mounted:function () {
      var That = this;
      window.onscroll = function () {
        if(document.documentElement.scrollTop > 500){
          That.Show = true;
        }
        if(document.documentElement.scrollTop < 500){
          That.Show = false;
        }
      }
    }
  }
</script>

<style >
    /* pc端 */
    @media only screen and (min-device-width : 768px) {
        .TopButtion{
            position: fixed;
            right: 0.5rem;
            bottom: 4rem;
            display: inline-block;
            margin: 10rem;
            box-sizing: border-box;
            padding: 4px;
            background-image: linear-gradient(white, white), linear-gradient(53deg,rgba(125,144,255,1),rgba(207,146,255,1));
            background-clip: content-box,padding-box;
            border-radius:50%;
            /* float: right */
            /* background-color: @TranslucentWhitleBackg; */
            /* box-shadow:@FontColorGrayDeep 0px 0px 6px; */
        }
    }
    /*mobile端*/
    /* @media only screen and (max-device-width : 768px) {
        .Airplane{
            display: none;
        }
    }
    .Item{
        width: 1.3rem;
        height: 1.3rem;
        margin: 0.5rem;
        cursor:pointer;
    }
    .IconfontSizeAirplane{
        font-size: 1.3rem;
        color:@FontColorGrayDeep;
    } */ 
</style>