<template>
  <div class="hello">
    <h1 @click="changetest">{{ msg }}{{key}}</h1>
    <slot  name="hello">0</slot>
    <slot  name="hello1">1</slot>
    <slot  name="hello2">2</slot>
    <h3>Count is {{ counterValue }}</h3>
  </div>
</template>

<script>
import { getCount } from '../store/getter'
export default {
  vuex: {
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      counterValue: getCount
    }
  },
  props: {
    key: {
      type: String,
      twoWay: true,
      default: ''
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    changetest () {
      this.$dispatch('changetest')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
