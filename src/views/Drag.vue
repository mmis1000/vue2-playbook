<template>
  <div style="padding: 1em">
    <input type="number" v-model.number="x"><br>
    <input type="number" v-model.number="y"><br>
    <input type="number" v-model.number="vx"><br>
    <input type="number" v-model.number="vy"><br>
    <input type="number" v-model.number="a"><br>
    <input type="number" v-model.number="elasticFactor"><br>
    
    <label for="with-grid">
      <input
        id="with-grid"
        type="checkbox"
        v-model="grid"
      >
      Grid Enabled
    </label><br>
    <label for="Pause">
      <input
        id="Pause"
        type="checkbox"
        v-model="pause"
      >
      Pause
    </label><br>

    <drag
      :left.sync="x"
      :top.sync="y"
      @update:left="onXChange"
      @update:top="onYChange"
      @dragEnd="onDragEnd"
      @dragStart="onDragStart"
      :options="options"
      class="drag-item"
    >
      Drag me
    </drag>
    <RequestAnimationFrame @tick="onTick"/>
  </div>
</template>

<script>
import Drag from '@/components/Drag.vue'
import RequestAnimationFrame from '@/components/RAF'

export default {
  components: {
    Drag,
    RequestAnimationFrame
  },
  data () {
    return {
      lineX: [],
      lineY: [],
      a: -100,
      vx: 0,
      vy: 0,
      x: 0,
      y: 0,
      elasticFactor: 0.8,
      grid: false,
      pause: false
    }
  },
  computed: {
    options () {
      return this.grid ? { grid: [20, 20] } : {}
    }
  },
  methods: {
    onDragStart () {
      this.vx = 0
      this.vy = 0
    },
    onXChange (val) {
      if (this.vx != 0) return
      this.lineX.push({
        time: Date.now(),
        value: val
      })
    },
    onYChange (val) {
      if (this.vy != 0) return
      this.lineY.push({
        time: Date.now(),
        value: val
      })
    },
    onDragEnd() {
      if (this.grid) return

      var lastPosX = this.lineX.filter(i => i.time > Date.now() - 200)[0]
      var lastPosY = this.lineY.filter(i => i.time > Date.now() - 200)[0]

      this.lineX = []
      this.lineY = []

      if (!lastPosX || !lastPosY) return

      var timeX = Date.now() - lastPosX.time
      var timeY = Date.now() - lastPosY.time

      this.vx = (this.x - lastPosX.value) / (timeX / 1000)
      this.vy = (this.y - lastPosY.value) / (timeY / 1000)
    },
    // eslint-disable-next-line no-unused-vars
    onTick (now, prev, diff) {
      if (this.pause) return
      if (this.vx === 0 && this.vy === 0) return

      var oldVx = this.vx
      var oldVy = this.vy
      var oldSpeed = (oldVx ** 2 + oldVy ** 2) ** 0.5

      this.x = this.x + oldVx * diff / 1000
      this.y = this.y + oldVy * diff / 1000

      this.vx = oldVx * (Math.max(0, oldSpeed + this.a * diff / 1000) / oldSpeed)
      this.vy = oldVy * (Math.max(0, oldSpeed + this.a * diff / 1000) / oldSpeed)

      if (this.x > 200) {
        this.x = 400 - this.x
        this.vx = -this.vx * this.elasticFactor
        if (this.elasticFactor === 0) this.x = 200
      }

      if (this.x < -200) {
        this.x = -400 - this.x
        this.vx = -this.vx * this.elasticFactor
        if (this.elasticFactor === 0) this.x = -200
      }

      if (this.y > 400) {
        this.y = 800 - this.y
        this.vy = -this.vy * this.elasticFactor
        if (this.elasticFactor === 0) this.y = 400
      }
      if (this.y < 0) {
        this.y = -this.y
        this.vy = -this.vy * this.elasticFactor
        if (this.elasticFactor === 0) this.y = 0
      }
    }
  }
}
</script>

<style scoped>
.drag-item {
  display: inline-block;
  width: 100px;
  height: 40px;
  border: 2px solid #ccc;
  line-height: 40px;
  text-align: center;
}
</style>
