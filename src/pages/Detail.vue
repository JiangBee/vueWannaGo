<template>
  <transition name="slide">
    <div class="container">
      <header class="header detail_header">
        <Back class="back"></Back><div class="detailgo">想去&nbsp;·&nbsp;买得起的好设计</div>
      </header>
      <div class="content">
        <div class="goodsdetail">
          <p><img :src="pro.imgUrl"/></p>
          <h2>
            <span>想去 · 买得起的好设计</span>
          </h2>
          <h3>品牌 · &nbsp;{{ pro.brand }}&emsp;&emsp;好物&nbsp;·&nbsp;{{ pro.productName }}</h3>
          <h4>
            <span class="fa fa-rmb fa-lg">&nbsp;{{ pro.price }}</span>
          </h4>
          <h5>
            <span class="fa fa-hand-o-right"> 七天无理由退货</span>
            <span class="fa fa-hand-o-right"> 48小时发货</span>
            <span class="fa fa-hand-o-right"> 担保交易</span>
          </h5>
        </div>
        <van-goods-action>
          <van-goods-action-mini-btn
            icon="chat-o"
            text="客服"
          />
          <van-goods-action-mini-btn
            icon="cart-o"
            text="购物车"
            @click="toCart"
          />
          <van-goods-action-big-btn
            text="加入购物车"
            class="gray"
            @click="joinCart"
          />
          <van-goods-action-big-btn
            text="立即购买"
            class="black"
            @click="buyGoods"
          />
        </van-goods-action>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import Back from '@/components/common/Back.vue'
import api from '@/api/detail/index.js'
import apicookie from '@/api/goods/Cookie.js'
import { Toast } from 'mint-ui'
import { GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn } from 'vant'
Vue.use(Toast)
Vue.use(GoodsAction)
Vue.use(GoodsActionBigBtn)
Vue.use(GoodsActionMiniBtn)

export default {
  name: 'detail',
  data () {
    return {
      pro: {}
    }
  },
  methods: {
    toCart () {
      this.$router.push('/cart')
    },
    joinCart () {
      if (localStorage.getItem('isLogin') === 'ok') {
        let goodsobj = {
          'productId': this.pro.productId,
          'imgUrl': this.pro.imgUrl,
          'price': this.pro.price,
          'brand': this.pro.brand,
          'productName': this.pro.productName,
          'count': 1,
          'flag': false
        }
        var goodlist = []
        let flag = true
        if (apicookie.getCookie('goodlist')) {
          goodlist = JSON.parse(apicookie.getCookie('goodlist'))
          for (var i in goodlist) {
            if (goodlist[i].productId === goodsobj.productId) {
              goodlist[i].count = Number(goodlist[i].count)
              goodlist[i].count++
              flag = false
            }
          }
          if (flag) {
            goodlist.push(goodsobj)
          }
        } else {
          goodlist.push(goodsobj)
        }
        apicookie.setCookie('goodlist', JSON.stringify(goodlist), 10)
        Toast({
          message: '操作成功',
          iconClass: 'fa fa-check',
          position: 'bottom',
          duration: 500
        })
      } else {
        this.$router.push('/register')
      }
    },
    buyGoods () {
      console.log(3)
    }
  },
  components: {
    Back
  },
  created () {
    let id = this.$route.query.id
    api.requestData(id).then(data => {
      // console.log(data)
      this.pro = data[0]
    }).catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';

.detail_header{
  @include rect(100%, auto);//width:100%,height:auto
  @include flexbox();
  @include justify-content(space-between);
  padding: 0.05rem .1rem;
  .detailgo{
    margin-top: .03rem;
  }
}
.content{
  @include overflow();
  .goodsdetail{
    p{
      margin-top: .05rem;
      @include text-align();
      @include rect(auto, 3.5rem);
      @include overflow();
      img{
        @include rect(3rem, auto);
        display: inline-block;
        margin: 0 auto;
        vertical-align: middle;
      }
    }
    h2{
      margin:.1rem 0 0 .2rem;
      span{
        display: inline-block;
      }
    }
    h3{
      margin:.1rem 0 .1rem .2rem;
    }
    h4{
      margin:.15rem 0 0 .2rem;
      color: #858585
    }
    h5{
      margin:.2rem 0 0 .2rem;
      color: #858585
    }
    //@include text-align();
  }
}
.black{
  background-color: black;
  border: none;
  /*outline: none;*/
}
.gray{
  border: none;
  background-color: #979ba3;
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
