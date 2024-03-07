<script setup lang="ts">
import {onMounted} from "vue";
import {ConfigStore} from "../store/config.ts";
const config = ConfigStore()

onMounted(()=>{
  config.config.baseUrl = "https://api.openai.com/v1/chat/completions"
  console.log(config.config.baseUrl)
})
</script>

<template>
  <div class="tw-daisy-chat ctw-daisy-hat-start">
    <div class="tw-daisy-chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
  </div>
  <button class="tw-daisy-btn">Button</button>
</template>

<style scoped>

</style>
