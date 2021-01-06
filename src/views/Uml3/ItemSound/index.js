

import ItemDummy from "../ItemDummy.vue";
import Vue from "vue";
const createComponent = () => {
  const dock = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: 'input',
    getValue() {
      return this.links.map(link => {
        return link.input.getValue()
      }).reduce((x, y) => x || y, false)
    },
    getPosition() {
      return {
        x: this.owner.x,
        y: this.owner.y + 40
      }
    },
    owner: null,
    links: []
  })

  const item = Vue.observable({
    id: Math.random().toString(16).slice(2),
    renderType: 'sound-item',
    x: 0,
    y: 0,
    _value: false,
    inputs: [],
    outputs: []
  })

  item.inputs.push(dock)
  dock.owner = item

  return {
    item,
    docks: [dock]
  }
}
export const declaration = {
  menu: [
    {
      name: 'Sound input',
      component: 'sound-item',
      createComponent
    }
  ],
  components: {
    'sound-item': () => ({
      // The component to load (should be a Promise)
      component: import(/* webpackChunkName: "item-sound" */ './ItemSound.vue'),
      // A component to use while the async component is loading
      loading: ItemDummy,
      // Delay before showing the loading component. Default: 200ms.
      delay: 200
    })
  }
}