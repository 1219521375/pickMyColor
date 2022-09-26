<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Index from './components/Index.vue'
import Footer from './components/Footer.vue'

import Header from './components/Header.vue';

</script>

<template>
  <div class="page flexCenter">
    <Header class="header flexCenter" />
    <Index class="mainBody flexCenter" msg="Vite + Vue" />
    <Footer class="footer flexCenter" />
  </div>
  <!-- <div class="flex flex-col justify-center items-center">
    <Header class="flex-1" />
    <Index class="" msg="Vite + Vue" />
    <Footer class="flex-1" />
  </div> -->
</template>

<style scoped>
.page {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  flex-direction: column;

}

.flexCenter {
  display: flex;

  justify-content: center;
  align-items: content;
}

.header {
  position: relative;
  flex: 1;

}

.mainBody {
  flex: 3;
}

.footer {
  flex: 1;
}
</style>
