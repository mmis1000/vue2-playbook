<template>
  <div id="app">
    <div class="nav" v-if="showNav">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/ajax">Ajax test</router-link>
      <router-link to="/recursive">Recursion test</router-link>
      <router-link to="/run-interval">Set interval test</router-link>
      <router-link to="/raf">Request animation frame test</router-link>
      <router-link to="/drag">Draggable</router-link>
      <router-link to="/graph">Graph</router-link>
      <router-link to="/uml">Graph2</router-link>
      <router-link to="/uml2">Graph3</router-link>
      <router-link to="/clock">Clock</router-link>
      <router-link to="/sync-v-model-example">Sync and v-model example</router-link>
    </div>
    <div class="main">
      <transition name="slide">
        <router-view :key="$route.path"/>
      </transition>
      <div class="toggle" @click="showNav = !showNav">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
      </div>
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


@media screen and (max-width: 450px) {
  .toggle {
    display: none;
  }
}

#app {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  min-height: 100vh;
  flex-direction: column;

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

  .main {
    flex-grow: 1;
    position: relative;
  }
}

@media screen and (min-width: 600px ) {
  #app {
    flex-direction: row;
    .main {
      flex-grow: 1;
      flex-shrink: 1;
      position: relative;
      overflow: hidden;

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

.main {
  backface-visibility: visible;
  perspective: 200vw;
  transform-style: preserve-3d;
  perspective-origin: 50% 50%;

  > * {
    background: rgba(60, 60, 60, 0.5);
  }
}

.slide-enter-active, .slide-leave-active {
  transition: transform .3s linear, opacity .3s;
  //transform: scaleX(1);
  transform:  translateX(0%) rotateY(0deg) translateX(0%);
  opacity: 1;
}

.slide-enter {
  //transform: scaleX(0);
  transform:  translateX(50%) rotateY(90deg) translateX(50%);
  opacity: 0;
}

.slide-leave-to  {
  //transform: scaleX(0);
  transform: translateX(-50%) rotateY(-90deg) translateX(-50%) ;
  opacity: 0;
}

.blur-enter-active, .blur-leave-active {
  transition: filter .3s linear, opacity .3s linear;
  filter: blur(0px);
  opacity: 1;
}

.blur-enter {
  filter: blur(40px);
  opacity: 0;
}

.blur-leave-to {
  filter: blur(40px);
  opacity: 0;
}
</style>
