<script setup lang="ts">
import {ref} from "vue";

const model = defineModel()
const isError = ref(false)
const props = defineProps({
  placeholder: String,
  type: {
    default: 'text-normal',
    type: String,
    validator: (val: string) => ['text-normal', 'text-email','sex','switch'].includes(val)
  },
  text: String,
  errorText: String,
})
const handleEmpty = (event)=>{
  isError.value = !event.target.value;
}
const changeSex = (event,sex:string)=>{
  if(event.target.value === 'on'){
    model.value = sex
  }
}
</script>

<template>
  <label class="form-control">
    <div class="label error-label">
      <span class="label-text text-red-600" v-if="isError">{{ errorText }}</span>
    </div>
    <label :class="{'input-error':isError}"  v-if="type=='text-normal'||type=='text-email'"
           class="input input-bordered flex items-center gap-2 input-wrapper">
      {{ props.text }} <svg v-if="props.type=='text-email'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
      <input type="text" v-model="model" class="grow" :placeholder="placeholder" @change="handleEmpty" />
    </label>
    <label class="input input-bordered flex items-center gap-2" v-if="type=='sex'">
      性别<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
      男<input type="radio" @change="(event)=>changeSex(event,'男')"  name="radio-1" class="radio radio-primary" checked />
      女<input type="radio" @change="(event)=>changeSex(event,'女')" name="radio-1" class="radio radio-secondary" />
    </label>
    <label class=" flex items-center gap-2" v-if="type=='switch'">
      {{ text }}
      <input type="checkbox" v-model="model" class="toggle"/>
    </label>
  </label>
</template>

<style scoped>
.error-label{
  height: 1rem;
  width: fit-content;
  margin-bottom: 0.5rem;
}
.input-wrapper{
  position: relative;
}
</style>
