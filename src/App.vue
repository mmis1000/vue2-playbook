<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ajax">ajax test</router-link> |
      <router-link to="/recursive">recursion test</router-link> |
      <router-link to="/run-interval">set interval test</router-link> |
      <router-link to="/raf">request animation frame test</router-link> |
      <router-link to="/drag">draggable</router-link> |
      <router-link to="/graph">graph</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
