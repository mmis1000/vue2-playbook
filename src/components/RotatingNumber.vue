<template>
  <div class="digit">
    <div class="wrapper" :style="`transform: translateY(-${50 * percentage}%)`">
      <div class="current">
        {{currentChar}}
      </div>
      <div class="next">
        {{nextChar}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    base: {
      type: Number,
      default: 10
    }
  },
  computed: {
    /**
     * @returns {number}
     */
    current () {
      return Math.floor(this.value)
    },
    /**
     * @returns {number}
     */
    next () {
      return Math.floor(this.value) + 1
    },
    /**
     * @returns {number}
     */
    currentChar () {
      return ((this.current % this.base) + this.base) % this.base
    },
    /**
     * @returns {number}
     */
    nextChar () {
      return ((this.next % this.base) + this.base) % this.base
    },
    /**
     * @returns {number}
     */
    percentage () {
      return this.value - this.current
    },
  }
}
</script>

<style lang="scss" scoped>
.digit {
  font-size: 60px;

  height: 1em;
  width: 1em;
  overflow: hidden;
  display: inline-block;

  .current, .next {
    height: 1.2m;
    width: 1.2em;
    line-height: 1.2em;
    text-align: center;
    font-size: 0.8333em;
  }
}
</style>
