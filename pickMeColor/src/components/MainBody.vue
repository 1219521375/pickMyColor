<script setup>

</script>

<template>
  <div flex-1 class="mainBody" justify-center items-center>
    <div class="cardList" flex-wrap flex="~">
      <div v-for="item in 10" :key="index" class="cardBox">
        <div class="card">
          <div class="cardBody">
            <div class="copy-icon i-ion:copy-outline"></div>
          </div>
          <div class="cardFooter">
            <div class="angle">
              <div></div>
              <span>268°</span>
            </div>
            <div class="colors">
              <div class="circular colorsItem"></div>
              <div class="circular colorsItem"></div>
              <div class="circular colorsItem"></div>
              <div class="circular colorsItem"></div>
              <div class="circular colorsItem"></div>
              <div class="colorsItem2 i-carbon:add-alt hover:i-carbon:add-filled"></div>
              <div class="colorsItem2 i-ion:options-outline hover:i-ion:options"></div>
            </div>
          </div>
        </div>
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

.card {
  width: 100%;
  height: 100%;
  padding: 1.5vw;
}

.cardBody {
  position: relative;
  margin: auto;
  width: 18vw;
  height: 16vw;
  border-radius: 16px;
  background-image: linear-gradient(268deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
}

.copy-icon{
  position: relative;
  width: 23px;
  height: 23px;
  margin: 3rem;
  color: #d4d4d4;
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


.circular {
  background-color: #fbc96e;
  border-radius: 50%;
  border: #d4d4d4 solid 2px;
}
</style>
