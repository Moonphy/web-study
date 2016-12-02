<template>
  <div>
    <template v-if="showNavs">
      <div class="ttv-nav">
          <div class="ttv-logo"><span>约战</span></div>
          <ul class="ttv-nav-item">
              <li v-for="item in navs" @click.prevent.stop="toR(item.router)">
                <a href="{{item.router}}" :class="router === item.router ? 'ttv-active':''">{{item.name}}</a>
              </li>
          </ul>
      </div>
    </template>
    <div class="ttv-contentpad clearfix">
      <!-- <modal  :show="showEditDevice"  @close="onAddCancel"></modal> -->
      <!-- <panel  :show="showPanel"   @close="onAddCancel"></panel> -->
      <router-view  transition="view" transition-mode="out-in" class="view"></router-view>
    </div>

    <div class="spinner" v-if="showLoading">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>

  </div>
</template>

<script>
import store from './store/store.js'
import api from './api/api.js'
import Panel from './components/Panel'
import Modal from './components/Modal'
import { getNavs, setState, setRouter } from './store/actions'

export default {
  components: {
    Panel,
    Modal
  },
  // 状态管理
  store,

  vuex: {
    getters: {
      navs: ({ navs }) => navs.navs,
      showLoading: ({ system }) => system.loading,
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
      showNavs: true,
      showEditDevice: true,
      showPanel: true,
      key: '12a23'
    }
  },
  computed: {
    keys () {
      return this.key
    }
  },
  ready () {
    // this.setRouter(this.$route.path)
    // if (this.router === '/') {
    //   this.setRouter('/index')
    // }
    this.setState(true)
    api.nav.getNavs().then((res) => {
      this.getNav(res.data.rst)
      this.setState(false)
    }).catch((res) => {
      console.log(res, 'catch')
    })
  },
  methods: {
    onAddCancel () {
      console.log('methods')
    },
    toR (router) {
      // this.setRouter(router)
      // this.router = router
      this.setState(true)
      this.$route.router.go({path: router})
      // this.setState(true)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'assets/stylus/adminbase'
  @import 'assets/stylus/admin'
  @import 'assets/stylus/loading'


  .ttv-contentpad
    margin 20px 20px

  .view
    transition transform .3s ease-in-out, opacity .3s ease-in-out

  .view-enter
  .view-leave
    opacity 0
    transform translate3d(10px, 0, 0)

</style>
