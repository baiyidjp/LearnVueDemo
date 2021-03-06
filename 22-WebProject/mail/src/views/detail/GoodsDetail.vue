<template>
  <div id="goods-detail">
    <navigation-bar :is-show-back="true">
      <div slot="center">
        <tabs class="detail-tabs" :tabs-title="tabsTitle" @tabClick="itemClick" ref="detailTabs"/>
      </div>
    </navigation-bar>
    <scroll class="scroll-content" ref="scroll" :probe-type="3" @scroll="scrollViewDidScroll" @scrollEnd="scrollViewDidScrollEnd">
      <detail-swiper :banner="banner"/>
      <goods-info :goods-info="goodsInfo"/>
      <goods-shop-info :shop-info="shopInfo"/>
      <goods-images :goods-images-info="goodsImagesInfo" @imageLoad="goodsImageLoad"/>
      <goods-param-info :param-info="goodsParamInfo" ref="param"/>
      <goods-detail-comment :goods-detail-comment-info="goodsDetailCommentInfo" ref="comment"/>
      <goods-detail-recommend :goods-list="goodsDetailRecommendInfo" ref="recommend"/>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTopClick"/>
    <goods-detail-bottom @addCartClick="addCartClick"/>
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
  import GoodsParamInfo from "./components/GoodsParamInfo";
  import GoodsDetailComment from "./components/GoodsDetailComment";
  import GoodsDetailRecommend from "./components/GoodsDetailRecommend";

  import GoodsDetailBottom from "./components/GoodsDetailBottom";

  import {BackToTopMixin} from "../../common/mixin";

  import mutations_types from "../../store/mutations_types";
  import {debounce} from "../../common/utils";

  export default {
    name: 'GoodsDetail',
    data() {
      return {
        tabsTitle: ['商品', '参数', '评论', '推荐'],
        tabsOffset: {
          goods: 0,
          param: 0,
          comment: 0,
          recommend: 0
        },
        // 点击tab时 是否触发滚动改变tab的选中
        isScrollToRefreshTabs: true,
        iid: '',
        banner: [],
        goodsInfo: {},
        shopInfo: {},
        goodsImagesInfo: {},
        goodsParamInfo: {},
        goodsDetailCommentInfo: {},
        goodsDetailRecommendInfo: []
      }
    },
    mixins: [BackToTopMixin],
    components: {
      GoodsDetailBottom,
      NavigationBar,
      Tabs,
      Scroll,
      DetailSwiper,
      GoodsInfo,
      GoodsShopInfo,
      GoodsDetailComment,
      GoodsParamInfo,
      GoodsImages,
      GoodsDetailRecommend
    },
    created() {

      // 记录商品id
      this.iid = this.$route.query.iid
      // 获取商品详情
      this.getGoodsDetail()
      // 获取推荐的商品
      this.getGoodsDetailRecommend()
    },
    mounted() {

      const refresh = debounce(this.$refs.scroll.refresh)
      // 监听goodsListItem中的图片加载成功
      this.$bus.$on('imageLoadDone', () => {
        // 使用防抖函数 限制刷新频率
        refresh()
      })

      // 监听推荐商品的点击 服务器不存在数据
      this.$bus.$on('goodsItemClick', (query) => {
        // 记录商品id
        this.iid = query.iid
        // 获取商品详情
        this.getGoodsDetail()
        // 获取推荐的商品
        this.getGoodsDetailRecommend()
        // 滚动到顶部
        this.backTopClick()
      })
    },
    methods: {

      // 获取商品详情
      getGoodsDetail() {
        detailRequest.goodsDetail(this.iid).then(data => {
          const result = data.result
          // 轮播图
          this.banner = result.itemInfo.topImages
          // 基本信息
          this.goodsInfo = this.getGoodsInfoData(result)
          // 商家信息
          this.shopInfo = this.getShopInfo(result)
          // 详细图片信息
          this.goodsImagesInfo = result.detailInfo
          // 商品的参数和尺码信息
          this.goodsParamInfo = result.itemParams
          // 评论信息
          this.goodsDetailCommentInfo = result.rate
        })
      },

      getGoodsInfoData(result) {
        const info = {}
        info.title = result.itemInfo.title
        info.desc = result.itemInfo.desc
        info.showPrice = result.itemInfo.price.split('~').length > 0 ? result.itemInfo.price.split('~')[0] : result.itemInfo.price
            info.oldPrice = result.itemInfo.oldPrice
        info.price = parseFloat(result.itemInfo.lowNowPrice)
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
        const param = debounce(this.getOffset)
        refresh()
        param()
      },

      getGoodsDetailRecommend() {
        detailRequest.goodsDetailRecommend().then(data => {
          this.goodsDetailRecommendInfo = data.data.list
        })
      },

      // tabs 点击 滚动
      itemClick(index) {
        this.isScrollToRefreshTabs = false
        const y = Object.values(this.tabsOffset)[index]
        // console.log(index, '---', y);
        this.$refs.scroll.scrollTo(0, y)
      },

      // 获取各个组件的 offset
      getOffset() {
        if (this.$refs.param) {
          this.tabsOffset.param = -this.$refs.param.$el.offsetTop
          this.tabsOffset.comment = -this.$refs.comment.$el.offsetTop
          this.tabsOffset.recommend = -this.$refs.recommend.$el.offsetTop
        }
      },

      // 滚动改变 tabs 的选中
      scrollViewDidScroll(position) {

        this.isShowBackTop = (position.y < -1000)

        if (this.isScrollToRefreshTabs) {
          const y = position.y
          // console.log(position);
          const tabs = this.$refs.detailTabs
          let index = 0
          if (y <= this.tabsOffset.param && y > this.tabsOffset.comment) {
            index = 1
          }
          if (y <= this.tabsOffset.comment && y > this.tabsOffset.recommend) {
            index = 2
          }
          if (y <= this.tabsOffset.recommend) {
            index = 3
          }
          tabs.refreshCurrentIndex(index)
        }
      },

      scrollViewDidScrollEnd() {
        // console.log(position);
        this.isScrollToRefreshTabs = true
      },

      // 点击加入购物车
      addCartClick() {

        const goodsInfo = {}
        goodsInfo.iid = this.iid
        goodsInfo.title = this.goodsInfo.title
        goodsInfo.desc = this.goodsInfo.desc
        goodsInfo.price = this.goodsInfo.price
        goodsInfo.showPrice = this.goodsInfo.showPrice
        goodsInfo.image = this.banner[0]

        // this.$store.commit('addCartClick', goodsInfo)
        // 使用actions处理逻辑 返回 promise
        this.$store.dispatch(mutations_types.a_AddCartClick, goodsInfo).then(toast => {
          this.$toast(toast)
        })
      }
    }
  }
</script>

<style scoped>

  #goods-detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .detail-tabs {
    background-color: #fafafa;
  }

  .scroll-content {
    overflow: hidden;
    position: absolute;

    top: 44px;
    bottom: 58px;
    left: 0;
    right: 0;
  }

</style>
