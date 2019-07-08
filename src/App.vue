<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <div class="row">
        <side-bar></side-bar>

        <!-- 主内容区域 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//导入导航组件
import NavBar from "./components/NavBar.vue";
//导入侧边栏组件
import SideBar from "./components/SideBar.vue";
//导入herolist组件
export default {
  name: "app",
  //注册局部组件
  components: {
    NavBar,
    SideBar,
  }
};
</script>

<style>
</style>
