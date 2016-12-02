<template>
  <div :class="[cls, icona]" @mouseleave="leave">
    <div class="select-body" @click="showSelect()">
      <cite>{{default_text}}</cite> 
      <i class="icon-down"></i>
    </div>
    <ul :class="['select-item', itemShow]"> 
      <li v-for="item in items" @click="choose(item)">
        <a href="javascript:;" selectid="{{item.id}}">{{item.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

    props: {
      'defaultText': {
        type: String,
        default: '请选择'
      },
      'cls': {
        type: String,
        default: 'select-default'
      },
      'icona': {
        type: String,
        default: ''
      },
      'items': {
        type: Array
      },
      'itemShow': {
        type: String,
        default: 'item-hide'
      }
    },

    methods: {

      showSelect () {
        if (this.icona === '') {
          this.icona = 'icon-show'
        } else {
          this.icona = ''
        }
        this.itemShow = this.itemShow === 'item-show' ? 'item-hide' : 'item-show'
      },

      choose (item) {
        this.default_text = item.text
        this.showSelect()
        this.$dispatch('select', item)
      },

      leave () {
        this.itemShow = 'item-hide'
      }
    },

    data () {
      return {
        default_text: this.defaultText
      }
    }

  }
</script>

<style lang="stylus">
  @import '../assets/stylus/color'
  @import '../assets/stylus/util'
  .select-default
    border 1px solid #ccc
    width 180px
    height 30px
    line-height 29px
    text-align left
    position relative
    .select-body
      width 100%
      position relative
      padding 0px 5px
    .select-item
      z-index 1000
      min-height 60px
      position absolute
      top 29px
      left 0
      background line-color
      width 178px
      opacity 0
      z-index -1
      _transition(.4s)
      li
        border-bottom 1px solid #eee
        padding-left 5px
        &:hover
          background-color #eefdfd
    .icon-down
      width: 12px;
      height: 12px;
      position: absolute;
      right: 5px;
      top: 6px;
      background url("http://www.zy.com/static/images/down-select.png") no-repeat center center
      transition: transform 0.2s ease-in
  .icon-show
    .select-item
      opacity 1
      z-index 1
    .icon-down
      transform: rotate(180deg);
      //-webkit-animation:circle .3s 1 linear forwards
  .icon-hide
    .icon-down
      transform: rotate(0deg);

  @-webkit-keyframes circle{
    0%{ transform:rotate(0deg); }
    50%{ transform:rotate(90deg); }
    100%{ transform:rotate(180deg); }
  }
    
</style>