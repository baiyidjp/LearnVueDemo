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
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend-view :recommend="recommend"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <home-tab-control></home-tab-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
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
  import HomeSwiper from "./components/HomeSwiper";
  import HomeRecommendView from "./components/HomeRecommendView";
  import HomeFeatureView from "./components/HomeFeatureView";
  import HomeTabControl from "./components/HomeTabControl";

  export default {
    name: 'Home',
    components: {
      NavigationBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      HomeTabControl
    },
    data() {
      return {
        result: {},
        banner: [],
        dKeyword: [],
        keywords: [],
        recommend: []
      }
    },
    created() {
      // 请求数据
      homeRequest.homeMultiData().then(result => {
        console.log(result)
        this.result = result
        this.banner = result.data.banner.list
        this.dKeyword = result.data.dKeyword.list
        this.keywords = result.data.keywords.list
        this.recommend = result.data.recommend.list
      })
    }
  }
</script>

<style scoped>

  #home {
    padding-top: 44px;
  }

</style>
