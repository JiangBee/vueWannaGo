<template>
  <transition name="slide">
    <div class="container">
      <header class="header">
        <Back class="back"></Back>
        <p>想去 · 买得起的好设计</p>
      </header>
      <div class="content">
        <!-- 如果查询到到该品牌 show部分就不显示，反之就显示 -->
        <div class="showdialog" v-if="showflag">
          <h3>抱歉，该品牌还未入驻本店 </h3>
        </div>
        <ul class="movieList" v-else>
          <router-link tag="li" :to="{path:'/detail', query:{id:item.productId}}" v-for="(item, index) in brandinfo[0]" :key="index">
            <div class="goodsimg">
              <h4><img :src="item.imgUrl" /></h4>
              <p>{{ item.productName }}&nbsp;·&nbsp;{{item.brand}}</p>
              <span class="fa fa-cny">&nbsp;{{item.price}}&nbsp;</span><span class="fa fa-heart-o"></span>
            </div>
          </router-link>
        </ul>
        <div class="goodrecommed">
          <h3>
            <!--<svg class="icon" aria-hidden="true">-->
            <!--<use xlink:href="#icon-tianqi_icon"></use>-->
            <!--</svg>-->
            <p>·&emsp;精品推荐&emsp;·</p>
            <!--<svg class="icon" aria-hidden="true">-->
            <!--<use xlink:href="#icon-tianqi_icon"></use>-->
            <!--</svg>-->
          </h3>
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
      </div>
    </div>
  </transition>
</template>
<script>
import Back from '@/components/common/Back.vue'
import api from '@/api/brand/index.js'
import apipro from '@/api/search/index.js'
export default {
  name: 'brand',
  data () {
    return {
      brandinfo: [],
      brandlist: [],
      showflag: false,
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
          'productNam': '日系',
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
          'productNam': '外套潮',
          'imgUrl': 'http://xqproduct.xiangqu.com/FhTNmqc8onRSgNCyvBo1fNOmJhtO?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 300,
          'sale': 10,
          'color': '黑色',
          'count': 68,
          'brand': 'City'
        },
        {
          '_id': '5c6d5420657b5c76b27f3e71',
          'productId': 3580588,
          'productName': '立领衬衫',
          'imgUrl': 'http://xqproduct.xiangqu.com/Fp7iPMxPqo4Jtj7z86tdMvTjUipl?imageView2/2/w/300/q/90/format/jpg/800x800/',
          'price': 305,
          'sale': 11,
          'color': '薄荷绿',
          'count': 69,
          'brand': 'MINS'
        }
      ]
    }
  },
  components: {
    Back
  },
  created () {
    let brand = this.$route.query.brand
    api.requestList(brand)
      .then(data => {
        this.brandinfo.push(data.data)
        // console.log(this.brandinfo[0])
      })
      .catch(err => console.log(err))
    apipro.brandList().then(data => { // 获取品牌列表
      // console.log(data.data)
      this.brandlist = data.data
      let num = this.brandlist.indexOf(brand)
      if (num === -1) {
        this.showflag = true
      } else {

      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';
.container{
  @include overflow();
  .header{
     @include flexbox();
     @include justify-content(space-between);
     .back{
       margin-left: .1rem;
     }
     p{
       margin:.03rem .1rem 0 0;
     }
   }
  .content{
    .showdialog{
      h3{
        @include text-align();
        margin: .2rem 0;
      }
    }
    .movieList{
      @include rect(100%, auto);//width:100%,height:auto
      @include flexbox();
      @include justify-content(space-around);
      @include flex-direction();
      @include flex-wrap(wrap);

      li{
        @include rect(45%, auto);
        @include flexbox();
        @include justify-content();
        @include align-items();
        @include border(1px, #ddd, solid);
        @include margin();
        padding-top: 0.06rem;
        border-radius: .1rem;

        .goodsimg{
          @include padding(0.05rem);
          @include justify-content();
          @include align-items();
          @include rect(100%, auto);
          text-align: center;
          h4{
            @include rect(100%, 1.52rem);
            @include overflow();
            border-radius: .03rem;
            img{
              @include rect(100%, auto);
              border-radius: .03rem;
            }
          }
          .fa-cny{
            color: #cccccc;
          }
        }
      }
    }
    .goodrecommed{
      h3{
        @include text-align();
        @include rect(100%, .4rem);
        font-size: .14rem;
        line-height: .4rem;
        p{
          border-bottom: 1px dashed #ccc;
        }
      }
      .moveList{
        @include rect(100%, auto);//width:100%,height:auto
        @include flexbox();
        @include justify-content(space-around);
        @include flex-direction();
        @include flex-wrap(wrap);
        li{
          @include rect(45%, auto);
          @include flexbox();
          @include justify-content();
          @include align-items();
          @include border(1px, #ddd, solid);
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
              @include rect(100%, 1.52rem);
              @include overflow();
              border-radius: .03rem;
              img{
                @include rect(100%, auto);
                border-radius: .03rem;
              }
            }
          }
        }
      }
    }
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
