<template>
  <footer class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <span class="fa fa-home fa-lg"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/kind" tag="li">
        <span class="fa fa-align-justify "></span>
        <p>分类</p>
      </router-link>
      <router-link to="/search" tag="li">
        <span class="fa fa-search fa-lg"></span>
        <p>搜索</p>
      </router-link>
      <router-link to="/cart" tag="li">
        <span class="fa fa-shopping-cart fa-lg"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/user" tag="li">
        <span class="fa fa-user-o fa-lg"></span>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
