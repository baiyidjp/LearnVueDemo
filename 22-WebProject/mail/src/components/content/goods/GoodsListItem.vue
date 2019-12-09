<template>
  <div class="goods" @click="goodsItemClick">
    <img class="goods-image" :src="imageUrl" alt="" @load="imageLoadDone" ref="image">
    <div class="goods-title">{{ goods.title }}</div>
    <div class="goods-info">
      <div class="price">{{ goods.price }}</div>
      <img src="~assets/img/common/collect.svg" alt="" class="fav-icon">
      <div class="fav-count">{{ goods.cfav }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goods: Object,
      isHome: Boolean
    },
    computed: {
      imageUrl() {
        return this.isHome ? this.goods.show.img : this.goods.image
      }
    },
    methods: {
      imageLoadDone() {
        // 事件总线 发送事件$emit 监听事件$on
        this.$bus.$emit('imageLoadDone')
      },
      goodsItemClick() {
        if (this.isHome) {
          this.$router.push({
            path: '/detail',
            query: {
              iid: this.goods.iid
            }
          })
        } else {
          this.$bus.$emit('goodsItemClick', {iid: this.goods.item_id})
        }
      }
    },
    mounted() {
      // 动态设置图片的宽高
      const goodsImage = this.$refs.image
      const height = goodsImage.getBoundingClientRect().width*264/176
      goodsImage.style.height = height + 'px'
    }
  }
</script>

<style scoped>

  .goods {
    width: 47%;
    padding-bottom: 10px;
  }

  .goods-image {
    width: 100%;
    border-radius: 5px;
  }

  .goods-title {
    /*不换行*/
    white-space: nowrap;
    /*多余的隐藏*/
    overflow: hidden;
    /*显示...*/
    text-overflow: ellipsis;
    font-size: 13px;
    margin: 5px 0;
  }

  .goods-info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  }

  .goods-info .price {
    color: #ff8198;
  }

  .goods-info .fav-icon {
    width: 13px;
    height: 13px;
    margin: 0 1px 0 10px;
  }

</style>
