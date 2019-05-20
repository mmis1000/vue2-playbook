<template>
  <div class="clock">
    <RAF @tick="current = $event"/>

    <div class="wrapper">
      <MyNumber :base="2" :value="digits[0]"/>
      <MyNumber :base="4" :value="digits[1]"/>
      <span class="seperator">:</span>
      <MyNumber :base="6" :value="digits[2]"/>
      <MyNumber :base="10" :value="digits[3]"/>
      <span class="seperator">:</span>
      <MyNumber :base="6" :value="digits[4]"/>
      <MyNumber :base="10" :value="digits[5]"/>
    </div>
  </div>
</template>

<script>
import RotatingNumber from "@/components/RotatingNumber"
import RequestAnimationFrame from '@/components/RAF'

export default {
  components: {
    MyNumber: RotatingNumber,
    RAF: RequestAnimationFrame
  },
  data () {
    return {
      current: Date.now()
    };
  },
  computed: {
    digits () {
      var current = this.currentDigits
      var next = this.nextDigits
      var percentage = (this.current % 1000) / 1000

      return current.map((d, i) => {
        if (d !== next[i]) {
          return d + percentage
        } else {
          return d
        }
      })
    },
    currentDigits () {
      return this.computeDigits(this.current)
    },
    nextDigits () {
      return this.computeDigits(this.current + 1000)
    }
  },
  methods: {
    computeDigits (timeMs) {
      const date = new Date(timeMs)

      var sec = date.getSeconds()
      var min = date.getMinutes()
      var hour = date.getHours()

      return [
        ~~(hour / 10), 
        hour % 10, 
        ~~(min / 10), 
        min % 10, 
        ~~(sec / 10), 
        sec % 10
      ]
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
}

/deep/ {
  font-family: 'Major Mono Display', monospace;
}

.seperator {
  font-size: 50px;
  height: 1.2em;
  width: 1.2em;
  line-height: 1.2em;
  text-align: center;
  overflow: hidden;
  display: inline-block;

  transform: translateY(-0.1em)
}

.wrapper {
  border-bottom: 1px solid #bbb;
}
</style>
