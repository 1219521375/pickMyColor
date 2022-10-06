<script setup lang='ts'>
import ColorCard from './ColorCard/index.vue'
</script>

<template>
  <div flex-1 class="mainBody" justify-center items-center>
    <div class="cardList" flex-wrap flex="~">
      <div v-for="index in 9" :key="index" class="cardBox">
        <ColorCard />
      </div>
    </div>
  </div>
</template>

<style  scoped>
.mainBody {
  margin: auto;
  width: 63vw;
}

.cardList {
  width: 100%;
  height: 100%;
}

.cardBox {
  width: 21vw;
  height: 22vw;
}
</style>

