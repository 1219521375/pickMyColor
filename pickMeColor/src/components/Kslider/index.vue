<!-- eslint-disable @typescript-eslint/no-use-before-define -->
<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    min?: number
    max?: number
  }>(),
  {
    modelValue: 0,
    min: 0,
    max: 100,
  }
)

const emit = defineEmits<{
  (event: 'update:modelValue', value: number): void
}>()

const isMoving = ref(false)

// 百分制的进度
const process = computed(
  () =>
    /** 先减去最小值，再除以 最大值 和 最小值 的差，最后乘以 100 */
    (((props.modelValue ?? 0) - props.min ?? 0)
      / ((props.max ?? 100) - (props.min ?? 0))) * 100
)
// 进度条的样式，距离右边的百分比
const barStyle = computed(() => ({
  right: `${100 - process.value}%`,
}))
// 滑块的样式，距离左边的百分比
const btnStyle = computed(() => ({
  left: `${process.value}%`,
}))

// 记录滑动槽的位置
const trackInfo = {
  x: 0,
  width: 0,
}
// 鼠标按下事件
const handleMouseDown = (e: MouseEvent) => {
  const trackEl = e.currentTarget as HTMLElement
  const { x, width } = trackEl.getBoundingClientRect()
  trackInfo.x = x
  trackInfo.width = width
  // 向 window 添加鼠标移动和释放事件
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  window.addEventListener('mousemove', handleMouseMove)
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  window.addEventListener('mouseup', handleMouseUp)
  // 鼠标点击时也要计算一下位置
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  calcValue(e.clientX)
}
// 鼠标移动事件
const handleMouseMove = (e: MouseEvent) => {
  isMoving.value = true
  calcValue(e.clientX)
}
// 鼠标释放事件
const handleMouseUp = () => {
  isMoving.value = false
  // 鼠标释放时，移除 window 上的事件
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseup', handleMouseUp);
}

const calcValue = (clientX: number) => {
  // 限制进度条的范围在 0 和 1 之间
  const percent = Math.max(
    0,
    Math.min(1, (clientX - trackInfo.x) / trackInfo.width)
  )
  emit(
    'update:modelValue',
    percent * ((props.max ?? 100) - props.min ?? 0) + (props.min ?? 0)
  )
}
</script>

<template>
  <div class="k-slider">
    <div class="k-slider-track" :class="{ 'is-moving': isMoving }" @mousedown="handleMouseDown">
      <!-- 进度条 -->
      <div class="k-slider-bar" :style="barStyle"></div>
      <!-- 进度滑块 -->
      <div class="k-slider-btn" :style="btnStyle"></div>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --slider-height: 50px;
  --slider-track-height: 40px;
  --slider-btn-width: 60px;
  --slider-btn-height: 60px;
  --slider-track-bg-color: rgb(174, 174, 174);
  --slider-bar-bg-color: rgb(84, 174, 252);
  --slider-btn-bg-color: rgb(13, 105, 244);
}

.k-slider {
  position: relative;
  width: 100%;
  height: var(--slider-height);

  .k-slider-track {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(var(--slider-height) / 2 - var(--slider-track-height) / 2);
    height: var(--slider-track-height);
    background-color: var(--slider-track-bg-color);
    cursor: pointer;

    .k-slider-bar,
    .k-slider-btn {
      transition: all 0.3s;
    }

    &.is-moving {

      .k-slider-bar,
      .k-slider-btn {
        transition-duration: 0ms;
      }
    }

    .k-slider-bar {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: var(--slider-bar-bg-color);
    }

    .k-slider-btn {
      position: absolute;
      top: calc(var(--slider-track-height) / 2 - var(--slider-btn-height) / 2);
      width: var(--slider-btn-width);
      height: var(--slider-btn-height);
      transform: translateX(-50%);
      border-radius: 4px;
      background-color: var(--slider-btn-bg-color);
      cursor: pointer;
    }
  }
}
</style>
