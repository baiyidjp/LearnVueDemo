<template>
  <div class="goods-shop">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt="">
      <div class="shop-name">{{ shopInfo.name }}</div>
      <div class="shop-fans">粉丝: {{ fansCount }}</div>
    </div>
    <div class="shop-bottom">
      <div class="sales-container">
        <div class="sales-count">{{ allSellsCount }}</div>
        <div class="sales-tip">总销量</div>
      </div>
      <div class="all-goods-container">
        <div class="all-goods-count">{{ shopInfo.goodsCount }}</div>
        <div class="all-goods-tip">全部宝贝</div>
      </div>
      <div class="line"></div>
      <div class="shop-desc">
        <div class="desc-container" v-for="(item, index) in shopInfo.score" :key="index">
          <div class="desc-title">{{ item.name }}</div>
          <div class="desc-score" :class="{'desc-better': item.isBetter}">{{ item.score }}</div>
          <div class="desc-lv" :class="{'score-better': item.isBetter}">{{ item.isBetter ? '高' : '低' }}</div>
        </div>
      </div>
    </div>
    <div class="enter-shop">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsShopInfo',
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      allSellsCount() {
        if (this.shopInfo.sells < 1000) {
          return this.shopInfo.sells
        } else {
          return (this.shopInfo.sells/10000).toFixed(1) + '万'
        }
      },
      fansCount() {
        if (this.shopInfo.fans < 10000) {
          return this.shopInfo.fans
        } else {
          return (this.shopInfo.fans/10000).toFixed(1) + '万'
        }
      }
    }
  }
</script>

<style scoped>

  .goods-shop {
    padding: 10px 10px 0 10px;
    border-bottom: 5px solid #fafafa;
  }

  .shop-top {
    display: flex;
    align-items: center;
  }

  .shop-top img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #dddddd;
  }

  .shop-top .shop-name {
    margin-left: 10px;
    color: #5b5b5b  ;
    font-size: 17px;
  }

  .shop-top .shop-fans {
    margin-left: 10px;
    font-size: 15px;
  }

  .shop-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 20px 20px;
  }

  .sales-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .sales-count {
    font-size: 16px;
    font-weight: 600;
  }

  .sales-tip {
    margin-top: 10px;
    font-size: 13px;
  }

  .all-goods-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .all-goods-count {
    font-size: 16px;
    font-weight: 600;
  }

  .all-goods-tip {
    margin-top: 10px;
    font-size: 13px;
  }

  .line {
    width: 1px;
    height: 50px;
    background-color: rgba(0, 0 ,0, 0.3);
  }

  .shop-desc {
    display: flex;
    flex-direction: column;
  }

  .desc-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .desc-title {
    font-size: 13px;
  }

  .desc-score {
    color: #f13e3a;
    font-size: 12px;
    margin: 0 15px;
  }

  .desc-lv {
    background-color: #f13e3a;
    color: white;
    font-size: 12px;
  }

  .score-better {
    background-color: #5ea732;
  }

  .desc-better {
    color: #5ea732;
  }

  .enter-shop {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .enter-shop div {
    background-color: #f4f4f4;
    width: 120px;
    height: 30px;
    color: #666666;
    font-size: 12px;
    text-align: center;
    line-height: 30px;
    border-radius: 4px;
  }

</style>
