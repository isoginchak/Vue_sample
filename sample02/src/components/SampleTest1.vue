<template>
  <div id="app">
    <div id="nav">
     <h2>TEST1</h2>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test/1">Test1</router-link> |
      <router-link to="/test/2">Test2</router-link> |
        <router-link to="/post/1">POST</router-link> 
     
    </div>
    <router-view/>
  </div>
</template>
