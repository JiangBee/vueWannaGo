// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './main.scss'
import './assets/iconfont/iconfont.js'
import MintUI from 'mint-ui'
import store from '@/store/index.js'

Vue.config.productionTip = false
// axios.defaults.withCredentials = true
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 当前项目中的任意一个组件都可以访问通过 this.$store 访问到状态
  components: { App },
  template: '<App/>'
})
