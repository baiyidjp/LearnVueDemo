<template>
  <div id="home">
    <!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
    <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
    <navigation-bar
      title="购物街"
      :is-show-back="false"
      backgroundColor="#ff8198"
      titleColor="#ffffff">
    </navigation-bar>
    <tabs class="tabs-top" :tabs-title="tabsTitle" @tabClick="tabsClick" ref="tabsTop" v-show="isTabsFixed"></tabs>
    <scroll class="scroll-content" ref="scroll" :probe-type="3" @scroll="scrollViewDidScroll" :pull-up-load="true" @pullingUp="loadMoreData">
      <home-swiper :banner="banner" @swiperImageLoadDone="swiperImageLoadDone"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tabs :tabs-title="tabsTitle" @tabClick="tabsClick" ref="tabs"></tabs>
      <goods-list :goods-list="currentGoodList"/>
    </scroll>
    <!-- 组件要加原生事件要跟上.native -->
    <back-top v-show="isShowBackTop" @click.native="backTopClick"/>
  </div>
</template>

<script>

  import homeRequest from "../../network/home";

  import NavigationBar from '../../components/common/navigation-bar/NavigationBar';

  import Scroll from "../../components/common/scroll/Scroll";
  import HomeSwiper from "./components/HomeSwiper";
  import HomeRecommendView from "./components/HomeRecommendView";
  import HomeFeatureView from "./components/HomeFeatureView";
  import Tabs from "../../components/content/tabs/Tabs";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {BackToTopMixin} from "../../common/mixin";

  import {debounce} from "../../common/utils";

  export default {
    name: 'Home',
    components: {
      NavigationBar,
      Scroll,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      Tabs,
      GoodsList
    },
    mixins: [BackToTopMixin],
    data() {
      return {
        // home data
        result: {},
        banner: [],
        dKeyword: [],
        keywords: [],
        recommend: [],
        // tabs title
        tabsTitle: ['流行', '新款', '精选'],
        tabsOffsetTop: 0,
        isTabsFixed: false,
        currentTabIndex: 0,
        // goods data
        goods: [
          {type: 'pop', page: 0, list: []},
          {type: 'new', page: 0, list: []},
          {type: 'sell', page: 0, list: []}
        ],
        // isShowBackTop: false, 使用了混入
        // 离开页面记录当前页面的滚动的距离
        currentScrollY: 0
      }
    },
    created() {
      // 请求数据
      this.getHomeMultiData()

      // 请求商品数据
      this.getHomeGoodsData(0)
      this.getHomeGoodsData(1)
      this.getHomeGoodsData(2)
    },
    // this.$refs.scroll 在created中可能拿不到对应的组件
    mounted() {

      const refresh = debounce(this.$refs.scroll.refresh)
      // 监听goodsListItem中的图片加载成功
      this.$bus.$on('imageLoadDone', () => {
        // 监听到图片加载成功 实时改变 better-scroll的scrollerHeight
        // this.$refs.scroll.refresh()
        // 使用防抖函数 限制刷新频率
        refresh()
      })
    },
    destroyed() {
      console.log('home destroyed');
    },
    /* 记录页面的滚动距离，当页面变为活跃时，重新滚动到记录的距离 */
    activated() {
      // console.log(this.currentScrollY);
      this.$refs.scroll.refresh()
      // 先刷新后滚动 若先滚动后刷新会导致页面一直滚到到 0 0
      this.$refs.scroll.scrollTo(0, this.currentScrollY, 0)
    },
    deactivated() {
      this.currentScrollY = this.$refs.scroll.getScrollY()
      // console.log(this.currentScrollY);
    },
    computed: {
      currentGoodList() {
        return this.goods[this.currentTabIndex].list
      }
    },
    methods: {
      // 获取首页基本数据
      getHomeMultiData() {
        homeRequest.homeMultiData().then(result => {
          this.result = result
          this.banner = result.data.banner.list
          this.dKeyword = result.data.dKeyword.list
          this.keywords = result.data.keywords.list
          this.recommend = result.data.recommend.list
        })
      },

      // 商品数据
      getHomeGoodsData(index) {
        const type = this.goods[index].type
        const page = this.goods[index].page + 1
        homeRequest.homeGoodsData(type, page).then(result => {
          this.goods[index].list.push(...result.data.list)
          this.goods[index].page  = result.data.page
          // 结束上拉刷新
          this.$refs.scroll.finishPullUp()
        })
      },

      // 监听tabs的点击
      tabsClick(index) {
        this.currentTabIndex = index
        this.$refs.tabs.currentIndex = index
        this.$refs.tabsTop.currentIndex = index
      },

      // 回到顶部的点击  使用了混入
      // backTopClick() {
      //   // 拿到scroll组件
      //   this.$refs.scroll.scrollTo(0, 0)
      // },

      // 滚动
      scrollViewDidScroll(position) {
        // 设置滚动到顶部的显示与隐藏
        this.isShowBackTop = (position.y < -this.tabsOffsetTop)
        // 设置tabs是否吸顶
        this.isTabsFixed = (position.y < -this.tabsOffsetTop)
      },

      // 加载更多
      loadMoreData() {
        this.getHomeGoodsData(this.currentTabIndex)
      },

      // 监听banner的图片加载完成
      swiperImageLoadDone() {
        this.tabsOffsetTop = this.$refs.tabs.$el.offsetTop
      }
    }
  }
</script>

<style scoped>

  #home {
    /* 适配整个page高度是100屏幕高 */
    height: 100vh;
    position: relative;
  }

  .scroll-content {
    overflow: hidden;
    position: absolute;

    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tabs-top {
    position: relative;
    z-index: 999;
  }

  /*#home {*/
  /*  !* 适配整个page高度是100屏幕高 *!*/
  /*  height: 100vh;*/
  /*}*/

  /*.scroll-content {*/
  /*  height: calc(100% - 44px - 49px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/

</style>
