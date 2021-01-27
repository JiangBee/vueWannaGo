import api from '@/api/cart'

const store = {
  state: { // 存放当前页面的状态
    goodlist: []
  },
  getters: { // 状态的衍生值， 其实就是state中的计算属性
    totalNum (state) {
      return state.goodlist.reduce((sum, item) => {
        if (item.flag) {
          return sum + item.count
        } else {
          return sum
        }
      }, 0)
    },
    totalPrice (state) {
      return state.goodlist.reduce((sum, item) => {
        if (item.flag) {
          return sum + item.count * item.price
        } else {
          return sum
        }
      }, 0)
    }
  },
  actions: { // 处理页面中的异步操作
    requestdata (context) {
      api.requestdata().then(data => {
        context.commit('changegoodlist', data)
      })
    }
  },
  mutations: { // 唯一改变当前页面状态的地方
    changegoodlist (state, data) {
      state.goodlist = data
    }
  }
}

export default store
