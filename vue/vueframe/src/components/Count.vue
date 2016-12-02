<template>
    <button @click='increment'>Increment +1</button>
</template>

<script>
import { incrementCounter } from '../store/actions'
export default {
  vuex: {
    actions: {
      increment: incrementCounter
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
