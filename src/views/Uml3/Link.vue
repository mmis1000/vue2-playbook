<template>
  <svg :style="positions.style" v-bind="positions.svgProp">
    <line
      v-bind="positions.lineProp"
      style="stroke-width: 2"
      :style="{ stroke: active ? 'green' : 'grey' }"
    ></line>
  </svg>
</template>
<script>
export default {
  name: "Uml3Link",
  props: {
    link: Object,
  },
  computed: {
    /**
     * @returns {boolean}
     */
    active() {
      return this.link.input.getValue();
    },
    /**
     * @returns {Record<string,Record<string,any>>}
     */
    positions() {
      const link = this.link;
      const { x: x1, y: y1 } = link.input.getPosition();
      const { x: x2, y: y2 } = link.output.getPosition();

      return {
        style: {
          position: "absolute",
          "pointer-events": "none",
          left: Math.min(x1, x2) - 2 + "px",
          top: Math.min(y1, y2) - 2 + "px",
        },
        svgProp: {
          width: Math.max(Math.abs(x1 - x2) + 4, 4),
          height: Math.max(Math.abs(y1 - y2) + 4, 4),
        },
        lineProp: {
          x1: (x1 - x2) * (y1 - y2) > 0 ? 2 : Math.abs(x1 - x2) + 2,
          y1: 2,
          x2: (x1 - x2) * (y1 - y2) <= 0 ? 2 : Math.abs(x1 - x2) + 2,
          y2: Math.abs(y1 - y2) + 2,
        },
      };
    },
  },
};
</script>
<style lang="stylus" scoped></style>
