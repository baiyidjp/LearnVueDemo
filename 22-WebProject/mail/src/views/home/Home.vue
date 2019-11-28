<template>
  <div id="home">
    <!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
    <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
    <navigation-bar
      title="购物街"
      :isShowBack="false"
      backgroundColor="#ff8198"
      titleColor="#ffffff">
    </navigation-bar>
    <scroll class="scroll-content">
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tabs class="tabs" :tabs-title="tabsTitle" @tabClick="tabsClick"></tabs>
      <goods-list :goods-list="currentGoodList"/>
    </scroll>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
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
        // goods data
        goods: [
          {type: 'pop', page: 0, list: []},
          {type: 'new', page: 0, list: []},
          {type: 'sell', page: 0, list: []}
        ],
        currentTabIndex: 0
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
    computed: {
      currentGoodList() {
        return this.goods[this.currentTabIndex].list
      }
    },
    methods: {
      // 获取首页基本数据
      getHomeMultiData() {
        homeRequest.homeMultiData().then(result => {
          console.log(result)
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
          console.log(result);
          this.goods[index].list.push(...result.data.list)
          this.goods[index].page  += 1
        })
      },

      // 监听tabs的点击
      tabsClick(index) {
        this.currentTabIndex = index
      }
    }
  }
</script>

<style scoped>

  #home {
    padding-top: 44px;
    /* 适配整个page高度是100屏幕高 */
    height: 100vh;
    position: relative;
  }

  /*.scroll-content {*/
  /*  height: calc(100% - 44px - 49px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/

  .scroll-content {
    overflow: hidden;
    position: absolute;

    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tabs {
    position: sticky;
    top: 44px;
  }

</style>
