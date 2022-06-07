<template>
<h1>カウントアップ vue.js</h1>
  <div id="app">
    <CountButton></CountButton>
  </div>
</template>

<script>
import CountButton from './components/CountButton.vue'

export default {
  name: 'app',
  components: {
    CountButton
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
