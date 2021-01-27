<template>
  <div class="container">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-field placeholder="请输入手机号" type="tel" v-model="phone" autocomplete="off"></mt-field>
    <mt-field placeholder="请输入密码" type="password" v-model="password" autocomplete="off"></mt-field>
    <div class="btn">
      <mt-button @click.native="login" class="btncolor">登录</mt-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Header, Field, Button, Toast } from 'mint-ui'
Vue.use(Header, Field, Button, Toast)

export default {
  name: 'register',
  data () {
    return {
      msg: '发送验证码',
      phone: '18895379820',
      password: ''
    }
  },
  computed: {
  },
  methods: {
    login () {
      axios.post('https://www.daxunxun.com/users/login', {
        username: this.phone,
        password: this.password
      }).then(data => {
        // switch (data.data) {
        //   case 0: Toast('登录失败！'); break
        //   case 1: Toast('登录成功！'); break
        //   case 2: Toast('抱歉，还未注册！'); break
        //   case -1: Toast('密码错误！'); break
        // }
        if (data.data === 1) {
          let storage = window.localStorage
          storage.setItem('isLogin', 'ok')
          this.$router.push('/')
          Toast({
            message: '登录成功!',
            position: 'bottom',
            duration: 500
          })
        } else if (data.data === 0) {
          Toast({
            message: '登录失败！',
            position: 'bottom',
            duration: 500
          })
        } else if (data.data === -1) {
          Toast({
            message: '密码错误！',
            position: 'bottom',
            duration: 500
          })
        } else {
          Toast({
            message: '抱歉，您还未注册！',
            position: 'bottom',
            duration: 500
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .mint-header{
    background-color: #333333;
  }
  .mint-field {
    input:-webkit-autofill { box-shadow: 0 0 0px 1000px white inset;}
  }
  .btn{
    margin-top: .2rem;
    text-align: center;
  }
  .btncolor{
    background-color: #333333;
    color: #fff;
  }
</style>
