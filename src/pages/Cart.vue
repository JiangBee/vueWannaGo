<template>
  <transition name="slide">
    <div class="container">
      <header class="header cart_header">
        <Back class="back"></Back>
        <p>想去 · 买得起的好设计</p>
      </header>
      <div class="content cartcontent container table-responsive">
        <table class="table">
          <tbody>
          <tr v-for="item of goodlist" :key="item.productId">
            <td class="col-xs-1 text-center">
              <input type="checkbox" v-model="item.flag"/>
            </td>
            <td class="col-xs-2 text-center">
              <img :src="item.imgUrl" alt="" style="width: .2rem;height: auto">
            </td>
            <td class="col-xs-2 text-center" style="font-size: .12rem">{{ item.productName }}</td>
            <td class="col-xs-2 text-center" style="font-size: .12rem">￥{{ item.price }}</td>
            <td class="col-xs-3 text-center add">
              <input type="button" value="+" @click.prevent="add(item.productId)" style="width: .2rem;height: .2rem"><input type="text" style="width: .2rem;height: .2rem;text-align: center;font-size: .12rem;" class="goodsplus" v-model="item.count"><input type="button" value="-" @click.prevent="minus(item.productId)" style="width: .2rem;height: .2rem">
            </td>
            <!--<td class="col-xs-2 text-center">{{ item.price*item.count }}</td>-->
            <td class="col-xs-1 text-center">
              <button style="border: none;outline: none;background-color: #fafafa;display: inline-block;margin-top: .01rem;"><van-icon name="delete" @click.prevent="del(item.productId)"/></button>
            </td>
          </tr>
          </tbody>
        </table>
        <van-submit-bar
          :price="totalPrice * 100"
          :num="totalNum"
          button-text="提交订单"
          @submit="onSubmit"
        >
          <!--<van-checkbox v-model="checked">全选</van-checkbox>-->
          全选<input type="checkbox" name="" id="" v-model="allselect">
        </van-submit-bar>
      </div>
    </div>
  </transition>
</template>
<script>
import api from '@/api/goods/Cookie.js'
import { mapState, mapGetters, mapActions } from 'vuex'
import { Button, Toast } from 'mint-ui'
import Back from '@/components/common/Back.vue'
import { SubmitBar, Icon } from 'vant'
import Vue from 'vue'
Vue.use(Icon)
Vue.use(SubmitBar)
Vue.use(Button, Toast)

export default {
  name: 'cart',
  components: {
    Back
  },
  data () {
    return {
      allselect: false
    }
  },
  watch: {
    allselect (newval, oldval) {
      if (oldval === false) {
        for (let i in this.goodlist) {
          this.goodlist[i].flag = true
        }
      } else {
        for (let j in this.goodlist) {
          this.goodlist[j].flag = false
        }
      }
    }
  },
  computed: {
    ...mapState({
      goodlist: state => state.cartStore.goodlist
    }),
    ...mapGetters(['totalNum', 'totalPrice'])
  },
  created () {
    this.requestdata()
  },
  methods: {
    onSubmit () {
      console.log('sub')
    },
    ...mapActions(['requestdata']),
    del (id) {
      console.log(id)
      console.log(this.goodlist)
      let index = this.goodlist.findIndex(item => {
        if (item.productId === id) {
          return true
        }
      })
      this.goodlist = this.goodlist.splice(index, 1)
      api.setCookie('goodlist', JSON.stringify(this.goodlist), 10)
    },
    add (id) {
      // console.log(id)
      for (var i = 0; i < this.goodlist.length; i++) {
        if (this.goodlist[i].productId === id) {
          this.goodlist[i].count++
        }
      }
      api.setCookie('goodlist', JSON.stringify(this.goodlist))
    },
    minus (id) {
      // console.log(id)
      for (var i in this.goodlist) {
        if (id === this.goodlist[i].productId) {
          if (this.goodlist[i].count <= 1) {
            Toast({
              message: '亲，不能再减了啊',
              position: 'bottom',
              duration: 500
            })
          } else {
            --this.goodlist[i].count
          }
        }
      }
      api.setCookie('goodlist', JSON.stringify((this.goodlist)))
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('isLogin') === 'ok') {
      next()
    } else {
      next('/register')
    }
  }
}
</script>
<style lang="scss">
@import '@/qunar/reset.scss';
.van-button--danger{
  border: none;
  outline: none;
  background-color: black;
}
.card-goods{
  padding: .1rem .1rem 0 .1rem;
}
.cartcontent{
  background-color: #fafafa;
}
.container{
  padding: 0;
  .cart_header{
    @include flexbox();
    @include justify-content(space-between);
    padding: .1rem 0;
  .back{
      margin-left: .1rem;
    }
    p{
      margin:.03rem .2rem 0 0;
    }
  }
}
.add{
  overflow: hidden;
  input{
    border: none;
    outline: none;
    float: left;
  }
  .goodsplus{
    border: 1px solid #ccc;
  }
}
.slide-enter {
  transform: translateX(100%);
}
.slide-enter-active {
  transition: all 0.4s;
}
.slide-enter-to {
  transform: translateX(0);
}
</style>
