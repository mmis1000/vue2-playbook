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
  name: 'Uml3Dock',
  props: {
    dock: Object,
    selected: Boolean
  },
  computed: {
    /**
     * @returns {Record<string,string>}
     */
    style () {
      const positions = this.dock.getPosition()

      const left = positions.x - 10 + 'px'
      const top =  positions.y - 10 + 'px'

      return {
        'transform': `translate(${left}, ${top})`
      }
    }
  }
}

export const registers = {
  components: {
    'default-dock': () => import(__filename).then(it => it.default)
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
