<script setup>
import MainBody from './components/MainBody.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue';

</script>

<template>
  <div flex="~" w-screen h-screen flex-col font-sans text="center gray-700 dark:gray-200">
    <Header />
    <MainBody />
    <Footer />
  </div>
</template>

<style scoped>

</style>
