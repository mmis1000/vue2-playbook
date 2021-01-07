<template>
  <div class="container" ref="container">
    <div v-for="item in menu" :key="item.component">
      <button class="add-button" @click="addItem(item)">{{ item.name }}</button>
    </div>
    <div>
      <button class="add-button" @click="exportData">Export</button>
    </div>
    <component
      v-for="[key, value] of Object.entries(items)"
      :is="
        options.editorState.mode === 'delete' ? 'item-delete' : value.renderType
      "
      :key="key"
      :item="value"
      :options="draggableOptions"
      class="item"
      :class="{ target: targetId === value.id }"
      @delete="handleDelete"
    ></component>
    <template v-if="!curved">
      <UmlLink
        v-for="[key, value] of Object.entries(links)"
        :key="key"
        :link="value"
        class="link"
        :delete-mode="options.editorState.mode === 'delete'"
        @delete="handleDeleteLink"
      ></UmlLink>
    </template>
    <template v-else>
      <UmlLinkCurved
        v-for="[key, value] of Object.entries(links)"
        :key="key + '-c'"
        :link="value"
        class="link"
        :delete-mode="options.editorState.mode === 'delete'"
        @delete="handleDeleteLink"
      ></UmlLinkCurved>
    </template>
    <template v-if="options.editorState.mode === 'normal'">
      <Dock
        v-for="[key, value] of Object.entries(docks)"
        :key="key"
        :dock="value"
        class="dock"
        :selected="first && first.id === key"
        @click="handleDockClick(value)"
      ></Dock>
    </template>
    <PanelControl
      ref="panelControl"
      class="panel"
      v-model="options.panels.config.open"
      :options="fullPanelOptions"
      :panelConfig="fullPanelConfig"
      :selected="targetPanelSelected"
      :position="options.panels.config"
    />
    <RunInterval
      v-if="!deleteMode"
      :interval="options.global.timerInterval / 2"
      @tick="onTick"
    />
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
import ItemDelete from "./Uml3/ItemDelete";
import Dock from "./Uml3/Dock";
import Link from "./Uml3/Link";
import LinkCurved from "./Uml3/LinkCurved";
import PanelControl from "./Uml3/PanelControl";
import RunInterval from "@/components/RunInterval.vue";

const defs = [
  itemOutputDef,
  itemOutputPulseDef,
  itemInputDef,
  itemSoundDef,
  itemRelayDef,
  itemNotDef,
  itemAndDef,
  itemXorDef,
  itemXnorDef,
];

const types = defs.flatMap(d => d.types ?? []);

const fixType = o => {
  if (o.$type) {
    const type = types.find(t => t.$type === o.$type);
    if (type) {
      Object.assign(o, type);
    }
  }

  return o;
};

/**
 * @typedef {Object} Timer
 * @property {'read'|'write'} state
 * @property {number} ops
 */

