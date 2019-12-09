export default {
  goodsCount(state) {
    return state.goodsList.length
  },

  goodsList(state) {
    return state.goodsList
  },

  // 判断是否是全选
  isAllChecked(state) {
    if (state.goodsList.length === 0) {
      return false
    }

    const array = state.goodsList.filter(goods => !goods.checked)
    return array.length === 0
  },

  // 选中的商品集合
  checkedGoodsList(state) {
    return state.goodsList.filter(goods => goods.checked)
  },

  // 结账的总个数
  billCount(state, getters) {
    if (state.goodsList.length === 0) {
      return 0
    }
    const count = getters.checkedGoodsList.reduce((oldValue, newValue) => oldValue + newValue.count, 0)
    return count
  },

  // 总钱数
  allPrice(state, getters) {
    if (state.goodsList.length === 0) {
      return 0
    }
    const allPrice = getters.checkedGoodsList.reduce((oldValue, newValue) => oldValue + newValue.price * newValue.count, 0)
    return allPrice.toFixed(2)
  }
}
