<template>
  <div class="container" ref="container">
    <div v-for="item in menu" :key="item.component">
      <button class="add-button" @click="addItem(item)">{{ item.name }}</button>
    </div>
    <div>
      <label for="curve" class="option">
        <input type="checkbox" id="curve" v-model="curved">
        Use curve line
      </label>
    </div>
    <div>
      <label for="grid" class="option">
        <input type="checkbox" id="grid" v-model="grided">
        Snap to grid
      </label>
    </div>
    <component
      v-for="[key, value] of Object.entries(items)"
      :is="value.renderType"
      :key="key"
      :item="value"
      :options="options"
      class="item "
      :class="{ target: targetId === value.id }"
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
    <PanelControl
      ref="panelControl"
      class='panel'
      :options="fullPanelOptions"
      :panelConfig="fullPanelConfig"
      :selected="targetPanelSelected"
      :position="panelPosition.config"
    />
    <RunInterval :interval="childPanelOptions.global.timerInterval / 2" @tick="onTick"/>
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
import PanelControl from "./Uml3/PanelControl";
import RunInterval from '@/components/RunInterval.vue'

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
    UmlLinkCurved: LinkCurved,
    PanelControl,
    RunInterval
  },
  /**
   * @returns {{
   *   timer: {state: string}
   *   setTargetOptionsAndConfig (options: any, config: any, title?: string, id?: string): void
   * }}
   */
  provide () {
    return {
      timer: this.timer,
      setTargetOptionsAndConfig: (options, config, title = '', id = null) => {
        this.targetPanelOptions = options
        this.targetPanelConfig = config
        this.targetPanelSelected = title
        this.targetId = id
      }
    }
  },
  data() {
    return {
      panelPosition: {
        config: {
          x: 0,
          y: 0
        }
      },
      timeoutId: null,
      childPanelOptions: {
        global: {
          timerInterval: 100
        },
        ...itemSoundDef.options
      },
      childPanelConfig: [
        {
          title: 'System',
          items: [{
            name: 'Tick interval',
            type: 'number',
            min: 20,
            max: Infinity,
            path: ['global', 'timerInterval']
          }]
        },
        ...itemSoundDef.optionsPanel
      ],
      targetPanelOptions: {},
      targetPanelConfig: [],
      targetPanelSelected: '',
      targetId: null,
      timer: {
        state: 'read',
        ops: 0
      },
      curved: true,
      grided: true,
      menu: [
        ...itemOutputDef.menu,
        ...itemOutputPulseDef.menu,
        ...itemInputDef.menu,
        ...itemSoundDef.menu,
        ...itemRelayDef.menu,
        ...itemNotDef.menu,
        ...itemAndDef.menu,
        ...itemXorDef.menu,
        ...itemXnorDef.menu
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
     * @returns {any}
     */
    fullPanelOptions () {
      return {
        ...this.childPanelOptions,
        ...this.targetPanelOptions,
      }
    },
    /**
     * @returns {any}
     */
    fullPanelConfig () {
      return [
        ...this.targetPanelConfig,
        ...this.childPanelConfig.map(i => ({
          ...i,
          title: i.title + ' (Global)'
        }))
      ]
    },
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

      /**
       * @type {HTMLDivElement}
       */
      const div = this.$refs.container
      item.x = div.offsetWidth / 2 - 40
      item.y = div.offsetHeight / 2 - 40

      if (this.grided) {
        item.x = item.x - (item.x % 20)
        item.y = item.y - (item.y % 20)
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
    },
    onTick () {
      if (this.timer.state === 'read') {
        this.timer.state = 'write'
      } else {
        this.timer.state = 'read'
      }
    }
  },
  mounted () {
    const containerWidth = this.$refs.container.offsetWidth
    const containerHeight = this.$refs.container.offsetHeight
    const panelWidth = this.$refs.panelControl.$el.offsetWidth
    const panelHeight= this.$refs.panelControl.$el.offsetHeight
    this.panelPosition.config = {
      x: (containerWidth - panelWidth) / 2,
      y: containerHeight - panelHeight - 40
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #333;
  color: white;
  height: 100vh;
  flex-direction: row;
  display: flex;
  position: relative;
  overflow: hidden;


  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
  justify-items: flex-start;
  flex-wrap: wrap;

  .add-button {
    box-sizing: border-box;
    height: 40px;
    margin-right: 4px;
    margin-top: 4px;
    min-width: 84px;
    padding: 4px;
    border: 0;
    background: #555;
    color: white;
  }

  .option {
    display: inline-block;
    box-sizing: border-box;
    height: 40px;
    line-height: 32px;
    background: #555;
    margin-right: 4px;
    margin-top: 4px;
    min-width: 84px;
    padding: 4px;
  }
}
.item {
  z-index: 1;

  &.target {
    border-color: blue;
  }
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
.panel {
  z-index: 5;
}
</style>
