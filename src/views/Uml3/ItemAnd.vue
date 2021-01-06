<template>
  <drag
    class="item"
    :class="{ active }"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
  >
    And
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
  name: "Uml3ItemAnd",
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
          this.item._valueIn1 = this.item.inputs[0].links.reduce(
            (a, b) => a || b.input.getValue(),
            false
          );
        }

        if (this.item.inputs[1].links.length > 0) {
          this.item._valueIn2 = this.item.inputs[1].links.reduce(
            (a, b) => a || b.input.getValue(),
            false
          );
        }
      }
      if (state === "write") {
        const newValue = this.item._valueIn1 && this.item._valueIn2;

        if (this.prevRead === newValue) {
          if (
            this.holdTime <= this.activateTime ||
            this.holdTime <= this.activateTime
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

const createComponent = () => {
  const dockIn1 = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: "input",
    getValue() {
      return this.owner._valueIn1;
    },
    getPosition() {
      return {
        x: this.owner.x,
        y: this.owner.y + 20,
      };
    },
    owner: null,
    links: [],
  });
  const dockIn2 = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: "input",
    getValue() {
      return this.owner._valueIn2;
    },
    getPosition() {
      return {
        x: this.owner.x,
        y: this.owner.y + 60,
      };
    },
    owner: null,
    links: [],
  });
  const dockOut = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: "output",
    getValue() {
      return this.owner._valueOut;
    },
    getPosition() {
      return {
        x: this.owner.x + 80,
        y: this.owner.y + 40,
      };
    },
    owner: null,
    links: [],
  });

  const item = Vue.observable({
    id: Math.random().toString(16).slice(2),
    renderType: "and-item",
    _valueIn1: false,
    _valueIn2: false,
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
  item.inputs.push(dockIn2);
  dockIn2.owner = item;
  item.outputs.push(dockOut);
  dockOut.owner = item;

  return {
    item,
    docks: [dockIn1, dockIn2, dockOut],
  };
};

export const declaration = {
  menu: [
    {
      name: "And",
      component: "and-item",
      createComponent,
    },
  ],
  components: {
    "and-item": () => import(__filename).then((it) => it.default),
  },
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
}
.item.active {
  background: white;
  color: black;
}
</style>
