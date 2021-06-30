<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input placeholder="请输入手机号" class="wrapper__input__content" type="text">
    </div>
    <div class="wrapper__input">
      <input placeholder="请输入密码" class="wrapper__input__content" type="password">
    </div>
    <div class="wrapper__login-button">登录</div>
    <div class="wrapper__login-link">立即注册</div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img{
    width: .66rem;
    height: .66rem;
    display: block;
    margin: 0 auto .4rem auto;
  }
  &__input{
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    background: #f9f9f9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    padding: 0 .16rem;
    box-sizing: border-box;
    &__content{
      width: 100%;
      border: none;
      line-height: .48rem;
      outline: none;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder{
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button{
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    color: #fff;
  }
  &__login-link{
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
