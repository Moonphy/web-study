<template>
  <div class="login">
    {{nowPage}}
  </div>
</template>
<script>
  import store from '../store/store.js'
  import { getNavs, setRouter, setState } from '../store/actions'
  export default {

    store,

    vuex: {
      getters: {
        navs: ({ navs }) => navs.navs,
        router: ({ system }) => system.router
      },
      actions: {
        getNav: getNavs,
        setState: setState,
        setRouter: setRouter
      }
    },

    data () {
      return {
        toRouter: ''
      }
    },

    computed: {
      nowPage: {
        get () {
          return 'this is ' + this.toRouter
        }
      }
    },

    route: {
      data (_route) {
        // console.log('index-route', _route, this.router)
        var self = this
        this.toRouter = this.router
        this.setRouter(_route.to.path)
        setTimeout(() => {
          self.setState(false)
        }, 1000)
      }
    }

  }
</script>
<style>


</style>