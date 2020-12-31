<template>
  <div class="container">
    <div>
      <button @click="addItem">Add</button>
    </div>
    <Item
      v-for="[key, value] of Object.entries(items)"
      :key="key"
      :item="value"
      :options="options"
      class="item"
      @add-input="addInput($event)"
    ></Item>
    <UmlLink
      v-for="[key, value] of Object.entries(links)"
      :key="key"
      :link="value"
      class="link"
    ></UmlLink>
    <Dock
      v-for="[key, value] of Object.entries(docks)"
      :key="key"
      :dock="value"
      class="dock"
      :selected="first && first.id === key"
      @click="handleDockClick(value)"
    ></Dock>
  </div>
</template>

<script>
import Item from "./Uml2/Item";
import Dock from "./Uml2/Dock";
import Link from "./Uml2/Link";

export default {
  components: {
    Item,
    Dock,
    UmlLink: Link
  },
  data() {
    return {
      options: {
        containment: '.container'
      },
      items: {
        /*
        item_id1: {
          id: item_id1,
          x: 0,
          y: 0,
          yOffset: 50,
          inputs: [
            dock_object
          ],
          output: dock_object
        }
         */
      },
      docks: {
        /*
        dock_id1: {
          id: dock_id1,
          type: 'dock',
          end: 'input' | 'output'
          value: 0,
          x: 0,
          y: 0,
          owner: item,
          links: {
            link_id1: link
          }
        }
        */
      },
      links: {
        /*
        link_id1: {
          id: link_id1,
          input: dock
          output: dock
        }
        */
      },
      lines: [],
      first: null
    }
  },
  methods: {
    newId () {
      return Math.random().toString(16).slice(2)
    },
    newDock() {
      const id = this.newId()
      return {
        id: id,
        type: 'dock',
        end: '',
        value: 0,
        x: 0,
        y: 0,
        owner: null,
        links: {}
      }
    },
    newItem() {
      const id = this.newId()
      return {
        id,
        x: 0,
        y: 0,
        yOffset: 40,
        inputs: [],
        output: null
      }
    },
    newLink() {
      const id = this.newId()
      return {
        id,
        input: null,
        output: null
      }
    },
    addItem() {
      const item = this.newItem()
      const dock = this.newDock()
      item.output = dock
      dock.owner = item
      dock.end = 'output'
      dock.x = 206
      dock.y = 24
      this.$set(this.items, item.id, item)
      this.$set(this.docks, dock.id, dock)
      this.addInput(item)
    },
    addInput(item) {
      const dock = this.newDock()
      item.output = dock
      dock.owner = item
      dock.end = 'input'
      dock.x = 2
      dock.y = 64
      this.$set(this.docks, dock.id, dock)
      item.inputs.push(dock)
    },
    handleDockClick (dock) {
      const first = this.first

      if (first != null) {
        if (first.id === dock.id) {
          this.first = null
          return
        }

        if (first.end === dock.end) {
          this.first = dock
          return
        }

        const link = this.newLink()
        if (first.end === 'output') {
          link.input = first
          link.output = dock
        } else {
          link.output = first
          link.input = dock
        }

        this.$set(this.links, link.id, link)

        if (first.end === 'output') {
          this.$set(first.links, link.id, link)
          this.$set(dock.links, link.id, link)
        } else {
          this.$set(dock.links, link.id, link)
          this.$set(first.links, link.id, link)
        }

        this.first = null
      } else {
        this.first = dock
      }
    }
  },
  mounted () {
    this.addItem()
  }
};
</script>

<style scoped>
.container {
  background: #333;
  color: white;
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  position: relative;
  overflow: hidden;
}
.item {
  z-index: 1;
}
.item.is-pointer-down {
  z-index: 2;
}
.link {
  z-index: 3;
}
.dock {
  z-index: 4;
}
</style>
