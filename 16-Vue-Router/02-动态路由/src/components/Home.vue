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
    name: 'Home',
    data() {
      return {
        path: '/home/news'
      }
    },
    /* 不使用keep-alive组件会重复的创建和销毁，一直调用下面两个回调，使用了就不会 */
    created() {
      console.log('Home created');
    },
    destroyed() {
      console.log('Home destroyed');
    },
    /* 只有使用了keep-alive才有下面两个回调 */
    activated() {
      /* 防止重复push到同一个页面，vue-router3.1会报错 */
      if (this.$route.path == this.path) {return}
      this.$router.push(this.path)
    },
    deactivated() {

    },
    beforeRouteLeave (to, from, next) {
      this.path = this.$route.path
      next()
    }
  }
</script>

<style scoped>

</style>
