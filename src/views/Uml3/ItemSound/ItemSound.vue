<template>
  <drag
    class="item"
    :class="{ active: item._value }"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
    @staticClick="click"
  >
    <template v-if="loadState.loading">
      Loading Sounds
    </template>
    <template v-else>
      Sound<br>
      {{ item._channel + 1 }}/{{ NOTE_TO_KEY[item._note] }}<br>
      V{{this.item._velocity}}
    </template>
  </drag>
</template>
<script>
import Vue from "vue";
import Drag from "@/components/Drag.vue";
import * as MIDI from "midicube";
import { options } from "./index.js"

window.MIDI = MIDI; // Register to global first

export const KET_NODE_MAP_OPTIONS = Object.entries(MIDI.keyToNote).map(it => ({
  name: it[0],
  value: it[1]
})).sort((a, b) => a.value - b.value)
export const NOTE_TO_KEY = Object
  .entries(MIDI.keyToNote)
  .reduce(
    (o, c) => {
      o[c[1]] = c[0]
      return o
    }, 
    /** @type {Record<number, string>} */({})
  )

const state = Vue.observable({
  loading: true
})

{
  const loadPrograms = () => {
    state.loading = true
    MIDI.loadPlugin({
      // this only has piano.
      // for other sounds install the MIDI.js
      // soundfonts somewhere.
      instruments: [...new Set(options["sound-item"].channels.map(i => i.program.id))], // or the instrument code 1 (aka the default)
      soundfontUrl: "https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/",
      onerror: console.warn,
      onsuccess: () => {
        for (const [index, channel] of options["sound-item"].channels.entries()) {
          MIDI.programChange(index, channel.program.program)
        }
        state.loading = false
      },
    });
  }

  loadPrograms()

  const inst = new Vue({})
  inst.$watch(() => {
    return options['sound-item'].channels.map(it => it.program.id).join('|')
  }, () => {
    loadPrograms()
  })
}

export default {
  name: "Uml3ItemSound",
  components: {
    Drag,
  },
  props: {
    item: Object,
    options: Object,
  },
  data() {
    return {
      prevState: false,
      loadState: state,
      NOTE_TO_KEY
    };
  },
  inject: ["timer", "setTargetOptionsAndConfig"],
  computed: {
    /**
     * @returns {boolean}
     */
    active() {
      let sum = false

      for (let input of this.item.inputs) {
        sum = sum || input.getValue()
      }

      return sum
    },
  },
  watch: {
    "timer.state"(state) {
      if (state === "read") {
        if (this.item._value !== this.active) {
          this.item._value = this.active;
        }
      }
      if (state === "write") {
        if (this.prevState !== this.item._value) {
          if (this.item._value) {
            if (!this.loadState.loading) {
              MIDI.noteOn(this.item._channel, this.item._note, this.item._velocity);
            }
          } else {
            MIDI.noteOff(this.item._channel, this.item._note);
          }
          this.prevState = this.item._value;
        }
      }
    },
  },
  methods: {
    click () {
      console.log(this.item.id)
      this.setTargetOptionsAndConfig(
        {
          currentOption: this.item
        },
        [
          {
            title: 'Note block',
            items: [
              {
                name: 'Channel',
                type: 'select',
                options: new Array(16).fill(null).map((_, i) => ({
                  name: String(i + 1),
                  value: i
                })),
                path: ['currentOption', '_channel']
              },
              {
                name: 'Note',
                type: 'select',
                options: KET_NODE_MAP_OPTIONS,
                path: ['currentOption', '_note']
              },
              {
                name: 'Velocity',
                type: 'number',
                min: 0,
                path: ['currentOption', '_velocity']
              }
            ]
          }
        ],
        'Note block',
        this.item.id
      )
    }
  }
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
