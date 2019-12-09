import mutations_types from "./mutations_types";

export default {

  [mutations_types.a_AddCartClick](context, payload) {

    return new Promise((resolve) => {
      // 查询数组中是否包含当前的商品
      const goods = context.state.goodsList.find(item => item.iid === payload.iid)
      if (goods) {
        // 存在当前的商品 数量加一
        context.commit(mutations_types.m_GoodsAddCount, goods)
        resolve('加入购物车成功 +1')
      } else {
        // 不存在 加入购物车
        payload.count = 1
        payload.checked = true
        context.commit(mutations_types.m_AddToCart, payload)
        resolve('加入购物车成功')
      }
    })
  },

  // 购物车点击 + -
  [mutations_types.a_GoodsAddClick](context, payload) {
    context.commit(mutations_types.m_GoodsAddCount, payload)
  },

  [mutations_types.a_GoodsSubClick](context, payload) {
    context.commit(mutations_types.m_GoodsSubCount, payload)
  },

  // 购物车点击全选
  [mutations_types.a_CartAllCheckedClick](context) {
    if (context.getters.isAllChecked) {
      // for (const goods of context.getters.goodsList) {
      //   goods.checked = false
      // }
      context.getters.goodsList.forEach(goods => goods.checked = false)
    } else {
      context.getters.goodsList.forEach(goods => goods.checked = true)
    }
  }
}
