<script setup lang="ts">

import Banner from "../components/Banner.vue";
import InputTable from "../components/InputTable.vue";
import {ConfigStore} from "../store/config.ts";

const config = ConfigStore()

</script>

<template>
  <banner></banner>
  <div class="title">
    <span class="text-xl">设置页面</span>
  </div>
  <div class="container">
      <InputTable text="服务器BaseUrl:" v-model="config.config.baseUrl" ></InputTable>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  background-color: #f8f8f8;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 2rem 3rem;
  display: flex;
  @apply grid grid-cols-2;
  @apply max-w-4xl;
  @apply min-h-96;
}
.title{
  margin: 2rem 0 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
