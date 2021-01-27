<template>
  <ul class="brandList">
    <router-link tag="li" :to="{path:'/brand', query:{brand:item}}" v-for="(item, index) in list" :key="index">
      {{ item }}
    </router-link>
  </ul>
</template>

<script>
/**
 *
 *  1==> :to="{name:'detail', query:{id:item.id}}"
 *  2==> :to="{path:'detail', query:{id:item.id}}"
  *  id为传递的参数，该方式  /detail?id=12121s
  *   methods  中添加点击事件函数
*   getId (id) {
  // this.$router.push('/detail?id=' + id)
  // this.$router.push({name: 'detail', query: {id}})
  this.$router.push({path: '/detail', query: {id}})
}
* */

export default {
  name: 'searchList',
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

.brandList{
  @include flexbox();
  @include justify-content(space-around);
  @include flex-wrap(wrap);
  li{
    @include padding(0.05rem);
    margin: 0.05rem 0.05rem 0 0.05rem;
    @include border(1px, #ccc, solid);
    border-radius: .5rem;
  }
}
</style>
