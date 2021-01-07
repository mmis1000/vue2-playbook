<template>
  <drag
    class="item"
    :class="{ active }"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
  >
    Exit
  </drag>
</template>
<script>
import Vue from "vue";
import Drag from "@/components/Drag.vue";
export default {
  name: "Uml3ItemInput",
  components: {
    Drag,
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
      let sum = false;

      for (let input of this.item.inputs) {
        sum = sum || input.getValue();
      }

      return sum;
    },
  },
};

const prefix = "dock-input-";

const input = {
  $type: prefix + "input",
  getValue() {
    return this.links
      .map(link => {
        return link.input.getValue();
      })
      .reduce((x, y) => x || y, false);
  },
  getPosition() {
    return {
      x: this.owner.x,
      y: this.owner.y + 40,
    };
  },
};
const createComponent = () => {
  const dock = Vue.observable({
    id: Math.random()
      .toString(16)
      .slice(2),
    type: "input",
    owner: null,
    links: [],
    ...input,
  });

  const item = Vue.observable({
    id: Math.random()
      .toString(16)
      .slice(2),
    renderType: "input-item",
    x: 0,
    y: 0,
    inputs: [],
    outputs: [],
  });

  item.inputs.push(dock);
  dock.owner = item;

  return {
    item,
    docks: [dock],
  };
};

export const declaration = {
  menu: [
    {
      name: "Exit",
      component: "input-item",
      createComponent,
    },
  ],
  components: {
    "input-item": () => import(__filename).then(it => it.default),
  },
  types: [input],
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
