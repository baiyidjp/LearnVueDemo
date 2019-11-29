<template>
  <div class="goods-info">
    <div class="goods-title">{{ goodsInfo.title }}</div>
    <div class="goods-desc">{{ goodsInfo.desc }}</div>
    <div class="price-container">
      <div class="now-price">{{ goodsInfo.price }}</div>
      <div class="old-price">{{ goodsInfo.oldPrice }}</div>
      <div class="discount">优惠价</div>
    </div>
    <div class="middle-container">
      <div class="middle-title" v-for="(item, index) in goodsInfo.columns" :key="index">{{ item }}</div>
    </div>
    <div class="line"></div>
    <div class="bottom-container">
      <div class="service" v-for="(item, index) in goodsInfo.services" :key="index">
        <img :src="item.icon" alt="">
        <div class="service-title">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsInfo',
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

  .goods-info {
    padding: 10px 10px 0 10px;
    border-bottom: 5px solid #fafafa;
  }

  .goods-title {
    font-size: 18px;
    color: #4a4a4a;
  }

  .goods-desc {
    color: #9b9b9b;
    font-size: 10px;
    white-space: pre-line;
    padding-top: 10px;
  }

  .price-container {
    display: flex;
    align-items: flex-end;
    padding: 10px 0;
  }
  .now-price {
    color: #f13e3a;
    font-size: 25px;
    font-weight: 500;
    margin-right: 5px;
  }

  .old-price {
    color: #9b9b9b;
    text-decoration: line-through;
    font-size: 13px;
    margin-right: 5px;
  }

  .discount {
    background-color: #f13e3a;
    font-size: 15px;
    color: #ffffff;
    font-weight: 500;
    text-align: center;
    line-height: 20px;
    border-radius: 5px;
    padding: 1px 1px;
  }

  .middle-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9b9b9b;
    font-size: 15px;
    padding: 10px 0;
  }

  .line {
    background-color: rgba(0, 0, 0, 0.1);
    height: 1px;
  }

  .bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: #4a4a4a;
    font-size: 15px;
    padding: 20px 0 5px 0;
  }

  .service {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .bottom-container img {
    width: 15px;
    height: 15px;
  }

</style>
