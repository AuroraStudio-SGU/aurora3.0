<script setup lang="ts">
import {ConfigStore} from "../store/config.ts";
import {onMounted, ref} from "vue";
import Banner from "../components/Banner.vue";

import InputTable from "../components/InputTable.vue";
import axios, {AxiosInstance} from "axios"
import {User} from "../other/interfaces.ts";

const config = ConfigStore()

let axiosInstance:AxiosInstance;
let isSubmit = false;
onMounted(()=>{
  axiosInstance = axios.create({
    baseURL: config.config.baseUrl,
    timeout: 1000,
  })
})

const emptyUser: User = {email: "", grade: "", isPreLearn: false, major: "", name: "", phone: "", sex: "男", workGroup: ""}
const User = ref(emptyUser)
function checkEmpty(obj) {
  return Object.entries(obj).every(([key, value]) =>{
    if(typeof value == 'string' && key !='introduce'){
      return value.length > 0;
    }else {
      return true;
    }
  })
}
const handleSubmit = ()=>{
  if(isSubmit){
    alert("你已经提交过了，请勿重复提交")
  }
  if(checkEmpty(User.value)){
    axiosInstance.post('/user/upload',User.value).then(res=>{
      alert("提交成功")
      isSubmit = true;
    }).catch(err=>{
      alert("提交失败，请查看控制台")
      console.error(err);
    })
  }else {
    alert("请填写完整信息")
  }
}
</script>
<template>
  <div class="content">
    <banner></banner>
    <!-- 报名表 -->
    <div class="form">
      <div class="wrapper">
        <div class="title">
          <p>成为极光的一员</p>
          <p>WELCOME TO</p>
          <p></p>
        </div>
        <div class="infomation">
          <div class="name">
            <div class="logo">
              <img src="../assets/logo.png" alt="">
            </div>
            <div class="text">
              <p>INFOMATION</p>
              <p>基本信息</p>
            </div>
          </div>
          <div class="container">
            <InputTable text="姓名" v-model="User.name" placeholder="请输入名字" error-text="请输入名字" ></InputTable>
            <InputTable text="邮箱" v-model="User.email" type="text-email" placeholder="day@gmail.com" error-text="请输入邮箱" ></InputTable>
            <InputTable v-model="User.sex" type="sex"></InputTable>
            <InputTable text="专业" v-model="User.major" placeholder="软件工程" error-text="请输入专业" ></InputTable>
            <InputTable text="年级" v-model="User.grade" placeholder="21级" error-text="请输入年级" ></InputTable>
            <InputTable text="方向" v-model="User.workGroup" placeholder="后端" error-text="请输入方向" ></InputTable>
            <InputTable text="电话" v-model="User.phone" placeholder="13711451420" error-text="请输入电话" ></InputTable>
            <InputTable text="是否有一定基础" v-model="User.isPreLearn" type="switch" ></InputTable>
          </div>
        </div>
        <div class="introduction">
          <div class="name">
            <div class="logo"><img src="../assets/logo.png" alt=""></div>
            <div class="text">
              <p>INTRODUCTION</p>
              <p>介绍自己<span class="m-1 badge badge-info">可选项</span></p>
            </div>
          </div>
          <div class="introduction-content">
            <textarea v-model="User.introduce" class="textarea textarea-bordered w-full h-4/5" placeholder="向大家介绍一下你自己把"></textarea>
            <button class="btn btn-success m-4" @click="handleSubmit">填好了就提交报名表把！</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.input{

}


.introduction-content{
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: #f8f8f8;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 2rem 3rem;
  display: flex;
  height: 24rem;
  @apply max-w-4xl;
}
.title {
  padding: 1rem 0 1rem 0;
  text-align: center;
  margin: 0 auto;
  font-size: 24px;
}
.name .logo {
  padding-left: 10%;
}

.name .logo img {
  width: 64px;
  margin-right: 13px;
}

.name div {
  float: left;
}
.name{
  margin-top: 1rem;
}
.name::after {
  content: '';
  display: block;
  clear: both;
  margin-bottom: 45px;
}
.container {
  // max-width: 800px;
  // height: 253px;
  margin: 0 auto;
  background-color: #f8f8f8;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 2rem 3rem;
  display: flex;
  @apply grid grid-cols-2 gap-x-24;
  @apply max-w-4xl;
}
.text {
  font-size: 24px;
}
</style>
