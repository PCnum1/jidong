<template>
  <div class="content">
    <div class="category">
      <div class="category__item" :class="{'category__item--active': currentTab === item.tab}"
      v-for="item in categories" :key="item.name" @click="() => handleCategoryClick(item.tab)">{{item.name}}</div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__sales">月售 {{item.sales}} 件</p>
          <p class="product__item__price">
            <span class="product__item__yen" >&yen;</span>{{item.price}}
            <span class="product__item__origin" >&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus"
          @click="() => { changeCartItemInfo(shopId, item._id, item, -1) }"
          >-</span>
          {{cartList?.[shopId]?.[item._id]?.count || 0}}
          <span class="product__number__plus"
          @click="() => { changeCartItemInfo(shopId, item._id, item, 1) }"
          >+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { get } from '../../untils/request.js'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './CommonCartEffect.js'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleCategoryClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleCategoryClick }
}
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({
    list: []
  })
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }
  watchEffect(() => {
    getContentData()
  })
  const { list } = toRefs(content)
  return { list }
}
export default {
  name: 'Content',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleCategoryClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { changeCartItemInfo, cartList } = useCommonCartEffect()
    return { categories, currentTab, cartList, list, handleCategoryClick, shopId, changeCartItemInfo }
  }
}

</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.content{
  display: flex;
  position: absolute;
  top: 1.5rem;
  left: 0;
  right: 0;
  bottom: .5rem;
}
.category{
  width: .76rem;
  height: 100%;
  overflow-y: scroll;
  background: $search-bgColor;
  &__item{
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: #333;
    &--active{
      background: $bgColor;
    }
  }
}
.product{
  flex: 1;
  overflow-y: scroll;
  &__item{
    display: flex;
    position: relative;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__detail{
      overflow: hidden;
    }
    &__img{
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }
    &__title{
      @include ellipsis;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      margin: 0;
    }
    &__sales{
      margin: 0.06rem 0;
      font-size: .12rem;
    }
    &__price{
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__yen{
      font-size: .12rem;
    }
    &__origin{
      line-height: .02rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
      margin-right: .06rem;
    }
    .product__number{
      position: absolute;
      right: 0;
      bottom: .12rem;
      &__minus, &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus{
        border: .01rem solid $middle-fontColor;
        color: $middle-fontColor;
        margin-right: .1rem;
      }
      &__plus{
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: .1rem;
      }
    }
  }
}
</style>
