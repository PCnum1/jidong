import { useStore } from 'vuex'
export const useCommonCartEffect = () => {
  const store = useStore()
  const { cartList } = store.state
  console.log(cartList)
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }
  return { cartList, changeCartItemInfo }
}
