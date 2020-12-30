<template>
  <div class="wrapper">
    <MyNumber :base="3" :value="digits[0]"/>
    <MyNumber :base="currentDigits[0] >= 2 ? 4 : 10" :value="digits[1]"/>
    <span class="seperator">:</span>
    <MyNumber :base="6" :value="digits[2]"/>
    <MyNumber :base="10" :value="digits[3]"/>
    <span class="seperator">:</span>
    <MyNumber :base="6" :value="digits[4]"/>
    <MyNumber :base="10" :value="digits[5]"/>
  </div>
</template>

<script>
import RotatingNumber from "@/components/RotatingNumber"

export default {
  components: {
    MyNumber: RotatingNumber
  },
  props: {
    current: {
      type: Number,
      default: 0
    },
    animationFunction: {
      type: Function,
      default: i => i
    }
  },
  computed: {
    digits () {
      var current = this.currentDigits
      var next = this.nextDigits
      var percentage = (this.current % 1000) / 1000
      // percentage = Math.pow(Math.sin(percentage * Math.PI * 0.5), 3)
      percentage = this.animationFunction(percentage)

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
::v-deep * {
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
  font-size: 60px;
  border-bottom: 1px solid #bbb;
  line-height: 1em;
  padding-bottom: 0.1em;

  > * {
    vertical-align: middle;
  }

  .seperator {
    font-size: 0.833em;
  }

  ::v-deep .digit {
    font-size: 1em;
  }
}
</style>
