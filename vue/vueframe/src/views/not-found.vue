<template>
  <div class="not-found">
    <div style="text-align:center">
      <i class="fa fa-exclamation-circle "></i>
      <p style="font-size:16px;">抱歉，您访问的URL有误</p>
    </div>
  </div>
</template>

<script>
  import { globalMixins } from 'src/mixins'

  export default {
    name: 'Not-found',

    layout: 'auth',

    mixins: [globalMixins]
  }
</script>

<style lang="stylus">
  .not-found
    background-color #fff
    max-width 500px
    margin 200px auto 0
    padding 50px 0

    .fa
      font-size 120px
      color red
</style>
