import mutations_types from "./mutations_types";

export default {
  /*
  *  mutations 中只处理简单的逻辑 复杂的都放在actions
  * */
  [mutations_types.m_AddToCart](state, payload) {
    state.goodsList.push(payload)
  },

  [mutations_types.m_GoodsAddCount](state, payload) {
    payload.count += 1
  }
  // addCartClick(state, payload) {
  //   // 查询数组中是否包含当前的商品
  //   const goods = state.goodsList.find(item => item.iid === payload.iid)
  //   if (goods) {
  //     // 存在当前的商品 数量加一
  //     goods.count += 1
  //   } else {
  //     // 不存在 加入购物车
  //     payload.count = 1
  //     state.goodsList.push(payload)
  //   }
  // }

}
