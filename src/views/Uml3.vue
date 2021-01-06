<template>
  <div class="container">
    <div v-for="item in menu" :key="item.component">
      <button @click="addItem(item)">{{ item.name }}</button>
    </div>
    <div>
      <label for="curve">
        <input type="checkbox" id="curve" v-model="curved">
        Use curve line
      </label>
    </div>
    <div>
      <label for="grid">
        <input type="checkbox" id="grid" v-model="grided">
        Align to grid
      </label>
    </div>
    <component
      v-for="[key, value] of Object.entries(items)"
      :is="value.renderType"
      :key="key"
      :item="value"
      :options="options"
      class="item"
    ></component>
    <template v-if="!curved">
      <UmlLink
        v-for="[key, value] of Object.entries(links)"
        :key="key"
        :link="value"
        class="link"
      ></UmlLink>
    </template>
    <template v-else>
      <UmlLinkCurved
        v-for="[key, value] of Object.entries(links)"
        :key="key + '-c'"
        :link="value"
        class="link"
      ></UmlLinkCurved>
    </template>
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
import { declaration as itemInputDef } from "./Uml3/ItemInput";
import { declaration as itemOutputDef } from "./Uml3/ItemOutput";
import { declaration as itemOutputPulseDef } from "./Uml3/ItemOutputPulse";
import { declaration as itemXorDef } from "./Uml3/ItemXor";
import { declaration as itemXnorDef } from "./Uml3/ItemXnor";
import { declaration as itemNotDef } from "./Uml3/ItemNot";
import { declaration as itemRelayDef } from "./Uml3/ItemRelay";
import { declaration as itemAndDef } from "./Uml3/ItemAnd";
import { declaration as itemSoundDef } from "./Uml3/ItemSound";
import Dock from "./Uml3/Dock";
import Link from "./Uml3/Link";
import LinkCurved from "./Uml3/LinkCurved";

/**
 * @typedef {Object} Timer
 * @property {'read'|'write'} state
 * @property {number} ops
 */

export default {
  components: {
    ...itemXorDef.components,
    ...itemInputDef.components,
    ...itemOutputDef.components,
    ...itemXnorDef.components,
    ...itemOutputPulseDef.components,
    ...itemNotDef.components,
    ...itemRelayDef.components,
    ...itemAndDef.components,
    ...itemSoundDef.components,
    Dock,
    UmlLink: Link,
    UmlLinkCurved: LinkCurved
  },
  /**
   * @returns {{ timer: {state: string}}}
   */
  provide () {
    return {
      timer: this.timer
    }
  },
  data() {
    return {
      timeoutId: null,
      timer: {
        state: 'read',
        ops: 0
      },
      curved: true,
      grided: true,
      menu: [
        ...itemInputDef.menu,
        ...itemOutputDef.menu,
        ...itemOutputPulseDef.menu,
        ...itemXorDef.menu,
        ...itemXnorDef.menu,
        ...itemNotDef.menu,
        ...itemRelayDef.menu,
        ...itemAndDef.menu,
        ...itemSoundDef.menu
      ],
      /** @type {Record<string,any>} */
      items: {
        /*
        {
          id: item_id1,
          renderType: 'comp',
          x: 0,
          y: 0,
          inputs: dock[]
          outputs: dock[]
        }
         */
      },
      /** @type {Record<string,any>} */
      docks: {
        /*
        dock_id1: {
          id: dock_id1,
          type: 'input' | 'output',
          getPosition(): {x,y} // item of self,
          getValue(): boolean,
          owner: item,
          links: {
            link_id1: link
          }
        }
        */
      },
      /** @type {Record<string,any>} */
      links: {
        /*
        link_id1: {
          id: link_id1,
          input: dock
          output: dock
        }
        */
      },
      /** @type {any} */
      first: null
    }
  },
  computed: {
    /**
     * @return {Record<string,any>}
     */
    options () {
      if (this.grided) {
        return {
          gridPassive: [20, 20],
          containment: '.container'
        }
      } else {
        return {
          containment: '.container'
        }
      }
    }
  },
  methods: {
    newId () {
      return Math.random().toString(16).slice(2)
    },
    newLink() {
      const id = this.newId()
      return {
        id,
        input: null,
        output: null
      }
    },
    addItem(def) {
      const { docks, item } = def.createComponent()
      this.$set(this.items, item.id, item)
      for (const dock of docks) {
        this.$set(this.docks, dock.id, dock)
      }
    },
    handleDockClick (dock) {
      const first = this.first

      if (first != null) {
        if (first.id === dock.id) {
          this.first = null
          return
        }

        if (first.type === dock.type) {
          this.first = dock
          return
        }

        if (first.links.find(it => {
          if (first.type === 'output') {
            return it.output.id === dock.id
          } else {
            return it.input.id === dock.id
          }
        })) {
          this.first = dock
          return
        }

        const link = this.newLink()

        if (first.type === 'output') {
          link.input = first
          link.output = dock
        } else {
          link.output = first
          link.input = dock
        }

        this.$set(this.links, link.id, link)

        if (first.type === 'output') {
          first.links.push(link)
          dock.links.push(link)
        } else {
          dock.links.push(link)
          first.links.push(link)
        }

        this.first = null
      } else {
        this.first = dock
      }
    }
  },
  mounted () {
    this.timeoutId = setInterval(() => {
      if (this.timer.state === 'read') {
        this.timer.state = 'write'
      } else {
        this.timer.state = 'read'
      }
    }, 50)
  },
  beforeDestroy () {
    clearInterval(this.timeoutId)
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
