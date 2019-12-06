<template>
  <div class="goods-bottom">
    <div class="left-container">
      <div class="left-item">
        <img src="~assets/img/detail/message.svg" alt="">
        <div>客服</div>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/shop.svg" alt="">
        <div>店铺</div>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/favorite.svg" alt="">
        <div>收藏</div>
      </div>
    </div>
    <div class="right-container">
      <div class="cart right-item" @click="addCartClick">加入购物车</div>
      <div class="buy right-item">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsDetailBottom',
    methods: {
      addCartClick() {
        this.$emit('addCartClick')
      }
    }
  }
</script>

<style scoped>

  .goods-bottom {
    position: fixed;
    background-color: #fff;
    height: 58px;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
  }

  .left-container {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .left-item {
    flex: 1;
    text-align: center;
    color: #9b9b9b;
    font-size: 13px;
  }

  .left-item img {
    width: 22px;
    height: 22px;
  }

  .right-container {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .right-item {
    flex: 1;
    text-align: center;
    line-height: 58px;
    font-size: 15px;
  }

  .cart {
    background-color: #fde611;
  }

  .buy {
    background-color: #ea7fe3;
    color: #ffffff;
  }

</style>
