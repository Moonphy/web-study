<template>
  <div id="app">
    <dav></dav>
    <hello></hello>
    <div class="form">
      <span>输入的是：{{ newItem }}</span>
      <br>
      <input type="text" v-model="newItem" placeholder="请输入...">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Dav from './components/Dav'
import Hello from './components/Hello'
export default {
  components: {
    Dav,
    Hello
  }
}
</script>

<style>
*{
  margin: 0;
}

#app {
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  text-decoration: none;
}
.form{
  width: 370px;
  margin: 30px auto;
  text-align: left;
}
.form input{
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid #0087cb;
  margin: 5px 0;
  box-sizing: border-box;
}
.form input:focus{
  box-shadow: inset 0 0 8px #4dc3fe;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
