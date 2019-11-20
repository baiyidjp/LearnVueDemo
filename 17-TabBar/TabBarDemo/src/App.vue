<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar
      :tab-bar-data-array="tabBarDataArray"
      :tab-bar-title-font-size="tabBarTitleFontSize"
      :tab-bar-title-color="tabBarTitleColor"
      :tab-bar-title-active-color="tabBarTitleActiveColor">
    </tab-bar>
  </div>
</template>

<script>

  import TabBar from "./components/tabbar/TabBar";

export default {
  name: 'App',
  components: {
    TabBar
  },
  data() {
    return {
      tabBarTitleColor: '#3a3a3a',
      tabBarTitleActiveColor: '#5a2b81',
      tabBarTitleFontSize: '13px',
      tabBarDataArray: [
        {
          title: '首页',
          path: '/home',
          image: require('./assets/img/tabbar/home.svg'),
          activeImage: require('./assets/img/tabbar/home_active.svg')
        },
        {
          title: '消息',
          path: '/message',
          image: require('./assets/img/tabbar/message.svg'),
          activeImage: require('./assets/img/tabbar/message_active.svg')
        },
        {
          title: '购物车',
          path: '/cart',
          image: require('./assets/img/tabbar/cart.svg'),
          activeImage: require('./assets/img/tabbar/cart_active.svg')
        },
        {
          title: '我的',
          path: '/profile',
          image: require('./assets/img/tabbar/profile.svg'),
          activeImage: require('./assets/img/tabbar/profile_active.svg')
        }
      ]
    }
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
