<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input placeholder="请输入用户名" v-model="username" class="wrapper__input__content" type="text">
    </div>
    <div class="wrapper__input">
      <input autocomplete="new-password" placeholder="请输入密码" v-model="password" class="wrapper__input__content" type="password">
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
    <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../untils/request.js'
import Toast, { useToastEffect } from '@/components/Toast.vue'

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    if (!data.username || !data.password) {
      return showToast('请输入账号或密码')
    }
    try {
      const result = await post('/api/user/login', {
        mobile: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { handleLogin, username, password }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}
export default {
  name: 'Login',
  components: {
    Toast
  },
  setup () {
    const { showToast, toastMessage, show } = useToastEffect()
    const { handleLogin, username, password } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()
    return { handleLogin, handleRegisterClick, username, password, toastMessage, show }
  }
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
    background: $btn-bgColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    color: $bgColor;
  }
  &__login-link{
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
