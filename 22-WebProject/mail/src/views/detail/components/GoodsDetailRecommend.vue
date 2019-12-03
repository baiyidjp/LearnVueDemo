<template>
  <div class="goods-recommend">
    <goods-list-item :is-home="false" v-for="item in goodsList" :goods="item" :key="item.image"/>
  </div>
</template>

<script>

  import GoodsListItem from "../../../components/content/goods/GoodsListItem";

  export default {
    name: 'GoodsDetailRecommend',
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

<style scoped>

  .goods-recommend {
    border-bottom: 5px solid #fafafa;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

</style>
