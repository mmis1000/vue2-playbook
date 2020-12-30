<template>
  <div class="clock">
    <RAF @tick="current = $event"/>

    <Clock :current="current"/>
    <Clock :current="reversed"/>
    <Clock :current="fast"/>
    <Clock :current="slow"/>
    <Clock :current="current" :animationFunction="i => Math.sin((i * 2 - 1) * Math.PI / 2) * 0.5 + 0.5"/>
  </div>
</template>

<script>
import Clock from "@/components/Clock"
import RequestAnimationFrame from '@/components/RAF'

export default {
  components: {
    Clock: Clock,
    RAF: RequestAnimationFrame
  },
  data () {
    return {
      current: Date.now(),
      initial: Date.now()
    };
  },
  computed: {
    fast () {
      return this.initial + (this.current - this.initial + Math.random() * 16) * 10
    },
    slow () {
      return this.initial + (this.current - this.initial) / 10
    },
    reversed () {
      return this.initial - (this.current - this.initial)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap');
.clock {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media screen and (max-width: 500px) {
  ::v-deep .wrapper {
    font-size: 40px;
  }
}

::v-deep * {
  font-family: 'Major Mono Display', monospace;
}
</style>
