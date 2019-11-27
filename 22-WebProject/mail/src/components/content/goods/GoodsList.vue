<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goodsList" :goods="item" :key="item.iid"/>
  </div>
</template>

<script>

  import GoodsListItem from "./GoodsListItem";

  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    },
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }

</script>

<style>

  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

</style>
