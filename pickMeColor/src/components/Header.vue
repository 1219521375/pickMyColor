<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <nav flex="~" justify-between w-cen m-au>
    <!-- <img src="" alt="logo"> -->
    <div font="sans 700" text-40>Header</div>
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
</style>
