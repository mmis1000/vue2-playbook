<template>
  <div class="page">
    <div class="top">
      combine draggable component and recusive component, these magic can be easilly achieved
    </div>
    <div class="container">
      <div class="center">
        <tree-root :data="items" v-slot="{depth, data: items, template}">
          <div
            v-for="(sub, index) in items"
            @click.stop
            @pointerdown.stop
            :key="index"
            class="offseted"
          >
            <drag
              style="left: 0; top: 0; position: absolute"
              :style="{ background: sub.background }"
              class="main-item"
              :left.sync="sub.x"
              :top.sync="sub.y"
              :options="{ grid: [20, 20], containment: '.container' }"
            >
              <svg
                style="position: absolute; pointer-events: none"
                :style="{
                      left: sub.x > 0 ? `-${sub.x}px`: '0',
                      top: sub.y > 0 ? `-${sub.y}px`: '0'
                    }"
                :height="Math.max(Math.abs(sub.y), 4)"
                :width="Math.max(Math.abs(sub.x), 4)"
              >
                <line
                  :x1="sub.x * sub.y > 0 ? 0: Math.abs(sub.x)"
                  y1="0"
                  :x2="sub.x * sub.y <= 0 ? 0: Math.abs(sub.x)"
                  :y2="Math.abs(sub.y)"
                  style="stroke-width:2"
                  :style="{stroke: sub.background}"
                ></line>
              </svg>
              <div class="header">Item Depth {{depth}}</div>
              <input type="number" v-model="sub.x">
              <input type="number" v-model="sub.y">
              <button @pointerdown="addChild(sub)">Add child</button>
              <button v-if="depth > 0" @pointerdown="removeMe(items, sub)">Remove Me</button>
              <sub-tree v-bind="{depth: depth + 1, data: sub.children, template}"></sub-tree>
            </drag>
          </div>
        </tree-root>
      </div>
    </div>
  </div>
</template>

<script>
import Drag from "@/components/Drag.vue";
import { SubTree, TreeRoot } from "@/components/recursive";
export default {
  components: {
    Drag,
    SubTree,
    TreeRoot
  },
  data() {
    return {
      items: [{ x: 0, y: 0, children: [], background: "#fff" }]
    };
  },
  methods: {
    removeMe(items, sub) {
      var index = items.indexOf(sub)
      if (index >= 0) {
        items.splice(index, 1)
      }
    },
    addChild(item, x, y) {
      item.children.push({
        x: x != null ? x : (item.children.length + 1) * 20,
        y: y != null ? y : (item.children.length + 1) * 20,
        background: `rgba(${192 + ~~(64 * Math.random())}, ${192 +
          ~~(64 * Math.random())}, ${192 + ~~(64 * Math.random())}, 0.5)`,
        children: []
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  background: #333;
  color: white;
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}
.container {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  justify-content: center;
}
.center {
  position: relative;
}
.offseted {
  position: absolute;
  left: -2px;
  top: -2px;
}
.main-item {
  > * {
    box-sizing: border-box;
  }

  height: 96px;
  width: 156px;
  border: 2px solid #ccc;
  .header {
    height: 20px;
    color: rgb(66, 66, 66);
  }

  > input {
    width: 156px;
    height: 25px;
  }

  > button {
    display: inline-block;
    width: 78px;
    height: 25px;
    line-height: 21px;
    font-size: 0.6em;
    padding: 0px;
    overflow: hidden;
    border: 2px solid #eee;
    white-space: nowrap;
  }
}
</style>
