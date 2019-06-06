export default {
  name: "RequestAnimationFrame",
  data() {
    return {
      _id: null,
      prev: null,
      current: Date.now(),
      diff: null
    }
  },
  methods: {
    tick() {
      this.prev = this.current
      this.current = Date.now()
      this.diff = Math.max(this.current - this.prev, 8)
      this.$emit('tick', this.current, this.prev, this.diff)
      this._id = requestAnimationFrame(this.tick)
    }
  },
  created() {
    this.tick  = this.tick.bind(this)
  },
  mounted() {
    requestAnimationFrame(this.tick)
  },
  beforeDestroy() {
    cancelAnimationFrame(this.tick)
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default({ 
        current: this.current
      })[0]
    } else {
      return this.$createElement('link')
    }
  }
}
