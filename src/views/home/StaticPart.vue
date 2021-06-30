<template>
  <div class="position">
      <span class="iconfont position__icon">&#xe61b;</span>
      河南郑州大学南院图书馆2层
      <span class="iconfont position__notice">&#xe613;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe6d6;</span>
      <span class="search__text">请输入想要搜索的内容</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
    </div>
    <div class="icons">
      <div class="icons__item" v-for="item in iconsList" :key="item.id">
        <img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${item.img}`">
        <p class="icons__item__desc">{{item.name}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      {
        id: 1,
        img: '超市.png',
        name: '超市便利'
      },
      {
        id: 2,
        img: '菜市场.png',
        name: '菜市场'
      },
      {
        id: 3,
        img: '水果店.png',
        name: '水果店'
      },
      {
        id: 4,
        img: '鲜花.png',
        name: '鲜花绿植'
      },
      {
        id: 5,
        img: '医药健康.png',
        name: '医药健康'
      },
      {
        id: 6,
        img: '家居.png',
        name: '家居时尚'
      },
      {
        id: 7,
        img: '蛋糕.png',
        name: '烘培蛋糕'
      },
      {
        id: 8,
        img: '签到.png',
        name: '签到'
      },
      {
        id: 9,
        img: '大牌免运.png',
        name: '大牌免运'
      },
      {
        id: 10,
        img: '红包.png',
        name: '红包套餐'
      }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import './../../style/viriables.scss';
@import './../../style/mixins.scss';
.position{
    color: $content-fontcolor;
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    @include ellipsis;
    .position__icon{
      position: relative;
      top: .01rem;
      font-size:.2rem;
    }
    .position__notice{
      position: absolute;
      right: 0;
      top:.17rem;
      font-size: .2rem;
    }
  }
  .search{
    line-height: .32rem;
    background: #f5f5f5;
    color: #B7B7B7;
    border-radius: .16rem;
    margin-bottom: .12rem;
    &__text{
      display: inline-block;
      font-size: .14rem;
    }
    .iconfont{
      position: relative;
      display: inline-block;
      font-size: .2rem;
      top: .04rem;
      padding:0 .12rem 0 .16rem;
    }
  }
  .banner{
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    &__img{
      width: 100%;
    }
  }
  .icons{
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;
    &__item{
      width: 20%;
      &__img{
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
      }
      &__desc{
        margin: .06rem 0 .16rem 0;
        text-align: center;
        color: $content-fontcolor;
      }
    }
  }
  .gap{
    margin: 0 -.18rem;
    height: .1rem;
    background: $content-bgColor;
  }
</style>
