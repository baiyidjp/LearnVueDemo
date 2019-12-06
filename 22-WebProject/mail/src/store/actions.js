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
        context.commit(mutations_types.m_AddToCart, payload)
        resolve('加入购物车成功')
      }
    })
  }
}
