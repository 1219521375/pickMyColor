<template>
  <div class="top-card-container">
    <div class="card-container">
      <h1 m-au>technology stack</h1>
      <div class="technology-stack" flex="~" m-au>
        <div class="technology-stack-container">
          <div class="iconLogo i-logos:vue" m-au></div>
          <div m-au>vue</div>
        </div>
        <div class="technology-stack-container">
          <div class="iconLogo i-logos:vitejs" m-au></div>
          <div m-au>vite</div>
        </div>
        <div class="technology-stack-container">
          <div class="iconLogo i-logos:unocss" m-au></div>
          <div m-au>unocss</div>
        </div>
        <div class="technology-stack-container">
          <div class="iconLogo i-logos:css-3" m-au></div>
          <div m-au>css3</div>
        </div>
        <div class="technology-stack-container">
          <div class="iconLogo i-logos:javascript" m-au></div>
          <div m-au>js</div>
        </div>
        <div class="technology-stack-container">
          <div class="iconLogo i-arcticons:orange-flex" m-au></div>
          <div m-au>flex</div>
        </div>
      </div>
    </div>
    <div class="dotted"></div>
  </div>
</template>


<script>
</script>


<style scoped>
.top-card-container {
  margin: auto;
  height: 8vw;
  width: 60vw;
}

.card-container {
  margin-top: 20px;
  padding: 10px;
  height: 100%;
  width: 100%;
  background: #eef1fe;
  background: linear-gradient(135deg, transparent 15px, #eef1fe 0) top left,
    linear-gradient(-135deg, transparent 15px, #eef1fe 0) top right,
    linear-gradient(45deg, transparent 15px, #eef1fe 0) bottom left,
    linear-gradient(-45deg, transparent 15px, #eef1fe 0) bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}

@keyframes typing {
  from {
    width: 0;
  }
}

h1 {
  font-size: 5rem;
  width: 11.4ch;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(16);
}

.technology-stack {
  width: 80%;
  height: 50%;
}

.dotted {
  margin: 1vh 0px 0px 0px;
  border-width: 2px;
  border-style: none;
  border-bottom-style: dotted;
  border-color: #d4d4d4;
}

.iconLogo {
  width: 3vh;
  height: 5vh;
}

.technology-stack-container {
  height: 6vh;
  width: 15vh;
}
</style>