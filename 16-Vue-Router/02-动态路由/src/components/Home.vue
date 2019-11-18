<template>
  <div>
    <h2>This is home title</h2>
    <p>this is home content</p>

    <!-- 需要的全路径 -->
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>

    <!-- 加载子路由对用的组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>

</style>
