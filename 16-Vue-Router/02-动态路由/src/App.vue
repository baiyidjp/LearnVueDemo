<template>
  <div id="app">
    <h1>App.Vue</h1>
    <router-link tag="button" to="/home">Home</router-link>
    <!-- 写死的 -->
    <!--<router-link tag="button" to="/user/dong">User</router-link>-->
    <!-- 动态获取id -->
<!--    <router-link tag="button" :to="/user/ + user_id">User</router-link>-->
<!--    &lt;!&ndash; 通过query动态传递参数 &ndash;&gt;-->
<!--    <router-link tag="button" :to="{path: '/profile', query: {name: 'dong', age: 28, height: 1.77}}">Profile</router-link>-->

    <!--通过普通按钮跳转传递参数-->
    <button @click="clickUser">User</button>
    <button @click="clickProfile">Profile</button>

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
  },
  methods: {
    clickUser() {
      this.$router.push('/user/' + this.user_id)
    },
    clickProfile() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'Dong',
          age: 18,
          height: 188
        }
      })
    }
  }
}
</script>

<style>
</style>
