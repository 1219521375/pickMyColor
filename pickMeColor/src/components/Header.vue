<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <nav flex="~" justify-between w-cen m-au>
    <!-- <img src="" alt="logo"> -->
    <div>
      <div font="sans 700" text-60>
        PickMyColor
      </div>
      <div class="bar" m-au w-cen />
    </div>
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
  </nav>
</template>

<style scoped>
.nav {
  margin: auto;
}

.bar {
  height: 7px;
  width: 50px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #6f8681, #D9AFD9, #97D9E1);
  background-size: 700% 700%;
  animation: barcolor 5s ease infinite;
  border-radius: 16px;

}

@keyframes barcolor {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
