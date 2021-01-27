import Vue from 'vue'
import Vuex from 'vuex'
import cartStore from './cart/cartindex.js' // 引入关于购物车的状态管理器
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cartStore
  }
})

export default store
