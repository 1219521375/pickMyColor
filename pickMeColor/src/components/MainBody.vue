<script setup>

</script>

<template>
  <div flex="~ 1" pageset justify-center items-center>
    <div class="cardList" flex-wrap flex="~">
      <div v-for="item in 10" :key="index" class="cardBox">
        <div class="card">
          <div class="cardBody">

          </div>
          <div class="cardFooter">
            <div class="angle">
              <div></div>
              <span>268°
              </span>

            </div>
            <div class="colors"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
.cardList {
  width: 100%;
  height: 100%;
}

.cardBox {
  width: calc(66vw/3);
  height: calc(66vw/3);
  padding: 20px;

}

.card {
  width: 100%;
  height: 100%;

}

.cardBody {
  position: relative;
  margin: auto;
  width: 100%;
  height: 80%;
  border-radius: 16px;
    background-image: linear-gradient(268deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
}

.cardFooter {
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.angle{
  background-color: aqua;
  height: 100%;
  width: 200px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.colors{
  background-color: bisque;
    height: 100%;
      width: 200px;
}
</style>
