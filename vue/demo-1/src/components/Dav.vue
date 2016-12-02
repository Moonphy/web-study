<template lang="jade">
  nav.nav
    ul
      li: a(href='/index',v-bind:class='{"active": isIndex}') 首页
      li: a(href='/list',v-bind:class='{"active": isList}') 列表页
      li: a(href='/home',v-bind:class='{"active": isHome}') 个人页
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      isIndex: false,
      isList: true,
      isHome: false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .nav
    width 100%
    height 50px
    background-color #0087cb

  ul
    list-style none
    width 900px
    margin 0 auto
    box-sizing border-box
    li
      float left
      a
        display block
        color #ffffff
        padding 15px 20px
        &:hover
        &.active
          background-color #ffffff
          color #0087cb
</style>
