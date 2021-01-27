<template>
  <button @click="back" class="backbtn fa fa-reply fa-lg"></button>
</template>

<script>
export default {
  name: 'back',
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
@import '@/qunar/reset.scss';
.backbtn{
  @include rect(.28rem,.28rem);
  border: none;
  outline: none;
  background-color: rgba(238,238,238,.6);
}
</style>
