<template>
  <div id="app">
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <!-- tag 可以定义最终渲染的标签 -->
    <!-- replace 属性代表不可以返回 -->
    <!--<router-link to="/home" tag="button" replace>Home</router-link>-->
    <!--<router-link to="/about">About</router-link>-->

    <!-- 通过代码跳转路由 -->
    <button @click="homeButtonClick">Home</button>
    <button @click="aboutButtonClick">About</button>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeButtonClick () {
      /* vue-router 为每一个组件都有一个 $router 属性 */
      // this.$router.push('/home')
      this.$router.replace('/home') // 不可返回
    },
    aboutButtonClick () {
      this.$router.push('/about')
    }
  }
}
</script>

<style>

  /* 选中的router-link会自带这个class，可以在router的index.js中统一修改名字 */
  /*.router-link-active {*/
  /*  color: #ff0000;*/
  /*}*/

  .active {
    color: #004534;
  }
</style>
