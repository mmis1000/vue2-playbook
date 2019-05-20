<template>
  <div id="app">
    <div class="nav" v-if="showNav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/ajax">ajax test</router-link>
      <router-link to="/recursive">recursion test</router-link>
      <router-link to="/run-interval">set interval test</router-link>
      <router-link to="/raf">request animation frame test</router-link>
      <router-link to="/drag">draggable</router-link>
      <router-link to="/graph">graph</router-link>
      <router-link to="/clock">clock</router-link>
    </div>
    <div class="main">
      <div class="toggle" @click="showNav = !showNav">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showNav: true
    }
  }
}
</script>


<style>
body {
  margin: 0;
  padding: 0;
  background: #333;
  color: #ccc;
}
</style>

<style lang="scss" scoped>
@import url(https://use.fontawesome.com/releases/v5.8.2/css/all.css);


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
  padding: 0;

  .nav {
    flex-grow: 0;
    flex-shrink: 0;
    white-space: nowrap;
    overflow-x: auto;

    a {
      color: #ccc;
      display: inline-block;
      padding: 0 1em;
      text-decoration: none !important;
      height: 2em;
      line-height: 2em;

      &:not(:last-child) {
        border-right: 1px solid #ccc;
      }

      &.router-link-exact-active {
        color: #36a;
      }
    }
  }
}

@media screen and (min-width: 600px ) {
  #app {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    min-height: 100vh;
    .main {
      flex-grow: 1;
      flex-shrink: 1;
      position: relative;

      .toggle {
        position: absolute;
        left: 0;
        top: 0;
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        opacity: 0.2;

        &:hover {
          opacity: 1;
        }
      }
    }
    .nav {
      width: 30%;
      max-width: 250px;
      flex-grow: 0;
      flex-shrink: 0;
      border-right: 1px solid #ccc;

      a {
        display: block;
        height: 3em;
        text-align: left;
        padding-left: 1em;
        line-height: 3em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
        color: #ccc;

        &:not(:last-child) {
          border-right: 0;
        }

        &:hover {
          background: rgba(30%, 30%, 30%, 33%)
        }
        &.router-link-exact-active {
          color: #36a;
        }
      }
    }
  }
}
</style>
