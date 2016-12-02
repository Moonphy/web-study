<template>
  <div class="ttv-nav">
      <div class="ttv-logo"><span>约战</span></div>
      <ul class="ttv-nav-item">
          <li v-for="item in navs" @click.prevent.stop="toR(item.router)">
            <a href="{{item.router}}" :class="router === item.router ? 'ttv-active':''">{{item.name}}</a>
          </li>
      </ul>
  </div>
</template>
<script>
  export default {

    route: {
      data (_route) {
        console.log('===', _route)
      }
    }

  }
</script>
<style>


</style>