<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoadDone">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: 'HomeSwiper',
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isEmit: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoadDone() {
        if (!this.isEmit) {
          this.$emit('swiperImageLoadDone')
          this.isEmit = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
