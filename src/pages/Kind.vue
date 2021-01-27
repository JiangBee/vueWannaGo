<template>
  <div class="kindcontainer">
    <div class="kindleft">
      <ul>
        <li @click="com='house'" class="touch">家居</li>
        <li @click="com='pen'" class="touch">文具</li>
        <li @click="com='media'" class="touch">数码</li>
        <li @click="com='play'" class="touch">玩乐</li>
        <li @click="com='can'" class="touch">餐厨</li>
        <li @click="com='eat'" class="touch">美食</li>
        <li @click="com='clothes'" class="touch">服装</li>
        <li @click="com='shoes'" class="touch">鞋包</li>
        <li @click="com='wear'" class="touch">配饰</li>
        <li @click="com='beauty'" class="touch">美护</li>
        <li @click="com='book'" class="touch">图书</li>
        <li @click="com='art'" class="touch">艺术</li>
      </ul>
    </div>
    <div class="kindright">
      <keep-alive name="house, pen, media, play, can, eat, clothes, shoes, wear, beauty, book, art">
        <component :is="com">right</component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import house from '@/components/kind/house'
import pen from '@/components/kind/pen'
import media from '@/components/kind/media'
import can from '@/components/kind/can'
import eat from '@/components/kind/eat'
import clothes from '@/components/kind/clothes'
import shoes from '@/components/kind/shoes'
import wear from '@/components/kind/wear'
import beauty from '@/components/kind/beauty'
import book from '@/components/kind/book'
import art from '@/components/kind/art'
import play from '@/components/kind/play'

export default {
  name: 'kind',
  components: {
    'House': house,
    'Pen': pen,
    'Can': can,
    'Eat': eat,
    'Clothes': clothes,
    'Shoes': shoes,
    'Wear': wear,
    'Beauty': beauty,
    'Book': book,
    'Art': art,
    'Media': media,
    'Play': play
  },
  data () {
    return {
      com: 'house'
    }
  },
  mounted () {
    let lis = Array.from(document.getElementsByClassName('touch'))
    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', function () {
        for (let i = 0; i < lis.length; i++) {
          lis[i].style.fontWeight = 'normal'
        }
        this.style.fontWeight = 'bold'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';

.kindcontainer{
  @include flex();//flex: 1
  @include rect(100%, auto);//width:100%,height:auto
  @include flexbox();
  @include flex-direction(row);
  .kindleft{
    @include rect(20%, 100%);
    @include overflow();
    background-color: rgba(218, 218, 218, .6);
    @include text-align();
    ul{
      li{
        padding: 0.16rem 0;
        font-size: .14rem;
      }
    }
  }
  .kindright{
    @include rect(80%, 100%);
    @include flex();//flex: 1
    .logo{
      @include border(0 0 1px 0,#999, solid);
      padding-bottom: .1rem;
      text-align: center;
      img{
        display: inline-block;
        margin-top: .1rem;
        border-radius: .05rem;
        @include rect(2.4rem, 1.25rem)
      }
      h3{
        margin-top: .1rem;
      }
    }
    .cont{
      ul{
        @include flexbox();
        @include rect(auto, 100%);
        @include justify-content(space-around);
        @include flex-wrap(wrap);
        li{
          @include text-align();
          @include rect(33%,20%);
          margin-top: .15rem;
        }
      }
    }
  }
}

</style>
