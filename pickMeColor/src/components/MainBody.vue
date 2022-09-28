<script setup>

</script>

<template>
  <div flex-1 class="mainBody" justify-center items-center>
    <div class="cardList" flex-wrap flex="~">
      <div v-for="item in 10" :key="index" class="cardBox">
        <div class="card">
          <div class="cardBody">
          </div>
          <div class="cardFooter">
            <div class="angle">
              <div></div>
              <span>268°</span>
            </div>
            <div class="colors"></div>
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
  background-color: bisque;
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
</style>
