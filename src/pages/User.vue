<template>
  <div class="container">
    <div class="header userheader">
      <img class="user-poster" src="./../assets/logo.jpg">
    </div>
    <div class="content">
      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment" />
          待付款
        </van-col>
        <van-col span="6">
          <van-icon name="records" />
          待接单
        </van-col>
        <van-col span="6">
          <van-icon name="tosend" />
          待发货
        </van-col>
        <van-col span="6">
          <van-icon name="logistics" />
          已发货
        </van-col>
      </van-row>

      <van-cell-group class="user-group">
        <van-cell icon="records" title="全部订单" is-link />
      </van-cell-group>

      <van-cell-group>
        <van-cell icon="points" title="我的积分" is-link />
        <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
        <van-cell icon="gift-o" title="我收到的礼物" is-link />
      </van-cell-group>
    </div>
  </div>
  <!--<div class="container" v-else>-->
    <!--<div class="header">-->
    <!--</div>-->
    <!--<div class="content procontent">-->
      <!--<h2></h2>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
import Vue from 'vue'
import { Row, Col, Icon, Cell, CellGroup } from 'vant'
Vue.use(Row, Col, Icon, Cell, CellGroup)

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
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
.container {
  .userheader{
    @include text-align();
    padding:.2rem 0;
    .user-poster {
      display: inline-block;
      @include rect(.8rem, .8rem);
      border-radius: 50%;
    }
  }
  .user-group {
    margin-bottom: 15px;
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }

  .procontent{
    font-size: .16rem;
    @include text-align();
  }
}
</style>
