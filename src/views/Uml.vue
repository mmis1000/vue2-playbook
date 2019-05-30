<template>
  <div class="container">
    <div>
      <button @click="addItem">Add</button>
    </div>
    
    <drag
      v-for="item in items"
      :key="item.id"
      :left.sync="item.x"
      :top.sync="item.y"
      :options="{ grid: [20, 20], containment: '.container' }"

      style="left: 0; top: 0; position: absolute; padding: 2em;"
      :style="{ background: item.background }"
    >
      <button v-if="first == null" @click="clickFirst(item)">Link</button>
      <button v-else @click="clickSecond(item)">To</button>
    </drag>
    
    <svg
      v-for="line in mappedLines"
      :key="line.id"
      style="position: absolute; pointer-events: none"
      :style="{
        left: `${Math.min(line.first.x, line.second.x) - 2}px`,
        top: `${Math.min(line.first.y, line.second.y) - 2}px`
      }"
      :width="Math.max(Math.abs(line.first.x - line.second.x) + 4, 4)"
      :height="Math.max(Math.abs(line.first.y - line.second.y) + 4, 4)"
    >
      <line
        :x1="(line.first.x - line.second.x) * (line.first.y - line.second.y) > 0 ? 2: Math.abs(line.first.x - line.second.x) + 2"
        y1="2"
        :x2="(line.first.x - line.second.x) * (line.first.y - line.second.y) <= 0 ? 2: Math.abs(line.first.x - line.second.x) + 2"
        :y2="Math.abs(line.first.y - line.second.y) + 2"
        style="stroke-width:2"
        :style="{stroke: line.background}"
      ></line>
    </svg>
  </div>
</template>

<script>
import Drag from "@/components/Drag.vue";
export default {
  components: {
    Drag
  },
  data() {
    return {
      items: [],
      lines: [],
      first: null
    }
  },
  computed: {
    mappedLines() {
      return this.lines.map(item => {
        return {
          ...item,
          first: {...(this.items.find(i => i.id === item.first) || { x: 0, y: 0})},
          second: {...(this.items.find(i => i.id === item.second) || { x: 0, y: 0})}
        }
      })
    }
  },
  methods: {
    addItem() {
      this.items.push({
        x: 0,
        y: 0,
        background: `rgba(${192 + ~~(64 * Math.random())}, ${192 +
          ~~(64 * Math.random())}, ${192 + ~~(64 * Math.random())}, 0.5)`,
        id: Math.random()
      })
    },
    clickFirst (item) {
      this.first = item.id
    },
    clickSecond (item) {
      this.lines.push({
        first: this.first,
        second: item.id,
        background: `rgba(${192 + ~~(64 * Math.random())}, ${192 +
          ~~(64 * Math.random())}, ${192 + ~~(64 * Math.random())}, 0.5)`,
        id: Math.random()
      })

      this.first = null
    },
  }
};
</script>

<style scoped>
.container {
  background: #333;
  color: white;
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}
</style>
