<template>
  <div>
    <h2 class="title">This is profile title</h2>
    <p class="content">this is profile content</p>
    <p>通过query传递参数</p>
    <h3>Name: {{ $route.query.name }}</h3>
    <h3>Age: {{ $route.query.age }}</h3>
    <h3>Height: {{ $route.query.height }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    created() {
      console.log('Profile created');
    },
    destroyed() {
      console.log('Profile destroyed');
    },
  }
</script>

<style scoped>

</style>
