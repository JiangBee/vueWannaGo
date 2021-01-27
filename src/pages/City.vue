<template>
  <div class="container">
    <header class="header">CitySearch Header</header>
    <div class="content">
      <mt-index-list>
        <mt-index-section v-for="(item, index) of cityList" :key="index" :index="item.letter">
          <mt-cell v-for = "itm of item.cities" :key="itm.id" :title="itm.name"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script>
import api from '@/api/city/index.js'
import Vue from 'vue'
import { IndexList, IndexSection } from 'mint-ui'

Vue.use(IndexList, IndexSection)
export default {
  name: 'city',
  data () {
    return {
      cityList: []
    }
  },
  created () {
    api.requestList().then(data => {
      console.log(data.data)
      this.cityList = data.data
    }).catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
