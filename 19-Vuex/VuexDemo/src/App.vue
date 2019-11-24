<template>
  <div id="app">
    <h2>App组件</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h3>-------------------</h3>
    <router-view/>
    <h3>-------------------</h3>
    <button @click="addApp">+</button>
    <button @click="subApp">-</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: '哈哈哈'
    }
  },
  methods: {
    addApp () {
      /* 提交改变 异步的方法建议先进行异步操作后再使用commit */
      this.$store.commit('add')
    },
    subApp () {
      this.$store.commit('sub')
    }
  }
}
</script>

<style>

</style>
