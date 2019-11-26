<template>
  <div>
    <!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
    <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
    <navigation-bar title="购物街" :isShowBack="false" backgroundColor="#ff8198" titleColor="#ffffff">
    </navigation-bar>
  </div>
</template>

<script>

  import NavigationBar from 'components/common/navigation-bar/NavigationBar';

  export default {
    name: 'Home',
    components: {
      NavigationBar
    }
  }
</script>

<style scoped>

</style>
