<template>
  <drag
    class="item"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
  >
    
    <div class="sub-item output">
      Output: {{ value }}
    </div>
    <div v-for="(input, index) of item.inputs" :key="input.id" class="sub-item">
      <input
        v-if="Object.keys(input.links).length === 0"
        class="input"
        type="number"
        v-model.number="input.value"
      >
      <div class="input-other" v-else>
        Input: {{ inputs[index] }}
      </div>
    </div>
    
    <button class="sub-item add" @click="$emit('add-input', item)">
      Add Input
    </button>
  </drag>
</template>
<script>
import Drag from "@/components/Drag.vue";
export default {
  name: 'Uml2Item',
  components: {
    Drag
  },
  props: {
    item: Object,
    options: Object
  },
  computed: {
    inputs () {
      const sum = (dock) => {
        if (Object.keys(dock.links).length === 0) {
          return dock.value
        } else {
          let total = 0;
          for (let link of Object.values(dock.links)) {
            const inputDock = link.input
            const parent = inputDock.owner
            for (let dock of parent.inputs) {
              total += sum(dock)
            }
          }
          return total
        }
      }

      return this.item.inputs.map(sum)
    },
    value () {
      return this.inputs.reduce(((a, b) => a + b), 0)
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  position: absolute;
  width: 200px;
  min-height: 40px;
  border: 4px solid lightblue;
  border-radius: 8px;
  background: black;
}
.sub-item {
  height: 40px;
  line-height: 40px;
}
.sub-item.output {
  user-select: none;
}
.sub-item .input-other {
  user-select: none;
}
.sub-item.add {
  display: block;
  width: inherit;
  border: 0;
}
.sub-item input {
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  text-align: center;
  border: 0;
  outline: 0 !important;
  font-size: 16px;

  &:focus {
    background: #eef;
  }
}
</style>
