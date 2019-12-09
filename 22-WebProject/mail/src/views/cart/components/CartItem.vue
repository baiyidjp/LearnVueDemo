<template>
  <div class="cart-item">
    <div class="item-container" @click="itemClick">
      <cart-check :checked="item.checked" @checkedClick="checkedClick"/>
      <img :src="item.image" alt="" class="goods-img">
      <div class="goods-info">
        <div class="goods-title">{{ item.title }}</div>
        <div class="goods-desc">{{ item.desc }}</div>
        <div class="price-count">
          <div class="price">{{ item.showPrice }}</div>
          <div class="count-container">
            <button @click.stop="subClick" :disabled="item.count <= 1">-</button>
            <div class="count">{{ item.count }}</div>
            <button @click.stop="addClick">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import CartCheck from "./CartCheck";

  import mutations_types from "../../../store/mutations_types";

  export default {
    name: 'CartItem',
    components: {
      CartCheck
    },
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkedClick() {
        this.item.checked = !this.item.checked
      },
      addClick() {
        this.$store.dispatch(mutations_types.a_GoodsAddClick, this.item)
      },
      subClick() {
        this.$store.dispatch(mutations_types.a_GoodsSubClick, this.item)
      },
      itemClick() {
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.item.iid
          }
        })
      }
    }
  }
</script>

<style scoped>

  .item-container {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .goods-img {
    width: 70px;
    height: 100px;
    border-radius: 4px;
    margin: 0 5px;
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    /*多余的隐藏*/
    overflow: hidden;
  }

  .goods-title {
    font-size: 17px;
    color: #4a4a4a;
    white-space: nowrap;
    /*多余的隐藏*/
    overflow: hidden;
    /*显示...*/
    text-overflow: ellipsis;
    padding: 5px 0;
  }

  .goods-desc {
    font-size: 15px;
    color: #9b9b9b;
    white-space: nowrap;
    /*多余的隐藏*/
    overflow: hidden;
    /*显示...*/
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }

  .price-count {
    display: flex;
    justify-content: space-between;
  }

  .price {
    color: #f13e3a;
    font-size: 17px;
    font-weight: 500;
  }

  .count-container {
    display: flex;
    align-items: center;
  }

  .count-container button {
    width: 24px;
    height: 24px;
  }

  .count-container button {
    background-color: #fafafa;
    border: none;
    color: #5b5b5b;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
  }

  .count {
    margin: 0 10px;
  }

</style>
