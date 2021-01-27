<template>
  <div class="container">
    <header class="header home-header">
      <span class="fa fa-heartbeat fa-2x fa-aw"></span>
      <span class="wannago">想去&nbsp;·&nbsp;买得起的好设计</span>
    </header>
    <div class="content">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item, index) of banner" :key="index">
          <img :src="item.imgurl">
        </mt-swipe-item>
      </mt-swipe>

      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="move">
          <p class="todayre">今日推荐</p>
          <ul class="moveList">
            <router-link tag="li" :to="{path:'/detail', query:{id:item.productId}}" v-for="item in recommedlist" :key="item.productId">
              <div class="movegoods">
                <h4><img :src="item.imgUrl" /></h4>
                <p>{{ item.productName }}&nbsp;·&nbsp;{{item.brand}}</p>
                <span class="fa fa-cny">&nbsp;{{item.price}}&nbsp;</span><span class="fa fa-heart-o"></span>
              </div>
            </router-link>
          </ul>
        </div>
        <p class="todayre todaychoose">今日精选</p>
        <List :list = "list"/>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import List from '@/components/home/List'
import api from '@/api/home/index.js'
import { Swipe, SwipeItem, Loadmore, Toast } from 'mint-ui'

Vue.use(Swipe, SwipeItem, Loadmore, Toast)

export default {
  name: 'home',
  data () {
    return {
      list: [],
      banner: [],
      allLoaded: false,
      pageCode: 1,
      recommedlist: [
        {
          '_id': '5c6d5420657b5c76b27f3e6c',
          'productId': 3672039,
          'productName': '无袖上衣',
          'imgUrl': 'http://xqproduct.xiangqu.com/FhViPxVsTVPw0aIsf8z8gOCEQZuX?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 280,
          'sale': 26,
          'color': '薄荷绿',
          'count': 64,
          'brand': 'GUESS'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e6d',
          'productId': 3585743,
          'productName': '吊带背心',
          'imgUrl': 'http://xqproduct.xiangqu.com/FoluBuNGGCwkSOLyn_ZV3SC8W5B_?imageView2/2/w/300/q/90/format/jpg/750x750/',
          'price': 285,
          'sale': 27,
          'color': '纯色',
          'count': 65,
          'brand': 'KLM'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e6e',
          'productId': 3681826,
          'productName': '吊带背心',
          'imgUrl': 'http://xqproduct.xiangqu.com/Fm4pExcg2nMBu38QyvxI_O5q4S32?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 290,
          'sale': 28,
          'color': '素色',
          'count': 66,
          'brand': '猫背'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e6f',
          'productId': 3762718,
          'productName': '日系',
          'imgUrl': 'http://xqproduct.xiangqu.com/Ftsyo_0YNZmUKUcLKpAoXhk7jvDy?imageView2/2/w/300/q/90/format/jpg/1000x1047/',
          'price': 295,
          'sale': 29,
          'color': '素色',
          'count': 67,
          'brand': 'Me'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e70',
          'productId': 3764495,
          'productName': '外套潮',
          'imgUrl': 'http://xqproduct.xiangqu.com/FhTNmqc8onRSgNCyvBo1fNOmJhtO?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 300,
          'sale': 10,
          'color': '黑色',
          'count': 68,
          'brand': 'City'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e71',
          'productId': 3756165,
          'productName': '吊带',
          'imgUrl': 'http://xqproduct.xiangqu.com/Fj0w0PtFxIs8_F3bh7nWhtjCGNLY?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 305,
          'sale': 11,
          'color': '素色',
          'count': 69,
          'brand': 'MINS'
        }
      ]
    }
  },
  components: {
    List
  },
  methods: {
    loadTop () {
      api.requestList().then(data => { // 下拉刷新----实际上就是列表第一页的数据
        this.list = data.data
        this.pageCode = 1 // 重置页码
        this.$refs.loadmore.onTopLoaded() // 更新列表的高度
      }).catch(err => console.log(err))
    },
    loadBottom () { // 上拉加载 ----分页效果
      api.loadmore(this.pageCode).then(data => {
        // console.log(data.data)
        if (data.data.length === 0) { // 没有数据了
          this.allLoaded = true
          Toast({
            message: '数据已加载完毕',
            position: 'bottom',
            duration: 5000
          })
        } else {
          // console.log(this.list)
          this.list = [...this.list, ...data.data]
          this.pageCode += 1
          // console.log(this.list)
          // console.log(this.pageCode)
        }
        this.$refs.loadmore.onBottomLoaded() // 更新列表的高度
      })
    }
  },
  created () {
    api.requestBanner().then(data => {
      this.banner = data.data
    }).catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';
.home-header{
  padding: 0.05rem 0 0.05rem 0.3rem;
  .wannago{
    float: right;
    margin: .03rem .2rem 0 0;
  }
}

.content{
  .mint-swipe{
    @include rect(100%, 1.6rem);
    img{
      @include rect(100%, auto);
    }
  }
  .move{
    .moveList{
      @include rect(auto, auto);//width:100%,height:auto
      @include flexbox();
      @include flex-direction();
      @include flex-wrap();
      @include overflow();
      li{
        @include rect(100%, auto);
        @include flexbox();
        @include justify-content();
        @include align-items();
        //@include border(1px, #ddd, solid);
        @include margin();
        padding-top: 0.06rem;
        border-radius: .1rem;

        .movegoods{
          @include padding(0.05rem);
          @include justify-content();
          @include align-items();
          @include rect(100%, auto);
          text-align: center;
          h4{
            @include rect(100%, 1.4rem);
            @include overflow();
            border-radius: .03rem;
            img{
              @include rect(1.2rem, auto);
              border-radius: .03rem;
            }
          }
        }
      }
    }
  }

}
.todayre{
   @include text-align();
   border-bottom: 1px dashed #ccc;
   margin: 0 .1rem 0 .2rem;
   padding-bottom: .1rem;
 }
/*.todaychoose{*/
  /*margin-top: .1rem;*/
/*}*/
</style>
