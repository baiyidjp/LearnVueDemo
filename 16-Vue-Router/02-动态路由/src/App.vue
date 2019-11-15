<template>
  <div id="app">
    <h1>App.Vue</h1>
    <router-link tag="button" to="/home">Home</router-link>
    <!-- 写死的 -->
    <!--<router-link tag="button" to="/user/dong">User</router-link>-->
    <!-- 动态获取id -->
    <router-link tag="button" :to="/user/ + user_id">User</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      user_id: 'peng'
    }
  }
}
</script>

<style>
</style>
