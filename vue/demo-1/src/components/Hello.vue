<template>
  <div class="hello">
    <h1>{{{ msg }}}</h1>
    <p>
      {{ ne }}
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      msg: '创建一个简单的ToDoList',
      ne: '请在输入框中输入要创建的项目'
    }
  }
}
</script>

<style scoped>
.hello{
  margin-top: 30px;
}
h1 {
  color: #0087cb;
}
</style>
