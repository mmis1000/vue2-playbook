<template>
  <div style="padding: 1em">
    <input type="number" v-model.number="x">
    <input type="number" v-model.number="y">
    <input
      id="with-grid"
      type="checkbox"
      v-model="grid"
    ><label for="with-grid">Grid Enabled</label>
    <drag :left.sync="x" :top.sync="y" :options="options" class="drag-item">Drag me</drag>
  </div>
</template>

<script>
import Drag from '@/components/Drag.vue'

export default {
  components: {
    Drag
  },
  data () {
    return {
      x: 0,
      y: 0,
      grid: false
    }
  },
  computed: {
    options () {
      return this.grid ? { grid: [20, 20] } : {}
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
