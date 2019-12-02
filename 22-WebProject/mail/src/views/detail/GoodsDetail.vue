<template>
  <div id="goods-detail">
    <navigation-bar :is-show-back="true">
      <div slot="center">
        <tabs class="detail-tabs" :tabs-title="tabsTitle" @tabClick="itemClick"></tabs>
      </div>
    </navigation-bar>
    <scroll class="scroll-content" ref="scroll">
      <detail-swiper :banner="banner"></detail-swiper>
      <goods-info :goods-info="goodsInfo"/>
      <goods-shop-info :shop-info="shopInfo"/>
      <goods-images :goods-images-info="goodsImagesInfo" @imageLoad="goodsImageLoad"/>
    </scroll>
  </div>
</template>

<script>

  import detailRequest from "../../network/detail";

  import NavigationBar from "../../components/common/navigation-bar/NavigationBar";
  import Tabs from "../../components/content/tabs/Tabs";

  import Scroll from "../../components/common/scroll/Scroll";
  import DetailSwiper from "./components/DetailSwiper";
  import GoodsInfo from "./components/GoodsInfo";
  import GoodsShopInfo from "./components/GoodsShopInfo";
  import GoodsImages from "./components/GoodsImages";

  import {debounce} from "../../common/utils";

  export default {
    name: 'GoodsDetail',
    data() {
      return {
        tabsTitle: ['商品', '参数', '评论', '推荐'],
        iid: '',
        banner: [],
        goodsInfo: {},
        shopInfo: {},
        goodsImagesInfo: {}
      }
    },
    components: {
      GoodsImages,
      NavigationBar,
      Tabs,
      Scroll,
      DetailSwiper,
      GoodsInfo,
      GoodsShopInfo
    },
    created() {

      this.iid = this.$route.query.iid
      this.getGoodsDetail()
    },
    methods: {

      itemClick(index) {
        console.log(index);
      },

      getGoodsDetail() {
        detailRequest.goodsDetail(this.iid).then(data => {
          console.log(data);
          const result = data.result
          // 轮播图
          this.banner = result.itemInfo.topImages
          // 基本信息
          this.goodsInfo = this.getGoodsInfoData(result)
          // 商家信息
          this.shopInfo = this.getShopInfo(result)
          // 详细图片信息
          this.goodsImagesInfo = result.detailInfo
        })
      },

      getGoodsInfoData(result) {
        const info = {}
        info.title = result.itemInfo.title
        info.desc = result.itemInfo.desc
        info.price = result.itemInfo.price
        info.oldPrice = result.itemInfo.oldPrice
        info.columns = result.columns
        info.services = result.shopInfo.services.filter(service => { return Object.keys(service).length === 2 })
        return info
      },

      getShopInfo(result) {
        const info = {}
        info.shopLogo = result.shopInfo.shopLogo
        info.name = result.shopInfo.name
        info.fans = result.shopInfo.cFans
        info.sells = result.shopInfo.cSells
        info.goodsCount = result.shopInfo.cGoods
        info.score = result.shopInfo.score
        return info
      },

      goodsImageLoad() {
        const refresh = debounce(this.$refs.scroll.refresh)
        refresh()
      }
    }
  }
</script>

<style scoped>

  #goods-detail {
    height: 100vh;
    position: relative;
    z-index: 999;
    background-color: #fff;
  }

  .detail-tabs {
    background-color: #fafafa;
  }

  .scroll-content {
    overflow: hidden;
    position: absolute;

    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
