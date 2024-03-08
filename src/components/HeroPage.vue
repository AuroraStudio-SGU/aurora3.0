<script setup lang="ts">

</script>

<template>
  <div class="content">
      <img class="logo" src="../assets/logo-max.png" alt="">
      <p class="text">WATING FOR YOU</p>
      <p class="text">让每一个热爱<span class="highlight">技术</span>的人都有一个归属地</p>
      <p class="text-b1">AURORA STUDIO</p>
      <p class="text-a1">AURORA STUDIO</p>
      <p class="text-a2">A platform that loves technology</p>
      <p class="text-a3">一个热爱技术的平台</p>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: #01020a;
  background-image: url("https://www.transparenttextures.com/patterns/climpek.png");
}
.text{
  @apply font-normal;
  font-size: xx-large;
  color: #ffffff;
  margin-top: 1.5rem;
  z-index: 15;
}
.text-b1{
  @apply font-mono;
  font-size: xxx-large;
  writing-mode: vertical-rl;
  text-orientation: mixed; /* 兼容性设置，支持不同浏览器 */
  white-space: nowrap; /* 防止文字换行 */
  color: rgba(108, 106, 106, 0.76);
  position: absolute;
  right: 15%;
  z-index: 7;
}
.text-a1{
  @apply font-mono;
  position: absolute;
  font-size: x-large;
  color: rgba(255, 255, 255, 0.5);
  z-index: 7;
  bottom: 30%;
}
.text-a2{
  @apply font-mono;
  position: absolute;
  font-size: x-large;
  color: rgba(255, 255, 255, 0.5);
  z-index: 7;
  bottom: 10%;
}
.text-a3{
  @apply font-mono;
  position: absolute;
  font-size: x-large;
  color: rgba(255, 255, 255, 0.5);
  z-index: 7;
  bottom: 2%;
}
.logo{
  position: absolute;
  z-index: 1;
}
.highlight{
  color: #8367fb;
}
.content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 调整透明度和颜色 */
  z-index: 8;
}
</style>
