<template>
  <div>
    <h1>这是HelloVuex</h1>
    <h2>验证对象是否是响应式的</h2>
    <h3>{{ $store.state.kobeInfo }}</h3>
    <h2>{{ $store.state.counter }}</h2>
    <h2>counter的平方{{ $store.getters.powerCounter }}</h2>
    <h2>年龄大于20</h2>
    <h3>{{ $store.getters.personAgeThan20 }}</h3>
    <h3>总数：{{ $store.getters.personAgeThan20Length }}</h3>
    <h3>{{ $store.getters.personAgeThan(30) }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex'
}
</script>

<style scoped>

</style>
