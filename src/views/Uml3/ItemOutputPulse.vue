<template>
  <drag
    class="item "
    :class="{ active }"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
    @staticClick="click"
  >
    Pulse
    <SelectorValue class="child-selector" :min="1" v-model="persistTime" text="L"/>
  </drag>
</template>
<script>
import Vue from "vue";
import Drag from "@/components/Drag.vue";
import SelectorValue from "./SelectorValue";
export default {
  name: 'Uml3ItemOutputPulse',
  components: {
    Drag,
    SelectorValue
  },
  data () {
    return {
      persistTime: 4,
      buffer: false,
      hold: 0
    }
  },
  inject: ['timer'],
  watch: {
    'timer.state' (state) {
      if (state === 'read') {
        if (this.buffer) {
          this.buffer = false
          this.hold = this.persistTime
          this.item._value = true
        } else if (this.hold > 0) {
          this.hold--
          if (this.hold === 0) {
            this.item._value = false
          }
        }
      }
    }
  },
  props: {
    item: Object,
    options: Object
  },
  computed: {
    active () {
      return this.item._value || this.buffer
    }
  },
  methods: {
    click (ev) {
      console.log(ev)
      if (ev.target.matches('.child-selector, .child-selector *')) {
        return
      }
      this.hold = 5;
      this.buffer = true
    }
  }
}

const createComponent = () => {
  const dock = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: 'output',
    getValue() {
      return this.owner._value
    },
    getPosition () {
      return {
        x: this.owner.x + 80,
        y: this.owner.y + 40
      }
    },
    owner: null,
    links: []
  })

  const item = Vue.observable({
    id: Math.random().toString(16).slice(2),
    renderType: 'output-pulse-item',
    _value: false,
    x: 0,
    y: 0,
    inputs: [],
    outputs: []
  })

  item.outputs.push(dock)
  dock.owner = item

  return {
    item,
    docks: [dock]
  }
}

export const declaration = {
  menu: [
    {
      name: 'Pulse output',
      component: 'output-pulse-item',
      createComponent
    }
  ],
  components: {
    'output-pulse-item': () => import(__filename).then(it => it.default)
  }
}
</script>
<style lang="scss" scoped>
.item {
  position: absolute;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border: 4px solid lightblue;
  border-radius: 8px;
  background: black;
}
.item.active {
  background: white;
  color: black;
}
</style>
