<template>
  <div class="container">
    <mt-header title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-field placeholder="请输入手机号" type="tel" v-model="phone" :state = "phoneState" autocomplete="off"></mt-field>
    <mt-field placeholder="请输入验证码" v-model="code" :state = "codeState" autocomplete="off">
      <mt-button :disabled = "btnflag" @click.native="sendCode" plain>{{ msg }}</mt-button>
    </mt-field>
    <mt-field placeholder="请输入密码" type="password" sv-model="password" :state = "passwordState" autocomplete="off"></mt-field>
    <div class="btn">
      <mt-button :disabled="registerFlag" :type="type" @click.native="register">注册</mt-button>
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
      password: '123456',
      code: '',
      admin: '',
      btnflag: false
    }
  },
  computed: {
    phoneState () {
      if (/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phone)) {
        return 'success'
      } else {
        return 'error'
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else {
        if (this.password.length > 5) {
          return 'success'
        } else {
          return 'error'
        }
      }
    },
    codeState () {
      if (this.code === '') {
        return ''
      } else {
        if (this.code !== this.admin) {
          return 'error'
        } else {
          return 'success'
        }
      }
    },
    registerFlag () {
      if (this.codeState === 'success' && this.passwordState === 'success' && this.phoneState === 'success') {
        return false
      } else {
        return true
      }
    },
    type () {
      if (this.codeState === 'success' && this.passwordState === 'success' && this.phoneState === 'success') {
        return 'primary'
      } else {
        return 'default'
      }
    }
  },
  methods: {
    sendCode: function () {
      axios.get('https://www.daxunxun.com/users/sendCode?tel=' + this.phone)
        .then(data => {
          console.log(data)
          if (data.data === 1) {
            Toast('该用户已经注册')
          } else if (data.data === 0) {
            Toast('获取验证码失败')
          } else {
            this.admin = data.data.code
          }
        }).catch(err => {
          console.log(err)
        })
      let timer = null
      let time = 5
      timer = setInterval(() => {
        time--
        this.btnflag = true
        this.msg = time + '秒后重新发送'
        if (time === 0) {
          this.msg = '发送验证码'
          this.btnflag = false
          clearInterval(timer)
        }
      }, 1000)
    },
    register () {
      axios.post('https://www.daxunxun.com/users/register', {
        username: this.phone,
        password: this.password
      }).then(data => {
        if (data.data === 2) {
          Toast('该用户已经注册')
        } else if (data.data === 0) {
          Toast('注册失败')
        } else {
          Toast('注册成功！！')
          let storage = window.localStorage
          storage.setItem('isLogin', 'ok')
          this.$router.push('/')
        }
      })
    },
    login () {
      this.$router.push('/login')
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
  text-align: center;
}
.btncolor{
  background-color: #333333;
  color: #fff;
}
</style>
