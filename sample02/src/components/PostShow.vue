<template>
  <div class="post">
       <h2>POST:{{  $route.params.id  }}</h2>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test/1">Test1</router-link> |
      <router-link to="/test/2">Test2</router-link> |
      <router-link to="/post/1">POST</router-link> 

 

  </div>
</template>
