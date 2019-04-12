<template>
  <link>
</template>

<script>
export default {
  props: {
    interval: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      id: null
    }
  },
  watch: {
    interval (val, old) {
      if (val !== old) {
        clearInterval(this.id)
        this.id = setInterval(() => this.tick(), this.interval)
      }
    }
  },
  methods: {
    tick () {
      this.$emit('tick')
    }
  },
  mounted () {
    this.id = setInterval(() => this.tick(), this.interval)
  },
  beforeDestroy () {
    clearInterval(this.id)
  }
}
</script>

<style>

</style>
