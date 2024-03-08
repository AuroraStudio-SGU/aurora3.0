<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const jumpTo = (name:string)=>{
  router.push({name:name})
}
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <a class="btn btn-ghost text-xl" @click="jumpTo('home')">
        <img class="logo-sm" src="../assets/logo.png" alt="">
        极光工作室
      </a>
    </div>
    <div class="navbar-center lg:flex z-20">
      <ul class="menu menu-horizontal px-1 gap-10">
        <li class="tooltip tooltip-bottom" data-tip="还没做呢"><a>关于我们</a></li>
        <li class="tooltip tooltip-bottom" data-tip="还没做呢"><a>团队成员</a></li>
        <li class="tooltip tooltip-bottom" data-tip="还没做呢"><a>动态</a></li>
        <li class="tooltip tooltip-bottom" data-tip="还没做呢"><a>加入我们</a></li>
      </ul>
    </div>
    <div class="navbar-end">

    </div>
  </div>
</template>

<style scoped>
.logo-sm {
  height: 3rem;
  width: 3rem;
}
</style>
