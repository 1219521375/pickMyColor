<script setup lang='ts'>

import { computed, reactive, ref, watch } from 'vue'
import { ColorPicker } from 'vue3-ts-picker'
import Slider from 'vue3-slider'

// 颜色的特征，距离和颜色
interface colorType {
  color: string,
  distance: number,
  colorPickerFlag: boolean,
  circularFlag: boolean
}


const colorPickerFlag = ref<boolean>(false)


const color = ref<string>(" red, blue");

const colorArr = reactive<colorType[]>([
  {

    color: 'red',
    distance: -1,
    colorPickerFlag: false,
    circularFlag: true
  }
])


// 缓存的颜色
const cacheColor = ref("#ccc");
// 旋转

const cachAngle = ref<number>(1)
const angle = ref<string>('1deg')
const copyIcon = ref<boolean>(false)
const copyText = ref<boolean>(false)
const copied = ref<boolean>(false)

const copiedText = computed(() => {
  return copied.value ? 'Copied' : 'Copy CSS'
})

const onSuccess = () => {
  alert('Copied Success')
}

const onError = () => {
  alert('Copied Error')
}

const addcolor = (flag: boolean) => {
  if (colorArr.length >= 6){
    return
  }
  if (flag) {
    colorArr.push(
      {
        color: cacheColor.value,
        distance: -1,
        colorPickerFlag: false,
        circularFlag: true
      }
    )

  }

}

watch(() => cachAngle, (value, oldvalue) => {
  if (cachAngle.value) {
    angle.value = `${cachAngle.value}deg`
    console.log(angle)
  }
  else {
    angle.value = `${0}deg`

  }
  colorPickerFlag.value = false;
};

watch(
  () => cachAngle,
  (value, oldvalue) => {
    if (cachAngle.value) {
      angle.value = `${cachAngle.value}deg`;
      console.log(angle);
    } else {
      angle.value = `${0}deg`;
    }
  },
  { deep: true }
);

watch(
  () => colorArr,
  (value, oldvalue) => {
    let str = "";
    for (let i = 0; i < colorArr.length; ++i) {
      str += colorArr[i].color;
      if (colorArr[i].distance >= 0) str += ` ${colorArr[i].distance}%`;

      str += ",";
    }
    color.value = str.substr(0, str.length - 1);
    console.log(color);
  },
  { deep: true }
);

let circularIndex = ref<number>(-1)
const selectColor = (color: string) => {

  if (circularIndex.value >= 0) {
    colorArr[circularIndex.value].color = color + ''
    console.log(circularIndex, color)
  }

  //
}
const openOrDown = (index: number, flag: boolean) => {
  let i = 0
  circularIndex.value = index
  for (; i < colorArr.length; i++) {
    if (i != index) {
      colorArr[i].circularFlag = flag
    }
  }
}


const delColor = (index: number) => {
  colorArr.splice(index, 1);
};
</script>

<template>
  <div>
    <div class="card">

      <div class="cardBody-current" @mouseenter="copyIcon = !copyIcon" @mouseleave="copyIcon = !copyIcon">
        <button v-if="copyIcon" v-clipboard:copy="cacheColor" v-clipboard:success="onSuccess"
          v-clipboard:error="onError" absolute float-left left-5 top-5 @click="copied = true">
          <div color-white flex="~" justify-center items-center @mouseenter="copyText = !copyText"
            @mouseleave="copyText = !copyText">
            <div i-material-symbols-content-copy-outline />
            <div v-if="copyText">
              <span text-size-5xl>{{ copiedText }}</span>
            </div>
          </div>
        </button>
        <Slider v-model="cachAngle" orientation="circular" max="361" step="1" color="#FB278D"
          track-color="rgba(255,255,255,0.4)" height="10" width="85%" />

      </div>
      <div class="cardFooter">
        <div class="angle">
          <span>{{ cachAngle }}°</span>
        </div>
        <div class="colors">
          <div v-for="(item, index) in colorArr" :key="index">

            <div v-show="!item.colorPickerFlag && item.circularFlag" class="circular-current colorsItem"
              :style="`background-color:${item.color};`"
              @click="item.colorPickerFlag = !item.colorPickerFlag; openOrDown(index,false)" />


            <div v-show="item.colorPickerFlag && item.circularFlag"
              @dblclick="item.colorPickerFlag=!item.colorPickerFlag; openOrDown(index,true); circularIndex=-1">
              <ColorPicker :color="cacheColor" @changePickerColorBen="selectColor" />
            </div>
          </div>

          <div @click="addcolor(true)">

            <div v-show="!colorPickerFlag" class="colorsItem2 i-carbon:add-alt hover:i-carbon:add-filled" />

            <!-- <div v-show="colorPickerFlag ">
              <ColorPicker :color="cacheColor" @changePickerColorBen="selectColor" />
            </div> -->

          </div>

          <div class="colorsItem2 i-ion:options-outline hover:i-ion:options" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 超小屏幕（手机，小于 768px） */
@media (max-width: 768px) {

  .card {
    width: 100%;
    height: 100%;
    padding: 1.5vw;
  }

  .cardBody-current {
    position: relative;
    margin: auto;
    width: 60vw;
    height: 60vw;
    border-radius: 16px;
    background-image: linear-gradient(v-bind(angle), v-bind(color));
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardFooter {
    height: 10vw;
    width: 60vw;
    margin: auto;
    padding-top: 2vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .angle {
    height: 100%;
    width: auto;
    font-size: 4rem;
    color: #888888;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .colors {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .colorsItem {
    width: 20px;
    height: 20px;
    margin: 5px;
  }

  .colorsItem2 {
    width: 29px;
    height: 29px;
    margin: 4px;
    color: #d4d4d4;
  }

  .circular-current {
    /* background-color: #fbc96e; */
    border-radius: 50%;
    border: #d4d4d4 solid 2px;
  }

}

/* 大屏幕（大桌面显示器） */
@media (min-width: 769px) {
  .card {
    width: 100%;
    height: 100%;
    padding: 1.5vw;
  }

  .cardBody-current {
    position: relative;
    margin: auto;
    width: 18vw;
    height: 16vw;
    border-radius: 16px;
    background-image: linear-gradient(v-bind(angle), v-bind(color));
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardFooter {
    height: 4vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .angle {
    height: 100%;
    width: auto;
    font-size: 4rem;
    color: #888888;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .colors {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .colorsItem {
    width: 20px;
    height: 20px;
    margin: 5px;
  }

  .colorsItem2 {
    width: 29px;
    height: 29px;
    margin: 4px;
    color: #d4d4d4;
  }

  .circular-current {
    /* background-color: #fbc96e; */
    border-radius: 50%;
    border: #d4d4d4 solid 2px;
  }
}
</style>
