<template>
  <div class="cart-bottom">
    <div class="left-container">
      <cart-check class="checked" :checked="isAllChecked" @checkedClick="allCheckedClick"/>
      <div class="all-checked">全选</div>
      <div class="total-title">合计:</div>
      <div>￥</div>
      <div class="total-price">{{allPrice}}</div>
    </div>
    <div class="to-bill">去结算({{billCount}})</div>
  </div>
</template>

<script>

  import CartCheck from "./CartCheck";

  import {mapGetters} from 'vuex'

  import mutations_types from "../../../store/mutations_types";

  export default {
    name: 'CartBottom',
    components: {
      CartCheck
    },
    computed: {
      ...mapGetters(['isAllChecked', 'billCount', 'allPrice'])
    },
    methods: {
      allCheckedClick() {
        this.$store.dispatch(mutations_types.a_CartAllCheckedClick)
      }
    }
  }
</script>

<style scoped>

  .cart-bottom {
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 44px;
    background-color: #fafafa;
    box-shadow: 0 -1px 1px rgba(0,0,0,0.1);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-container {

    display: flex;
    align-items: center;
    font-size: 15px;
    color: #9b9b9b;
  }

  .checked {
    margin: 0 5px 0 10px;
  }

  .total-title {
    margin: 0 5px 0 20px;
  }

  .total-price {
    font-size: 22px;
    color: #4a4a4a;
  }

  .to-bill {
    height: 100%;
    width: 100px;
    background-color: #ff0000;
    color: #ffffff;
    text-align: center;
    line-height: 44px;
  }

</style>
