<script setup lang="ts">
import {onMounted} from "vue";
import {ConfigStore} from "../store/config.ts";
import HeroPage from "../components/HeroPage.vue";
const config = ConfigStore()

onMounted(()=>{

})
</script>

<template>
  <div class="banner">
    <hero-page></hero-page>
  </div>
</template>

<style scoped>
.banner{
  height: 30rem;
}
</style>
