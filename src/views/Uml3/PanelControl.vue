<template>
  <Drag
    class="panels"
    :options="dragOptions"
    :left.sync="position.x"
    :top.sync="position.y"
    @staticClick="$emit('input', !value)"
  >
    <div class="title handle">
      Config {{ selected ? "(+" + selected + ")" : "" }}
      {{ value ? "[open]" : "[close]" }}
    </div>
    <div class="wrapper" :class="{ hide: !value }">
      <div class="panel" v-for="(panel, index1) in mappedPanels" :key="index1">
        <div class="panel-title">{{ panel.title }}</div>
        <div class="item" v-for="(item, index2) in panel.items" :key="index2">
          <template v-if="item.type === 'select'">
            <label :for="'panel' + index1 + '-' + index2">
              {{ item.name }}
              <select
                v-model="item.value"
                :name="'panel' + index1 + '-' + index2"
              >
                <!-- inline object literal -->
                <option
                  v-for="(option, index) in item.options"
                  :key="index"
                  :value="option.value"
                >
                  {{ option.name }}
                </option>
              </select>
            </label>
          </template>
          <template v-if="item.type === 'number'">
            <label :for="'panel' + index1 + '-' + index2">
              {{ item.name }}
              <input
                type="number"
                :min="item.min"
                :max="item.max"
                v-model.number="item.value"
              />
            </label>
          </template>
        </div>
      </div>
    </div>
  </Drag>
</template>

<script>
import Vue from "vue";
import Drag from "@/components/Drag.vue";

const getValue = (obj, path) => {
  let current = obj;

  for (let seg of path) {
    current = current[seg];
  }

  return current;
};

const setValue = (obj, path, value) => {
  let current = obj;

  for (let seg of path.slice(0, -1)) {
    current = current[seg];
  }

  Vue.set(current, path[path.length - 1], value);
  // current[path[path.length - 1]] = value
};

export default {
  components: {
    Drag,
  },
  props: {
    options: Object,
    panelConfig: Array,
    selected: {
      type: String,
      default: "",
    },
    position: Object,
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dragOptions: {},
    };
  },
  computed: {
    /**
     * @returns {{
     *   title: string
     *   items: ({
     *     name: string
     *     type: 'select'
     *     options: { name: string, value: any }[],
     *     value: any
     *   } | {
     *     name: string
     *     type: 'number'
     *     min?: number
     *     max?: number
     *     value: any
     *   })[]
     * }[]}
     */
    mappedPanels() {
      const self = this;
      return this.panelConfig.map(panel => {
        return {
          title: panel.title,
          items: panel.items.map(item => {
            switch (item.type) {
              case "select":
                return {
                  name: item.name,
                  type: "select",
                  options: item.options,
                  get value() {
                    return getValue(self.options, item.path);
                  },
                  set value(newVal) {
                    setValue(self.options, item.path, newVal);
                    return true;
                  },
                };
              case "number":
                return {
                  name: item.name,
                  type: "number",
                  min: item.min ?? "",
                  max: item.max ?? "",
                  get value() {
                    return getValue(self.options, item.path);
                  },
                  set value(newVal) {
                    setValue(self.options, item.path, newVal);
                    return true;
                  },
                };
              default:
                console.error(item);
                throw new Error("wtf");
            }
          }),
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.panels {
  position: absolute;
  background: #555;
  margin-top: 4px;
  overflow: hidden;

  .title {
    box-sizing: border-box;
    height: 40px;
    line-height: 32px;
    padding: 4px;

    box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;

    cursor: pointer;
  }

  .wrapper {
    position: relative;
    z-index: 1;
    height: 250px;
    overflow-x: hidden;
    overflow-y: auto;
    &.hide {
      height: 0;
      overflow: hidden;
    }

    .panel {
      overflow: hidden;
      .panel-title {
        height: 40px;
        line-height: 40px;
        background: #777;
      }

      background: #666;

      .item {
        margin: 4px;
      }
    }
  }
}
</style>