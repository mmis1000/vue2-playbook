<template>
  <drag
    class="item "
    :class="{ active }"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
  >
  Relay
  <SelectorValue :min="1" v-model="activateTime" text="A"/>
  <SelectorValue :min="1" v-model="deactivateTime" text="D"/>
  </drag>
</template>
<script>
import Vue from "vue";
import Drag from "@/components/Drag.vue";
import SelectorValue from "./SelectorValue";
export default {
  name: 'Uml3ItemDelay',
  components: {
    Drag,
    SelectorValue
  },
  inject: ['timer'],
  props: {
    item: Object,
    options: Object
  },
  data () {
    return {
      holdTime: 0,
      prevRead: true,
      activateTime: 2,
      deactivateTime: 2
    }
  },
  watch: {
    'timer.state' (state) {
      this.handleStateChange(state)
    }
  },
  computed: {
    active: {
      /**
       * @returns {boolean}
       */
      get () {
        return this.item._valueOut
      }
    }
  },
  methods: {
    handleStateChange (state) {
      if (state === 'read') {
        if (this.item.inputs[0].links.length > 0) {
          this.item._valueIn1 = this.item.inputs[0].links.reduce((a, b) => a || b.input.getValue(), false)
        }
      }
      if (state === 'write') {
        const newValue = this.item._valueIn1

        if (this.prevRead === newValue) {
          this.holdTime++
        } else {
          this.prevRead = newValue
          this.holdTime = 0
        }

        if (newValue !== this.item._valueOut) {
          if (newValue && this.holdTime < this.activateTime - 1) {
            return
          } else if (!newValue && this.holdTime < this.deactivateTime - 1) {
            return
          }

          this.timer.ops++
          this.item._valueOut = newValue

          this.coolDown = 1
        }
      }
    }
  },
  mounted () {
    this.handleStateChange(this.timer.state)
  }
}

const createComponent = () => {
  const dockIn1 = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: 'input',
    getValue() {
      return this.owner._valueIn1
    },
    getPosition () {
      return {
        x: this.owner.x,
        y: this.owner.y + 40
      }
    },
    owner: null,
    links: []
  })
  const dockOut = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: 'output',
    getValue() {
      return this.owner._valueOut
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
    renderType: 'relay-item',
    _valueIn1: false,
    _valueOut: false,
    x: 0,
    y: 0,
    inputs: [],
    outputs: []
  })

  item.inputs.push(dockIn1)
  dockIn1.owner = item
  item.outputs.push(dockOut)
  dockOut.owner = item

  return {
    item,
    docks: [dockIn1, dockOut]
  }
}

export const declaration = {
  menu: [
    {
      name: 'Relay',
      component: 'relay-item',
      createComponent
    }
  ],
  components: {
    'relay-item': () => import(__filename).then(it => it.default)
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
