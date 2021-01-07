<template>
  <drag
    class="item"
    :class="{ active }"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
  >
    Relay
    <SelectorValue :min="1" v-model="activateTime" text="A" />
    <SelectorValue :min="1" v-model="deactivateTime" text="D" />
  </drag>
</template>
<script>
import Vue from "vue";
import Drag from "@/components/Drag.vue";
import SelectorValue from "./SelectorValue";
import { createComputed } from "./utils.js";

export default {
  name: "Uml3ItemDelay",
  components: {
    Drag,
    SelectorValue,
  },
  inject: ["timer"],
  props: {
    item: Object,
    options: Object,
  },
  watch: {
    "timer.state"(state) {
      this.handleStateChange(state);
    },
  },
  computed: {
    active: {
      /**
       * @returns {boolean}
       */
      get() {
        return this.item._valueOut;
      },
    },
    ...createComputed("holdTime"),
    ...createComputed("prevRead"),
    ...createComputed("activateTime"),
    ...createComputed("deactivateTime"),
  },
  methods: {
    handleStateChange(state) {
      if (state === "read") {
        if (this.item.inputs[0].links.length > 0) {
          this.item._valueIn = this.item.inputs[0].links.reduce(
            (a, b) => a || b.input.getValue(),
            false
          );
        } else {
          this.item._valueIn = false;
        }
      }
      if (state === "write") {
        const newValue = this.item._valueIn;

        if (this.prevRead === newValue) {
          if (
            this.holdTime <= this.activateTime ||
            this.holdTime <= this.deactivateTime
          ) {
            this.holdTime++;
          }
        } else {
          this.prevRead = newValue;
          this.holdTime = 0;
        }

        if (newValue !== this.item._valueOut) {
          if (newValue && this.holdTime < this.activateTime - 1) {
            return;
          } else if (!newValue && this.holdTime < this.deactivateTime - 1) {
            return;
          }

          this.timer.ops++;
          this.item._valueOut = newValue;

          this.coolDown = 1;
        }
      }
    },
  },
  mounted() {
    this.handleStateChange(this.timer.state);
  },
};

const prefix = "dock-relay-";

const input = {
  $type: prefix + "input",
  getValue() {
    return this.owner._valueIn;
  },
  getPosition() {
    return {
      x: this.owner.x,
      y: this.owner.y + 40,
    };
  },
};

const output = {
  $type: prefix + "output",
  getValue() {
    return this.owner._valueOut;
  },
  getPosition() {
    return {
      x: this.owner.x + 80,
      y: this.owner.y + 40,
    };
  },
};
const createComponent = () => {
  const dockIn1 = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: "input",
    owner: null,
    links: [],
    ...input,
  });

  const dockOut = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: "output",
    owner: null,
    links: [],
    ...output,
  });

  const item = Vue.observable({
    id: Math.random().toString(16).slice(2),
    renderType: "relay-item",
    _valueIn: false,
    _valueOut: false,
    _holdTime: 0,
    _prevRead: false,
    _activateTime: 2,
    _deactivateTime: 2,
    x: 0,
    y: 0,
    inputs: [],
    outputs: [],
  });

  item.inputs.push(dockIn1);
  dockIn1.owner = item;
  item.outputs.push(dockOut);
  dockOut.owner = item;

  return {
    item,
    docks: [dockIn1, dockOut],
  };
};

export const declaration = {
  menu: [
    {
      name: "Relay",
      component: "relay-item",
      createComponent,
    },
  ],
  components: {
    "relay-item": () => import(__filename).then((it) => it.default),
  },
  types: [input, output],
};
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
  line-height: 24px;
}
.item.active {
  background: white;
  color: black;
}
</style>
