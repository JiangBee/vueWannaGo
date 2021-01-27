<template>
  <div class="container">
    <van-search class="header"
      v-model="searchvalue"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch()"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="content">
      <div class="brandsearch">
        <searchList :list="list"></searchList>
      </div>
      <div class="recommed">
        <p class="good">·····························好物推荐·····························</p>
        <Recommed></Recommed>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/search/index.js'
import List from '@/components/search/List.vue'
import Recommed from '@/components/search/recommed.vue'
import Vue from 'vue'
import { Button } from 'mint-ui'
import { Search } from 'vant'
Vue.use(Button)
Vue.use(Search)

export default {
  name: 'search',
  data () {
    return {
      list: [],
      searchvalue: '',
      searchbrand: ''
    }
  },
  components: {
    'searchList': List,
    Recommed
  },
  created () {
    api.brandList().then(data => {
      // console.log(data)
      this.list = data.data
      // console.log(this.list)
    })
  },
  methods: {
    onSearch () {
      // this.$router.push({path: '/home', query: {}})
      this.$router.push('/brand?brand=' + this.searchvalue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import  '@/qunar/reset.scss';
.mint-searchbar-core{
  text-indent:.05rem;
}
.content{
  .good{
    text-align: center;
    margin: 0 0 -5px 0;
    color: #bbb;
    @include overflow();
  }
  .recommed{
    margin: .08rem 0;
    ul{
      @include rect(100%, 100%);
      @include overflow();
      li{
        margin: .1rem 0 0 0;
        position: relative;
        @include overflow();
        img{
          @include rect(100%, 1.3rem)
        }
        p{
          position: absolute;
          left: 0;
          bottom: 0;
          @include rect(100%, .2rem);
          background-color: rgba(200,200,200,.6);
          text-align: center;
        }
      }
    }
  }
}
</style>
