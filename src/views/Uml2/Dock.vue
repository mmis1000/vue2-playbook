<template>
  <div
    class="dock"
    :class="{ selected }"
    :style="style"
    v-on="$listeners"
  >
  </div>
</template>
<script>
export default {
  name: 'Uml2Dock',
  props: {
    dock: Object,
    selected: Boolean
  },
  computed: {
    style () {
      const item = this.dock.owner
      let yOffset = 0

      if (item.inputs.includes(this.dock)) {
        yOffset = item.inputs.indexOf(this.dock) * item.yOffset
      }

      const selfSize = 20

      const left = (this.dock.x + this.dock.owner.x - selfSize / 2) + 'px'
      const top = (this.dock.y + this.dock.owner.y + yOffset - selfSize / 2) + 'px'

      return {
        'transform': `translate(${left}, ${top})`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.dock {
  position: absolute;
  box-sizing: border-box;
  background: lime;
  width: 20px;
  height: 20px;
  border: 2px green solid;
  border-radius: 10px;
}
.dock.selected {
  background: pink;
  border: 2px red solid;
}
</style>
