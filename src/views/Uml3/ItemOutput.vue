<template>
  <drag
    class="item"
    :class="{ active }"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
    @staticClick="active = !active"
  >
    Output <br />
    ({{ active ? "on" : "off" }})
  </drag>
</template>
<script>
import Vue from "vue";
import Drag from "@/components/Drag.vue";
export default {
  name: "Uml3ItemOutput",
  components: {
    Drag,
  },
  props: {
    item: Object,
    options: Object,
  },
  computed: {
    active: {
      /**
       * @returns {boolean}
       */
      get() {
        return this.item._value;
      },
      /**
       * @param {boolean} val
       * @returns {void}
       */
      set(val) {
        this.item._value = val;
      },
    },
  },
};

const prefix = "dock-output-";

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
    id: Math.random().toString(16).slice(2),
    type: "output",
    owner: null,
    links: [],
    ...output,
  });

  const item = Vue.observable({
    id: Math.random().toString(16).slice(2),
    renderType: "output-item",
    _value: false,
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
      name: "Static output",
      component: "output-item",
      createComponent,
    },
  ],
  components: {
    "output-item": () => import(__filename).then((it) => it.default),
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

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 24px;

  cursor: pointer;
}
.item.active {
  background: white;
  color: black;
}
</style>
