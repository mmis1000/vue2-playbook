<template>
  <drag
    class="item"
    :class="{ active }"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
    @staticClick="click"
  >
    Pulse
    <SelectorValue
      class="child-selector"
      :min="1"
      v-model="persistTime"
      text="L"
    />
  </drag>
</template>
<script>
import Vue from "vue";
import Drag from "@/components/Drag.vue";
import SelectorValue from "./SelectorValue";
import { createComputed } from "./utils.js";

export default {
  name: "Uml3ItemOutputPulse",
  components: {
    Drag,
    SelectorValue,
  },
  inject: ["timer"],
  watch: {
    "timer.state"(state) {
      if (state === "read") {
        if (this.buffer) {
          this.buffer = false;
          this.hold = this.persistTime;
          this.item._value = true;
        } else if (this.hold > 0) {
          this.hold--;
          if (this.hold === 0) {
            this.item._value = false;
          }
        }
      }
    },
  },
  props: {
    item: Object,
    options: Object,
  },
  computed: {
    /**
     * @returns {boolean}
     */
    active() {
      return this.item._value || this.buffer;
    },
    ...createComputed("persistTime"),
    ...createComputed("buffer"),
    ...createComputed("hold"),
  },
  methods: {
    click(ev) {
      if (
        ev.target.matches(".child-selector, .child-selector *") &&
        !ev.target.matches(".handle, .handle *")
      ) {
        return;
      }
      this.buffer = true;
    },
  },
};

const prefix = "dock-output-pulse-";

const output = {
  $type: prefix + "output",
  getValue() {
    return this.owner._value;
  },
  getPosition() {
    return {
      x: this.owner.x + 80,
      y: this.owner.y + 40,
    };
  },
};

const createComponent = () => {
  const dock = Vue.observable({
    id: Math.random()
      .toString(16)
      .slice(2),
    type: "output",
    owner: null,
    links: [],
    ...output,
  });

  const item = Vue.observable({
    id: Math.random()
      .toString(16)
      .slice(2),
    renderType: "output-pulse-item",
    _value: false,
    _persistTime: 4,
    _buffer: false,
    _hold: 0,
    x: 0,
    y: 0,
    inputs: [],
    outputs: [],
  });

  item.outputs.push(dock);
  dock.owner = item;

  return {
    item,
    docks: [dock],
  };
};

export const declaration = {
  menu: [
    {
      name: "Pulse output",
      component: "output-pulse-item",
      createComponent,
    },
  ],
  components: {
    "output-pulse-item": () => import(__filename).then(it => it.default),
  },
  types: [output],
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
