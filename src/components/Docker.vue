<template>
  <div class="docker">
    <span v-for="(item,index) in dockList" :key="index" :class="{'docker__item--active':index===0}" class="docker__item">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockList = [
      { icon: '&#xe6f9;', text: '首页' },
      { icon: '&#xe6a2;', text: '购物车' },
      { icon: '&#xe60c;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]
    return { dockList }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  bottom: .5rem;
  right: 0;
  background: blue;
}
.docker{
  display:flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid #F1F1F1;
  &__item{
    flex: 1;
    text-align: center;
    &--active{
      color: #1FA4FC;
    }
    .iconfont{
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
  }
  &__title{
    font-size: .2rem;
    transform: scale(.5,.5);
    transform-origin: center top;
  }
}
</style>
