<template>
  <div :class="['panel',panelType, volume]">
    <div class="panel-heading">
      <div class="ttv-left">        
        <slot name="panelHeadLeft">
          <h3 class="panel-title">{{panelTitle}}</h3>
        </slot>
      </div>
      <div class="ttv-right">
        <slot name="panelHeadRight"></slot>
      </div>
    </div>
    <div class="panel-body">
      <slot name="panelBody">Panel content</slot>
    </div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      twoway: true
    },
    panelType: {
      type: String,
      default: 'panel-default'
    },
    volume: {
      type: String,
      default: 'col-9',
      value: 'ss'
    },
    panelTitle: {
      type: String,
      default: 'Panel title'
    }
  },
  data () {
    return {

    }
  },

  route () {
    console.log('route')
  },

  ready () {
    // console.log(this.panelType, 'ready')
  },
  methods: {
    dismiss () {
      this.$dispatch('close')
      console.log('dismiss')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import '../assets/stylus/adminbase'
  .panel
    margin-bottom 20px
    border: 1px solid transparent
    border-radius 4px
    -webkit-box-shadow 0 1px 1px rgba(0, 0, 0, .05)
    box-shadow 0 1px 1px rgba(0, 0, 0, .05)
    min-height 20px
    .panel-heading
      border-radius 4px 4px 0px 0px
      height 40px
      line-height 40px
      background-color main-color
      color char-whit
      padding 0 20px
      .panel-title
        font-size 16px
        font-weight 500
    .panel-body,.panel-footer
      padding 2px

  .ttv-right
    text-align center
    vertical-align middle


</style>
