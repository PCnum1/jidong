<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input placeholder="请输入用户名" v-model="username" class="wrapper__input__content" type="text">
    </div>
    <div class="wrapper__input">
      <input autocomplete="new-password" v-model="password" placeholder="请输入密码" class="wrapper__input__content" type="password">
    </div>
    <div class="wrapper__input">
      <input autocomplete="new-password" v-model="ensurement" placeholder="请输入确认密码" class="wrapper__input__content" type="password">
    </div>
    <div class="wrapper__register-button">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">已有账号请登录</div>
    <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../untils/request.js'
import Toast, { useToastEffect } from '@/components/Toast.vue'

const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        mobile: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return { handleRegister, username, password, ensurement }
}
const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}
export default {
  name: 'Login',
  components: {
    Toast
  },
  setup () {
    const { showToast, toastMessage, show } = useToastEffect()
    const { handleRegister, username, password, ensurement } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()
    return { handleLoginClick, handleRegister, username, password, ensurement, toastMessage, show }
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
  &__register-button{
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
    background: $btn-bgColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    color: #fff;
  }
  &__register-link{
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
