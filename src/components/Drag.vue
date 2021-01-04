<template>
  <component :is="tag" ref="container">
    <slot></slot>
  </component>
</template>

<script>
import Draggabilly from 'draggabilly'

export default {
  props: {
    left: {},
    top: {},
    tag: {
      type: String,
      default: 'div'
    },
    options: {
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      currentLeft: this.left,
      currentTop: this.top,
      dragging: false,
      pendingWrite: null
    }
  },
  watch: {
    left (newX) {
      if (!this.dragging) {
        const {y} = this.drag.position
        this.drag.setPosition(newX, y)
      } else {
        const {x, y} = this.pendingWrite || this.drag.position
        this.pendingWrite = {x, y, ...{x: newX}}
      }
    },
    top (newY) {
      if (!this.dragging) {
        const {x} = this.drag.position
        this.drag.setPosition(x, newY)
      } else {
        const {x, y} = this.pendingWrite || this.drag.position
        this.pendingWrite = {x, y, ...{y: newY}}
      }
    },
    options: {
      handler (newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify((oldVal))) {
          var {x, y} = this.drag.position
          this.drag.destroy()
          this.drag = new Draggabilly(this.$refs.container, this.options)
          this.init(this.drag, x, y)
        }
      },
      deep: true
    }
  },
  methods: {
    init(dragInst, left, top) {
      dragInst.setPosition(left, top)
      dragInst.on('dragStart', () => {
        this.$emit('dragStart')
      })
      dragInst.on('dragMove', () => {
        this.dragging = true
        this.$emit('update:left', this.drag.position.x)
        this.$emit('update:top', this.drag.position.y)
      })
      dragInst.on('dragEnd', () => {
        this.$emit('dragEnd')
        this.dragging = false
        if (this.pendingWrite) {
          this.drag.setPosition(this.pendingWrite.x, this.pendingWrite.y)
          this.pendingWrite = null
        }
      })
      dragInst.on('staticClick', (...args) => {
        this.$emit('staticClick', ...args)
      })
    }
  },
  mounted () {
    this.drag = new Draggabilly(this.$refs.container, this.options)
    this.init(this.drag, this.left, this.top)
  },
  beforeDestroy () {
    this.drag.destroy()
  }
}
</script>