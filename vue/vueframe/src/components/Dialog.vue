<template>
  <div v-if="show" transition="dialog" class="dialog">
    <div class="dialog-wrapper">
      <div :style="dialogStyle" class="dialog-main">
        <div class="dialog-header">
          <slot name="header">
            <h3>提示</h3>
          </slot>
        </div>
        <div class="dialog-body">
          <slot name="body">
            <table>
              <thead>
                <th>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </slot>
        </div>
        <slot name="footer">
          <div class="dialog-footer">
            <div class="ttv-left dialog-tips">message</div>
            <div class="ttv-right">
              <button class="btn btn-default"  @click.prevent="dismiss" >取消</button>
              <button class="btn btn-default"  @click.prevent="dismiss" >确定</button>
            </div>
          </div>
        </slot>
        <a href="#" @click.prevent="dismiss" class="dialog-close">X</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '500px'
    },
    show: {
      type: Boolean,
      required: true,
      twoway: true
    },
    flag: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      dialogStyle: {
        width: this.width
      }
    }
  },

  methods: {
    dismiss () {
      this.show = false
      this.$dispatch('close')
    }
  }
}
</script>

<style lang="stylus">
  @import '../assets/stylus/color'
  @import '../assets/stylus/util'
  @import '../assets/stylus/admin'
  @import '../assets/stylus/transitions'
  .dialog
    position fixed
    display table
    top 0 
    left 0 
    width 100%
    height 100%
    background rgba(0,0,0,0.6)
    z-index 1000
    transition opacity .2s ease
    .dialog-wrapper
      display table-cell
      vertical-align middle
    .dialog-main
      position relative
      background #fff
      margin 0 auto
      border-radius 4px
      .dialog-header
        //background main-color
        //color #fff
        //border-radius 4px
        height 35px
        line-height 35px
        padding 0 10px
        border-bottom 1px solid #ccc
      .dialog-body
        padding 10px
      .dialog-footer
        padding 0 10px
        height 40px
        line-height 40px
        border-top 1px solid #ccc
        .dialog-tips
          color red
      .dialog-close
        position absolute
        top 10px
        right 10px
        cursor pointer
        color #969696
        font-weight bold
        transition: transform 0.2s ease-in
        &:hover
          color main-color
          transform rotate(360deg)

</style>