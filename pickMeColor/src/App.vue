<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Index from './components/Index.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue';

</script>

<template>
  <div flex="~" w-screen h-screen flex-col>
    <Header flex="~" justify-center items-center h-40 />
    <Index flex="~ 1" justify-center items-center />
    <Footer flex="~" justify-center items-center h-40 />
  </div>
</template>

<style scoped>

</style>
