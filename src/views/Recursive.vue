<template>
  <div>
    tree render
    <ul>
      <li>
        <!-- temp template function is the wrapper of scope slot itself -->
        <tree-root :data="data" v-slot="{depth, data, template}">
          <span style="cursor: pointer;" v-if="data.children" @click="toggle(data)">
            {{ depth }}
            {{ data.show ? "[-]" : "[+]" }}
            {{ data.text }}
          </span>
          <span v-else>
            {{ depth }}
            {{ data.text }}
          </span>
          <ul v-if="data.children && data.show || false">
            <li v-for="(data, index) in data.children" :key="index + '-' + data.text">
              <!-- insert sub tree here start -->
              <sub-tree v-bind="{data, template}"></sub-tree>
              <!-- insert sub tree here end -->
            </li>
          </ul>
        </tree-root>
      </li>
    </ul>fucking binary tree
    <tree-root :data="5" v-slot="{depth, data, template}">
      <div v-if="data > 0" style="padding-left: 10px">
        <sub-tree v-bind="{data: data - 1, template}"></sub-tree>
        {{ depth }}
        <sub-tree v-bind="{data: data - 1, template}"></sub-tree>
      </div>
    </tree-root>
  </div>
</template>

<script>
import { SubTree, TreeRoot } from "@/components/recursive";
export default {
  components: {
    SubTree,
    TreeRoot
  },
  data() {
    return {
      data: {
        text: "test",
        show: true,
        children: [
          {
            text: "test2",
            show: true,
            children: [
              {
                text: "test5",
                show: true,
                children: [
                  {
                    text: "test9",
                    show: true,
                    children: [
                      {
                        text: "test9"
                      }
                    ]
                  }
                ]
              },
              {
                text: "test5",
                show: true,
                children: [
                  {
                    text: "test9",
                    show: true,
                    children: [
                      {
                        text: "test9"
                      }
                    ]
                  }
                ]
              },
              {
                text: "test6"
              }
            ]
          },
          {
            text: "test3",
            show: true,
            children: [
              { text: "test4" },
              { text: "test4" },
              { text: "test4" },
              { text: "test4" },
              { text: "test4" }
            ]
          }
        ]
      }
    };
  },
  methods: {
    toggle(node) {
      node.show = !node.show;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
