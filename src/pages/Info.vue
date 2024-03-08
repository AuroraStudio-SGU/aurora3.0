<script setup lang="ts">

import Banner from "../components/Banner.vue";
import {onMounted, ref} from "vue";
import axios, {AxiosInstance} from "axios";
import {ConfigStore} from "../store/config.ts";
import {User} from "../other/interfaces.ts";

const config = ConfigStore()
let axiosInstance:AxiosInstance;
const emptyUserList = [{email: "", grade: "", isPreLearn: false, major: "", name: "", phone: "", sex: "男", workGroup: ""}]
let UserList = ref<User[]>(emptyUserList)
const loadUserList = async ()=>{
  try{
    let Resp = await axiosInstance.get('/users')
    UserList.value = Resp.data
  }catch (e){
    alert("请求失败,请检查控制台")
    console.error(e)
  }
}
onMounted(async ()=>{
  axiosInstance = axios.create({
    baseURL: config.config.baseUrl,
    timeout: 1000,
  })
  await loadUserList()
})
</script>

<template>
  <banner></banner>
  <div class="title">
    报名情况
  </div>
  <div class="container">
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
        <tr>
          <th>姓名</th>
          <th>方向</th>
          <th>专业</th>
          <th>年级</th>
          <th>手机号码</th>
          <th>邮箱</th>
          <th>性别</th>
          <th>是否有基础</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user,index) in UserList">
          <td>{{ user.name }}</td>
          <td>{{ user.workGroup }}</td>
          <td>{{ user.major }}</td>
          <td>{{ user.grade }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.sex }}</td>
          <td>{{ user.isPreLearn?'是':'否' }}</td>
        </tr>
        </tbody>
        <tfoot v-if="UserList.length >=10">
        <tr>
          <th>姓名</th>
          <th>方向</th>
          <th>专业</th>
          <th>年级</th>
          <th>手机号码</th>
          <th>邮箱</th>
          <th>性别</th>
          <th>是否有基础</th>
        </tr>
        </tfoot>
      </table>
    </div>
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