export default {
  components: {
    ...defs.map(d => d.components).reduce((o, c) => ({ ...o, ...c }), {}),
    Dock,
    UmlLink: Link,
    UmlLinkCurved: LinkCurved,
    PanelControl,
    RunInterval,
    ItemDelete,
  },
  /**
   * @returns {{
   *   timer: {state: string}
   *   setTargetOptionsAndConfig (options: any, config: any, title?: string, id?: string): void
   * }}
   */
  provide() {
    return {
      timer: this.timer,
      editorState: this.options.editorState,
      setTargetOptionsAndConfig: (options, config, title = "", id = null) => {
        this.targetPanelOptions = options;
        this.targetPanelConfig = config;
        this.targetPanelSelected = title;
        this.targetId = id;

        this.panelOpened = true;
      },
    };
  },
  data() {
    return {
      timeoutId: null,
      options: {
        panels: {
          config: {
            x: 0,
            y: 0,
            open: true,
          },
        },
        editorState: {
          mode: "normal",
        },
        global: {
          timerInterval: 100,
          lineStyle: "curved",
          grided: true,
        },
        ...defs
          .flatMap(i => (i.options ? [i.options] : []))
          .reduce((o, c) => ({ ...o, ...c }), {}),
      },
      panelConfig: [
        {
          title: "System",
          items: [
            {
              name: "Tick interval",
              type: "number",
              min: 20,
              max: Infinity,
              path: ["global", "timerInterval"],
            },
            {
              name: "Editor mode",
              type: "select",
              options: [
                {
                  name: "normal",
                  value: "normal",
                },
                {
                  name: "delete",
                  value: "delete",
                },
                {
                  name: "locked",
                  value: "locked",
                },
              ],
              path: ["editorState", "mode"],
            },
            {
              name: "Line style",
              type: "select",
              options: [
                {
                  name: "direct",
                  value: "direct",
                },
                {
                  name: "curved",
                  value: "curved",
                },
              ],
              path: ["global", "lineStyle"],
            },
            {
              name: "Align to grid",
              type: "select",
              options: [
                {
                  name: "on",
                  value: true,
                },
                {
                  name: "off",
                  value: false,
                },
              ],
              path: ["global", "grided"],
            },
          ],
        },
        ...defs.flatMap(i => i.optionsPanel ?? []),
      ],
      panelOpened: true,
      targetPanelOptions: {},
      targetPanelConfig: [],
      targetPanelSelected: "",
      targetId: null,
      timer: {
        state: "read",
        ops: 0,
      },
      menu: defs.flatMap(i => i.menu),
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
          links: []
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
      first: null,
    };
  },
  computed: {
    curved: {
      /**
       * @returns {boolean}
       */
      get() {
        return this.options.global.lineStyle === "curved";
      },
    },
    grided: {
      /**
       * @returns {boolean}
       */
      get() {
        return this.options.global.grided;
      },
    },
    deleteMode: {
      /**
       * @returns {boolean}
       */
      get() {
        return this.options.editorState.mode === "delete";
      },
    },
    lockMode: {
      /**
       * @returns {boolean}
       */
      get() {
        return this.options.editorState.mode === "lock";
      },
    },
    /**
     * @returns {any}
     */
    fullPanelOptions() {
      return {
        ...this.options,
        ...this.targetPanelOptions,
      };
    },
    /**
     * @returns {any}
     */
    fullPanelConfig() {
      return [
        ...this.targetPanelConfig,
        ...this.panelConfig.map(i => ({
          ...i,
          title: i.title + " (Global)",
        })),
      ];
    },
    /**
     * @return {Record<string,any>}
     */
    draggableOptions() {
      if (this.grided) {
        return {
          gridPassive: [20, 20],
          containment: ".container",
        };
      } else {
        return {
          containment: ".container",
        };
      }
    },
  },
  methods: {
    newId() {
      return Math.random()
        .toString(16)
        .slice(2);
    },
    newLink() {
      const id = this.newId();
      return {
        id,
        input: null,
        output: null,
      };
    },
    addItem(def) {
      const { docks, item } = def.createComponent();
      this.$set(this.items, item.id, item);
      for (const dock of docks) {
        this.$set(this.docks, dock.id, dock);
      }

      /**
       * @type {HTMLDivElement}
       */
      const div = this.$refs.container;
      item.x = div.offsetWidth / 2 - 40;
      item.y = div.offsetHeight / 2 - 40;

      if (this.grided) {
        item.x = item.x - (item.x % 20);
        item.y = item.y - (item.y % 20);
      }
    },
    handleDockClick(dock) {
      const first = this.first;

      if (first != null) {
        if (first.id === dock.id) {
          this.first = null;
          return;
        }

        if (first.type === dock.type) {
          this.first = dock;
          return;
        }

        if (
          first.links.find(it => {
            if (first.type === "output") {
              return it.output.id === dock.id;
            } else {
              return it.input.id === dock.id;
            }
          })
        ) {
          this.first = dock;
          return;
        }

        const link = this.newLink();

        if (first.type === "output") {
          link.input = first;
          link.output = dock;
        } else {
          link.output = first;
          link.input = dock;
        }

        this.$set(this.links, link.id, link);

        if (first.type === "output") {
          first.links.push(link);
          dock.links.push(link);
        } else {
          dock.links.push(link);
          first.links.push(link);
        }

        this.first = null;
      } else {
        this.first = dock;
      }
    },
    onTick() {
      if (this.timer.state === "read") {
        this.timer.state = "write";
      } else {
        this.timer.state = "read";
      }
    },
    mapObject(o, cb) {
      return Object.entries(o)
        .map(e => [e[0], cb(e[1])])
        .reduce((o, c) => ((o[c[0]] = c[1]), o), {});
    },
    exportData() {
      const items = this.mapObject(this.items, e => ({
        ...e,
        inputs: e.inputs.map(i => i.id),
        outputs: e.outputs.map(i => i.id),
      }));

      const docks = this.mapObject(this.docks, e => ({
        ...e,
        links: e.links.map(l => l.id),
        owner: e.owner.id,
      }));

      const links = this.mapObject(this.links, e => ({
        ...e,
        input: e.input.id,
        output: e.output.id,
      }));

      console.log(
        JSON.stringify({ items, docks, links, options: this.options }, 0, 4)
      );
    },
    importData({ items, docks, links, options }) {
      const fixedItems = this.mapObject(items, e => e);
      const fixedDocks = this.mapObject(docks, e => fixType(e));
      const fixedLinks = this.mapObject(links, e => e);

      for (const item of Object.values(fixedItems)) {
        item.inputs = item.inputs.map(id => fixedDocks[id]);
        item.outputs = item.outputs.map(id => fixedDocks[id]);
      }
      for (const dock of Object.values(fixedDocks)) {
        dock.links = dock.links.map(id => fixedLinks[id]);
        dock.owner = fixedItems[dock.owner];
      }
      for (const link of Object.values(fixedLinks)) {
        link.input = fixedDocks[link.input];
        link.output = fixedDocks[link.output];
      }

      console.log({
        items: fixedItems,
        docks: fixedDocks,
        links: fixedLinks,
        options,
      });

      this.items = fixedItems;
      this.docks = fixedDocks;
      this.links = fixedLinks;

      // this must start from read to prevent desync
      this.timer.state == "read";
      this.timer.ops == 0;

      for (let domain of Object.keys(options)) {
        Object.assign(this.options[domain], options[domain]);
      }
    },
    unlink(linkId) {
      const link = this.links[linkId];

      this.$delete(this.links, linkId);
      const inDock = link.input;
      const outDock = link.output;

      outDock.links.splice(
        outDock.links.findIndex(i => i.id === linkId),
        1
      );

      inDock.links.splice(
        inDock.links.findIndex(i => i.id === linkId),
        1
      );

      link.input = null;

      link.output = null;
    },
    handleDelete(item) {
      const pendingLinks = new Set();

      for (let dock of item.inputs) {
        for (let link of dock.links) {
          pendingLinks.add(link.id);
        }
      }

      for (let dock of item.outputs) {
        for (let link of dock.links) {
          pendingLinks.add(link.id);
        }
      }

      for (const id of pendingLinks) {
        this.unlink(id);
      }

      for (const dock of item.outputs) {
        this.$delete(this.docks, dock.id);
      }

      for (const dock of item.inputs) {
        this.$delete(this.docks, dock.id);
      }

      this.$delete(this.items, item.id);
    },
    handleDeleteLink(link) {
      this.unlink(link.id);
    },
  },
  mounted() {
    const containerWidth = this.$refs.container.offsetWidth;
    const containerHeight = this.$refs.container.offsetHeight;
    const panelWidth = this.$refs.panelControl.$el.offsetWidth;
    const panelHeight = this.$refs.panelControl.$el.offsetHeight;
    this.options.panels.config.x = (containerWidth - panelWidth) / 2;
    this.options.panels.config.y = containerHeight - panelHeight - 40;
  },
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
