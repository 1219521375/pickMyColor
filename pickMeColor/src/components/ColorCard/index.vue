<template>

  <div>

    <div class="card">
      <div class="cardBody-current">

      </div>
      <Slider v-model="cachAngle" orientation="circular" max="361" step="1" color="#FB278D" track-color="#FEFEFE"
        height="6" width="80%"></Slider>


      <div class="cardFooter">
        <div class="angle">
          <div></div>
          <span>{{cachAngle}}°</span>
        </div>
        <div class="colors">
          <div :key="index" v-for="(item, index) in colorArr">
            <div v-show="!colorPickerFlag" class="circular-current colorsItem" :style="'background-color:'+ item.color +';'">  </div>
            <button @click="delColor(index)">删除</button>
            <br/>
            <!-- 改变分界线的 <input v-model="item.distance" /> -->
          </div>
          
          <button @click="addcolor(true)">添加</button>
          <div @mouseover="colorPickerFlag = true" @mouseout="colorPickerFlag = false">
            <div v-show="!colorPickerFlag" class="colorsItem2 i-carbon:add-alt hover:i-carbon:add-filled">
            </div>
            
            <div v-show="colorPickerFlag ">
              
              <ColorPicker @changePickerColorBen="selectColor" :color="cacheColor" />

            </div>

          </div>

          <div class="colorsItem2 i-ion:options-outline hover:i-ion:options"></div>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import { ColorPicker } from 'vue3-ts-picker'
import Slider from "vue3-slider"


// 颜色的特征，距离和颜色
type colorType = {
  color: string,
  distance: number
}

const colorPickerFlag = ref<boolean>(false);

const color = ref<string>(' red, blue')

const colorArr = reactive<colorType[]>([
  {
    color: 'red',
    distance: -1
  }
])

//缓存的颜色
const cacheColor = ref("#ccc")
//旋转
const cachAngle = ref<number>(1)
const angle = ref<string>("1deg")
const addcolor = (flag: boolean) => {
  console.log(1)
  if (flag) {
    colorArr.push(
      {
        color: cacheColor.value,
        distance: -1
      }
    )
    console.log(colorArr);
  }
  colorPickerFlag.value = false
}

watch(() => cachAngle, (value, oldvalue) => {
  if (cachAngle.value) {
    angle.value = cachAngle.value + "deg"
    console.log(angle)
  } else {
    angle.value = 0 + "deg"
  }


}, { deep: true })

watch(() => colorArr, (value, oldvalue) => {
  let str = "";
  for (let i = 0; i < colorArr.length; ++i) {
    str += colorArr[i].color;
    if (colorArr[i].distance >= 0) {
      str += (" " + colorArr[i].distance + "%")
    }
    str += ","
  }
  color.value = str.substr(0, str.length - 1);
  console.log(color)
}, { deep: true })

const selectColor = (color: string) => {
  cacheColor.value = color

}


const delColor = (index: number) => {
  colorArr.splice(index, 1);
}

</script>
<style scoped>
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
  background-image: linear-gradient(v-bind(angle) , v-bind(color));
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
</style>