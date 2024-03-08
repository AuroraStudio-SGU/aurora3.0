<script setup lang="ts">

import HeroPage from "./HeroPage.vue";
import Nav from "./Nav.vue";
</script>

<template>
  <div class="head">
    <div class="wrapper">
      <Nav></Nav>
    </div>
  </div>
  <!-- 视频部分 -->
  <div class="banner">
    <hero-page></hero-page>
  </div>
</template>

<style scoped>
.banner{
  height: 30rem;
}

</style>
