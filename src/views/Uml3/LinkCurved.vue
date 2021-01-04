<template>
  <svg
    :style="positions.style"
    v-bind="positions.svgProp"
  >
    <path
      v-bind="positions.pathProp"
      fill="none"
      style="stroke-width:2; opacity: 0.8"
      :style="{stroke: active ? 'green' : 'grey'}"
    ></path>

    <path
      v-bind="positions.anglePathProp"
      fill="none"
      style="stroke-width:2; opacity: 0.8"
      :style="{stroke: active ? 'green' : 'grey'}"
    ></path>
  </svg>
</template>
<script>
export default {
  name: 'Uml3LinkCurved',
  props: {
    link: Object
  },
  computed: {
    active () {
      return this.link.input.getValue()
    },
    positions () {
      const link = this.link
      const { x: x1, y: y1 }  = link.input.getPosition()
      const { x: x2, y: y2 }  = link.output.getPosition()

      const xd = x2 - x1
      const yd = y2 - y1

      const CURVESIZE = 20
      const PADDING = CURVESIZE * 2

      // offset from absolute coord to svg coord
      let xOriginOffset = PADDING - x1
      let yOriginOffset = PADDING - y1
      let xWidth = Math.abs(xd) + PADDING * 2
      let yWidth = Math.abs(yd) + PADDING * 2

      if (xd < 0) {
        xOriginOffset += Math.abs(xd)
      }

      if (yd < 0) {
        yOriginOffset += Math.abs(yd)
      }

      const curveSize = xd < 0
        ? Math.min(CURVESIZE, Math.abs(yd) / 4)
        : Math.min(CURVESIZE, Math.abs(xd) / 2, Math.abs(yd) / 2)

      let path = ''
      if (xd >= 0 && yd >= 0) {
        const xMiddle = (x1 + x2) / 2
        path += `M ${x1                  + xOriginOffset} ${y1             + yOriginOffset} `
        path += `L ${xMiddle - curveSize + xOriginOffset} ${y1             + yOriginOffset} `
        path += `Q ${xMiddle             + xOriginOffset} ${y1             + yOriginOffset},
                   ${xMiddle             + xOriginOffset} ${y1 + curveSize + yOriginOffset} `
        path += `L ${xMiddle             + xOriginOffset} ${y2 - curveSize + yOriginOffset} `
        path += `Q ${xMiddle             + xOriginOffset} ${y2             + yOriginOffset},
                   ${xMiddle + curveSize + xOriginOffset} ${y2             + yOriginOffset} `
        path += `L ${x2                  + xOriginOffset} ${y2             + yOriginOffset} `
      }
      if (xd >= 0 && yd < 0) {
        const xMiddle = (x1 + x2) / 2
        path += `M ${x1                  + xOriginOffset} ${y1             + yOriginOffset} `
        path += `L ${xMiddle - curveSize + xOriginOffset} ${y1             + yOriginOffset} `
        path += `Q ${xMiddle             + xOriginOffset} ${y1             + yOriginOffset},
                   ${xMiddle             + xOriginOffset} ${y1 - curveSize + yOriginOffset} `
        path += `L ${xMiddle             + xOriginOffset} ${y2 + curveSize + yOriginOffset} `
        path += `Q ${xMiddle             + xOriginOffset} ${y2             + yOriginOffset},
                   ${xMiddle + curveSize + xOriginOffset} ${y2             + yOriginOffset} `
        path += `L ${x2                  + xOriginOffset} ${y2             + yOriginOffset} `
      }
      if (xd < 0 && yd >= 0) {
        const yMiddle = (y1 + y2) / 2
        path += `M ${x1 + xOriginOffset} ${y1 + yOriginOffset} `

        // R D
        path += `Q ${x1 + curveSize + xOriginOffset} ${y1      +             yOriginOffset}
                   ${x1 + curveSize + xOriginOffset} ${y1      + curveSize + yOriginOffset} `
        // D
        path += `L ${x1 + curveSize + xOriginOffset} ${yMiddle - curveSize + yOriginOffset} `

        // D L
        path += `Q ${x1 + curveSize + xOriginOffset} ${yMiddle             + yOriginOffset} 
                   ${x1             + xOriginOffset} ${yMiddle             + yOriginOffset} `

        // L
        path += `L ${x2             + xOriginOffset} ${yMiddle             + yOriginOffset} `

        // L D
        path += `Q ${x2 - curveSize + xOriginOffset} ${yMiddle             + yOriginOffset} ,
                   ${x2 - curveSize + xOriginOffset} ${yMiddle + curveSize + yOriginOffset} `

        // D
        path += `L ${x2 - curveSize + xOriginOffset} ${y2      - curveSize + yOriginOffset} `

        // D R
        path += `Q ${x2 - curveSize + xOriginOffset} ${y2                  + yOriginOffset} ,
                   ${x2             + xOriginOffset} ${y2                  + yOriginOffset} `
      }
      if (xd < 0 && yd < 0) {
        const yMiddle = (y1 + y2) / 2
        path += `M ${x1 + xOriginOffset} ${y1 + yOriginOffset} `

        // R D
        path += `Q ${x1 + curveSize + xOriginOffset} ${y1      +             yOriginOffset}
                   ${x1 + curveSize + xOriginOffset} ${y1      - curveSize + yOriginOffset} `
        // D
        path += `L ${x1 + curveSize + xOriginOffset} ${yMiddle + curveSize + yOriginOffset} `

        // D L
        path += `Q ${x1 + curveSize + xOriginOffset} ${yMiddle             + yOriginOffset} 
                   ${x1             + xOriginOffset} ${yMiddle             + yOriginOffset} `

        // L
        path += `L ${x2             + xOriginOffset} ${yMiddle             + yOriginOffset} `

        // L D
        path += `Q ${x2 - curveSize + xOriginOffset} ${yMiddle             + yOriginOffset} ,
                   ${x2 - curveSize + xOriginOffset} ${yMiddle - curveSize + yOriginOffset} `

        // D
        path += `L ${x2 - curveSize + xOriginOffset} ${y2      + curveSize + yOriginOffset} `

        // D R
        path += `Q ${x2 - curveSize + xOriginOffset} ${y2                  + yOriginOffset} ,
                   ${x2             + xOriginOffset} ${y2                  + yOriginOffset} `
      }

      const anglePath = `M ${x2 - 12 + xOriginOffset} ${y2 - 12 + yOriginOffset} 
                         L ${x2      + xOriginOffset} ${y2      + yOriginOffset} 
                         L ${x2 - 12 + xOriginOffset} ${y2 + 12 + yOriginOffset} 
      `

      return {
        style: {
          position: 'absolute',
          'pointer-events': 'none',
          left: (Math.min(x1, x2) - PADDING) + 'px',
          top: (Math.min(y1, y2) - PADDING) + 'px'
        },
        svgProp: {
          width: xWidth,
          height: yWidth
        },
        pathProp: {
          d: path
        },
        anglePathProp: {
          d: anglePath
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
