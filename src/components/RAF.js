export default {
  name: "RequestAnimationFrame",
  data() {
    return {
      _id: null,
      current: Date.now()
    }
  },
  methods: {
    tick() {
      this.current = Date.now()
      this.$emit('tick', this.current)
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
