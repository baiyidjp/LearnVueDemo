<template>
  <div id="cart">
    <navigation-bar
      :title="navigationTitle"
      :is-show-back="false"
      backgroundColor="#ff8198"
      titleColor="#ffffff"/>
    <scroll class="scroll-content">
      <cart-list/>
    </scroll>
    <cart-bottom/>
  </div>
</template>

<script>

  import NavigationBar from "../../components/common/navigation-bar/NavigationBar";

  import Scroll from "../../components/common/scroll/Scroll";
  import CartList from "./components/CartList";

  import CartBottom from "./components/CartBottom";

  export default {
    name: 'Cart',
    components: {
      Scroll,
      NavigationBar,
      CartList,
      CartBottom
    },
    computed: {
      navigationTitle() {
        if (this.$store.getters.goodsCount <= 0) {
          return '购物车'
        } else {
          return '购物车' + '(' + this.$store.getters.goodsCount + ')'
        }
      }
    }
  }
</script>

<style scoped>

  .scroll-content {
    overflow: hidden;
    position: absolute;

    top: 44px;
    bottom: 93px;
    left: 0;
    right: 0;
  }

</style>
