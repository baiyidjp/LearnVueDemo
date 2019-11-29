<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in banner" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: 'DetailSwiper',
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      SwiperItem,
      Swiper
    }
  }
</script>

<style scoped>

  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }

  .detail-swiper .img {
    object-fit: fill;
  }

</style>
