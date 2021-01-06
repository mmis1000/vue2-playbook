<template>
  <drag
    class="item"
    :class="{ active }"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
  >
    Sound
  </drag>
</template>
<script>
import Drag from "@/components/Drag.vue";
import * as MIDI from "midicube";
window.MIDI = MIDI; // Register to global first

MIDI.loadPlugin({
  // this only has piano.
  // for other sounds install the MIDI.js
  // soundfonts somewhere.
  instruments: ["acoustic_grand_piano", "melodic_tom"], // or the instrument code 1 (aka the default)
  soundfontUrl: "https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/",
  onerror: console.warn,
  onsuccess: () => {
    MIDI.noteOn(1, 44, 0);
  },
});

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
    };
  },
  inject: ["timer"],
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
            MIDI.noteOn(0, 60, 64);
          } else {
            MIDI.noteOff(0, 60);
          }
          this.prevState = this.item._value;
        }
      }
    },
  },
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
