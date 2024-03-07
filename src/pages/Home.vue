<script setup lang="ts">
import {ConfigStore} from "../store/config.ts";
import {onMounted} from "vue";

const config = ConfigStore()
onMounted(()=>{
  console.log(config.config.baseUrl)
})
</script>

<template>
  <div class="content">
    <!-- 导航栏 -->
    <div class="head">
      <div class="wrapper">
        <div class="nav">
          <div class="logo nav_l"><img src="../assets/logo.png" alt=""></div>
          <div class="nav_r">
            <ul>
              <li>成员介绍</li>
              <li>关于我们</li>
              <li>动态</li>
              <li>加入我们</li>
            </ul>
          </div>
          <div class="nav_title">极光工作室</div>
        </div>
      </div>
    </div>
    <!-- 视频部分 -->
    <div class="banner">
      <img src="../assets/banner.png" alt="" srcset="">
    </div>
    <!-- 报名表 -->

    <div class="form">
      <div class="wrapper">

        <div class="titel">
          <p>成为极光的一员</p>
          <p>WELCOME TO</p>
          <p></p>
        </div>
        <div class="infomation">
          <div class="name">
            <div class="logo"><img src="../assets/logo.png" alt=""></div>
            <div class="text">
              <p>INFOMATION</p>
              <p>基本信息</p>
            </div>
          </div>
          <div class="container">
<!--            <el-form :rules="rules" :model="newstudent">-->
<!--              <div class="form_left">-->
<!--                <el-form-item label="姓名" prop="name">-->
<!--                  <el-input placeholder="请输入名字" v-model="newstudent.name"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="性别" prop="sex">-->
<!--                  <el-radio-group v-model="newstudent.sex">-->
<!--                    <el-radio label="男"></el-radio>-->
<!--                    <el-radio label="女"></el-radio>-->
<!--                  </el-radio-group>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="邮箱" prop="email">-->
<!--                  <el-input placeholder="请输入邮箱" v-model="newstudent.email"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="年级" prop="grade">-->
<!--                  <el-select placeholder="请选择年级" v-model="newstudent.grade">-->
<!--                    <el-option v-for="(item, index) in gradeOptions" :key="index" :label="item.value"-->
<!--                               :value="item.value"></el-option>-->
<!--                  </el-select>-->
<!--                </el-form-item>-->
<!--              </div>-->
<!--              <div class="form_right">-->
<!--                <el-form-item label="专业" prop="major">-->
<!--                  <el-input placeholder="请输入专业" v-model="newstudent.major"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="电话" prop="phone">-->
<!--                  <el-input placeholder="请输入电话" v-model="newstudent.phone"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="方向" prop="department">-->
<!--                  <el-select placeholder="请选择方向" v-model="newstudent.department">-->
<!--                    <el-option v-for="(item, index) in directionOptions" :key="index" :label="item.value"-->
<!--                               :value="item.value"></el-option>-->
<!--                  </el-select>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="是否有一定的基础" prop="is_basics">-->
<!--                  <el-radio-group v-model="newstudent.is_basics">-->
<!--                    <el-radio label="是"></el-radio>-->
<!--                    <el-radio label="否"></el-radio>-->
<!--                  </el-radio-group>-->
<!--                </el-form-item>-->
<!--              </div>-->
<!--            </el-form>-->
          </div>
        </div>
        <div class="introduction">
          <div class="name">
            <div class="logo"><img src="../assets/logo.png" alt=""></div>
            <div class="text">
              <p>INTRODUCTION</p>
              <p>介绍自己</p>
            </div>
          </div>
          <div class="intro">
<!--            <el-input type="textarea" :rows="12" placeholder="请简单介绍下自己吧:" v-model="newstudent.introduce">-->
<!--            </el-input>-->
          </div>
<!--          <el-button class="btn" plain @click="addStudent">提交</el-button>-->
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

li {
  list-style: none;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  list-style-image: none;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

.wrapper {
  max-width: 1200px;
  min-width: 375px;
  margin: 0 auto;
}

.head {
  height: 55px;

}

.nav{
  height: 55px;
  display: flex;
  align-items: center;
}


.nav_l {
  flex:0.2;
  margin-left: 10%;
}

.nav_r{
  flex: 0.7;
}

.nav_r ul {

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15.84px;
  line-height: 55px;
}

.nav_r li {
  margin: 0 25px;
}

.nav img {
  margin: 0 auto;
  height: 40px;
  width: 40px;
}

.nav_title {
  display: none;
  font-size: 24px;
}
.banner img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.titel {
  padding: 55px 0 33px 0;
  text-align: center;
  margin: 0 auto;
  font-size: 24px;
}

.titel p {
  margin-bottom: 10px;
}

.titel p:nth-child(3) {
  margin: 0 auto;
  width: 64px;
  padding: 2px 0;
  background-color: #8367fb;
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
  margin-bottom: 60px;
  background-color: #f8f8f8;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 50px 100px;

}
.text {
  font-size: 24px;
}
</style>
