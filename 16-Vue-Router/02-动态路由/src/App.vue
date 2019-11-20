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

    <!-- 重新创建动态组件的行为通常是非常有用的，但是在这个案例中，我们更希望那些标签的组件实例能够被在它们第一次被创建的时候缓存下来。为了解决这个问题，我们可以用一个 <keep-alive> 元素将其动态组件包裹起来。 -->
    <!-- include 和 exclude 属性允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示 -->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>

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
