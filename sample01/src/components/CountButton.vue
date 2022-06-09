<template>
  <div class="hello">
     <p>Count:{{ count }}</p>
      <button @click="countUp">+1</button>
   
  </div>
</template>

<script>
export default {
  name: "CountButton",
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    countUp: function(){
      this.count++
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
