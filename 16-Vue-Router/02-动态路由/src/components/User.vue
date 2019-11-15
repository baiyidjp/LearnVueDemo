<template>
  <div>
    <h2 class="title">This is user title</h2>
    <p class="content">this is user content</p>
    <h3>user id = {{ userId }}</h3>
    <h4>直接获取 {{ $route.params.user_id }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed: {
      userId() {
        /* user_id 是在路由的 index.js 中配置的参数名 */
        return this.$route.params.user_id
      }
    }
  }
</script>

<style scoped>
  .title {
    color: #ff0000;
  }
  .content {
    color: #42b983;
  }
</style>
