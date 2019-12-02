<template>
  <div id="goods-images">
    <div class="goods-desc">{{ goodsImagesInfo.desc }}</div>
    <div class="images-container" v-for="(item, index) in goodsImagesInfo.detailImage" :key="index">
      <div class="images-key"> {{ item.key }} </div>
      <div class="images-desc"> {{ item.desc }}</div>
      <div class="images" v-for="(image, imageIndex) in item.list" :key="imageIndex">
        <img :src="image" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsImages',
    props: {
      goodsImagesInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>

  #goods-images {
    border-bottom: 5px solid #fafafa;
  }

  .goods-desc {
    color: #666666;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 20px;
    padding: 20px 10px 0;
  }

  .images-key {
    color: #4a4a4a;
    font-size: 15px;
    font-weight: 700;
    padding: 20px 0 10px 10px;
  }

  .images-desc {
    font-size: 12px;
    letter-spacing: 1px;
    padding: 0 0 10px 10px;
    color: var(--color-tint);
  }

  .images img {
    width: 100%;
  }

</style>
