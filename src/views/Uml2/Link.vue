<template>
  <svg
    :style="positions.style"
    v-bind="positions.svgProp"
  >
    <line
      v-bind="positions.lineProp"
      style="stroke-width:2"
      :style="{stroke: 'red'}"
    ></line>
  </svg>
</template>
<script>
export default {
  name: 'Uml2Link',
  props: {
    link: Object
  },
  computed: {
    positions () {
      const link = this.link
      const x1 = link.input.x + link.input.owner.x
      const y1 = link.input.y + link.input.owner.y


      const item = link.output.owner
      let yOffset  = item.inputs.indexOf(link.output) * item.yOffset

      const x2 = link.output.x + link.output.owner.x
      const y2 = link.output.y + link.output.owner.y + yOffset

      return {
        style: {
          position: 'absolute',
          'pointer-events': 'none',
          left: (Math.min(x1, x2) - 2) + 'px',
          top: (Math.min(y1, y2) - 2) + 'px'
        },
        svgProp: {
          width: Math.max(Math.abs(x1 - x2) + 4, 4),
          height: Math.max(Math.abs(y1 - y2) + 4, 4)
        },
        lineProp: {
          x1: (x1 - x2) * (y1 - y2) > 0 ? 2: Math.abs(x1 - x2) + 2,
          y1: 2,
          x2: (x1 - x2) * (y1 - y2) <= 0 ? 2: Math.abs(x1 - x2) + 2,
          y2: Math.abs(y1 - y2) + 2
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
