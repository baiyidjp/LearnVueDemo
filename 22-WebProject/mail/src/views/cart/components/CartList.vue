<template>
  <div class="cart-list">
    <cart-item v-for="item in goodsList" :item="item" :key="item.iid"/>
  </div>
</template>

<script>

  // 将Vuex的getters映射到当前组件
  import {mapGetters} from 'vuex'

  import CartItem from "./CartItem";

  export default {
    name: 'CartList',
    components: {
      CartItem
    },
    computed: {
      ...mapGetters(['goodsList'])
    }
  }
</script>

<style scoped>

</style>
