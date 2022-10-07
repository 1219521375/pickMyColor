<script>
  /**
  * 获取滚动条位置
  */
  function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
      scrollPos = window.pageYOffset;
    }
    else if (document.compatMode && document.compatMode != 'BackCompat') {
      scrollPos = document.documentElement.scrollTop;
    }
    else if (document.body) {
      scrollPos = document.body.scrollTop;
    }
    return scrollPos;
  }
  function addEvent(obj,type,fn){
      if(obj.attachEvent){ //ie
          obj.attachEvent('on'+type,function(){
              fn.call(obj);
          })
      }else{
          obj.addEventListener(type,fn,false);
      }
  }
  export default {
    data() {
      return {
        timer: null, //settimeout
        showText: "",
        link: "https://github.com/2803713783/pickMyColor",
      };
    },
    mounted() {
      var that = this;
      addEvent(window, 'scroll', function(){
        let scrollPos = getScrollTop();
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        var clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        // console.log("scrollPos：", scrollPos);
        if (scrollPos + clientHeight >= scrollHeight) {
          //alert("页面已到底部")
          that.appear(
            "组长：张思艺   组员：刘伟利 胡国华 黄京苹 夏雨虹 王眺"
          );
        }
      });
      addEvent(window, 'scroll', function(){
        console.log("df");
      });
      // window.onscroll = function () {
      //   let scrollPos = getScrollTop();
      //   var scrollHeight =
      //     document.documentElement.scrollHeight || document.body.scrollHeight;
      //   var clientHeight =
      //     document.documentElement.clientHeight || document.body.clientHeight;
      //   // console.log("scrollPos：", scrollPos);
      //   if (scrollPos + clientHeight >= scrollHeight) {
      //     //alert("页面已到底部")
      //     that.appear(
      //       "组长：张思艺   组员：刘伟利 胡国华 黄京苹 夏雨虹 王眺"
      //     );
      //   }
      // }
    },
    methods: {
      appear(content) {
        const _this = this;
        this.showText = "";
        clearTimeout(this.timer);
        var speed = 150; //设置定时的速度 越来越快
        var count = 1;
        function changeContent() {
          _this.showText = content.substring(0, count); //截取字符串
          count++;
          if (count != content.length + 1) {
            speed -= 1;
            if (speed < 5) speed = 5;
            _this.timer = setTimeout(changeContent, speed);
          }
        }
        changeContent();
      },
    },
  };
</script>
  
<template>

  <hr class="hr-solid">
  <div class="Foot" pageset flex-1 justify-center items-center>
    <div flex justify-center h-30 >
      <div class="Group_info" h-30>Developed by： <span class="Group_name">PickMyColor小组</span> </div>
      <a class="github" i-carbon-logo-github href="https://github.com/2803713783/pickMyColor"></a>
    </div>
    <div h-5></div>

    <div class="Group_list">{{ showText }}</div>
  </div>
</template>

<style scoped>
/* 超小屏幕（手机，小于 768px） */
@media (max-width: 768px) {
  .hr-solid {
    margin-top: 5rem;
    border-top: 1px solid #020214;
  }
  .Foot {
    padding-top: 2rem;
    height: 10rem;
    padding-bottom: 20rem;
    margin-bottom: 10rem;
  }
  .github{
    height: 10rem;
    width: 10rem;
    padding-top: 8rem;
  }

  .Group_list {
    height: 20rem;
    padding-top: 5rem;
    padding-bottom: 2rem;
  }
}

/* 大屏幕（大桌面显示器） */
@media (min-width: 769px) {
  .hr-solid {
    border: 0;
    border-top: 1px solid #d0d0d5;
  }

  .Foot {
    padding: 2rem;
    height: 25rem;
    padding-bottom: 20rem;
    margin-bottom: 10rem;
  }
  .github{
    margin-left: 2.5rem;
  }

  .Group_info {
    line-height: 7.5rem;
  }

  .Group_name {
    font-weight: 800;
  }

  .TopButtion {
    position: fixed;
    right: 0.5rem;
    bottom: 4rem;
    display: inline-block;
    margin: 10rem;
    float: right
      /* background-color: @TranslucentWhitleBackg; */
      /* box-shadow:@FontColorGrayDeep 0px 0px 6px; */
  }

  .Group_list {
    padding-bottom: 5rem;
  }
}
</style>
