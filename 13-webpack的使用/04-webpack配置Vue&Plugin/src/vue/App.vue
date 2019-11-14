<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="buttonClick">按钮</button>
    <h2 class="name">{{ name }}</h2>
    <Test></Test>
  </div>
</template>

<script>

  /* 引入 TestVue */
  import Test from './Test.vue'

  export default {
    name: "App",
    /* 加载其他组件 */
    components: {
      Test
    },
    data() {
      return {
        message: 'Hello Vue app.js',
        name: 'dong'
      }
    },
    methods: {
      buttonClick() {
      }
    }
  }
</script>

<style scoped>
  .name {
    color: black;
  }
</style>
