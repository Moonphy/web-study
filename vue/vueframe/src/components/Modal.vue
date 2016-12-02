<template>
  <div v-if="show" transition="modal" class="modal">
    <div class="modal-wrapper">
      <div :style="dialogStyle" class="modal-dialog">
        <div class="modal-header">
          <slot name="header">
            <h3>提示</h3>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <slot name="footer"></slot><span @click="dismiss" class="fa fa-times-circle"></span>
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

.modal
  position fixed
  left 0
  top 0
  size 100%
  background rgba(0, 0, 0, .6)
  z-index 1000
  display table
  width 100%
  height 100%
  transition opacity .2s ease

  .modal-wrapper
    display table-cell
    vertical-align middle

  .modal-dialog
    position relative
    background rgba(255, 255, 255, .95)
    margin 0 auto
    width 500px
    box-shadow 0 2px 8px rgba(0, 0, 0, .3)
    transition all .3s ease

    .fa-times-circle
      absolute right top 3px
      size 40px
      line-height 40px
      text-align center
      cursor pointer
      font-size 16px
      color #666
      transition color .3s

      &:hover
        color red

  .modal-header
    padding 10px 20px
    border-bottom 1px solid #DDD

    h3
      font-weight normal
      color gray-darker
      margin 0

  .modal-body
    padding 30px
    max-height 540px
    overflow-y auto
    box-sizing border-box

    .table
      margin 0

    // 错误信息
    .error-msg
      text-align center
      margin-bottom 30px

  .modal-actions
      text-align center

      .btn
        width 120px

  .modal-footer
    padding 0 30px 20px
    text-align right
    clearfix()
</style>
