<script setup lang='ts'>
import ColorCard from "./ColorCard/index.vue";
import TopCard from "./TopCard/index.vue";
</script>

<template>
  <div>
    <TopCard />
    <div flex-1 class="mainBody" justify-center items-center>
      <div class="cardList" flex-wrap flex="~">
        <div v-for="index in 9" :key="index" class="cardBox">
          <ColorCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
/* 超小屏幕（手机，小于 768px） */
@media (max-width: 768px) {

  .mainBody {
    margin: auto;
    width: 70vw;
  }

  .cardList {
    margin-top: 5rem;
    width: 100%;
    height: 100%;
  }

  .cardBox {
    width: 70vw;
    height: 79vw;
  }
}

/* 大屏幕（大桌面显示器） */
@media (min-width: 769px) {
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

}
</style>

