import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {

    }
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, prodcutId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let product = shopInfo[prodcutId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + num
      if (product.count < 0) { product.count = 0 }
      shopInfo[prodcutId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
