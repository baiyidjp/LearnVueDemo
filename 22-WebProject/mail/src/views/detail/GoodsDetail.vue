<template>
  <div>
    <navigation-bar :is-show-back="true">
      <div slot="center">
        <tabs class="detail-tabs" :tabs-title="tabsTitle" @tabClick="itemClick"></tabs>
      </div>
    </navigation-bar>
    <detail-swiper :banner="banner"></detail-swiper>
    <goods-info :goods-info="goodsInfo"/>
  </div>
</template>

<script>

  import detailRequest from "../../network/detail";

  import NavigationBar from "../../components/common/navigation-bar/NavigationBar";
  import Tabs from "../../components/content/tabs/Tabs";
  import DetailSwiper from "./components/DetailSwiper";
  import GoodsInfo from "./components/GoodsInfo";

  export default {
    name: 'GoodsDetail',
    data() {
      return {
        tabsTitle: ['商品', '参数', '评论', '推荐'],
        iid: '',
        banner: [],
        goodsInfo: {}
      }
    },
    components: {
      NavigationBar,
      Tabs,
      DetailSwiper,
      GoodsInfo
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
          this.banner = result.itemInfo.topImages
          this.handleGoodsInfoData(result)
        })
      },

      handleGoodsInfoData(result) {
        const info = {}
        info.title = result.itemInfo.title
        info.desc = result.itemInfo.desc
        info.price = result.itemInfo.price
        info.oldPrice = result.itemInfo.oldPrice
        info.columns = result.columns
        info.services = result.shopInfo.services
        this.goodsInfo = info
      }
    }
  }
</script>

<style scoped>

  .detail-tabs {
    background-color: #fafafa;
  }

</style>
