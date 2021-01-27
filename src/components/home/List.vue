<template>
  <ul class="movieList">
    <router-link tag="li" :to="{path:'/detail', query:{id:item.productId}}" v-for="(item, index) in list" :key="index">
      <div class="goodsimg">
        <h4><img :src="item.imgUrl" /></h4>
        <p>{{ item.productName }}&nbsp;·&nbsp;{{item.brand}}</p>
        <span class="fa fa-cny">&nbsp;{{item.price}}&nbsp;</span><span class="fa fa-heart-o"></span>
      </div>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'homeList',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';

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
</style>
