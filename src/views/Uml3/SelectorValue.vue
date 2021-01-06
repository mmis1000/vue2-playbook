<template>
  <div class="selector">
    <button class="button" @click.prevent.stop.capture="emit(value - 1)"> - </button>
    <div class="text handle"> {{text}}{{ value }}</div>
    <button class="button" @click.prevent.stop.capture="emit(value + 1)"> + </button>
  </div>
</template>
<script>
export default {
  name: 'Uml3SelectorValue',
  props: {
    value: {
      type: Number
    },
    text: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    }
  },
  methods: {
    emit (value) {
      if (isNaN(value)) {
        return
      }

      if (value < this.min) {
        return
      }

      if (value > this.max) {
        return
      }

      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.selector {
  padding: 0px;
  display: flex;
  justify-content: stretch;
  align-items: center;

  .button {
    width: 25px;
    height: 25px;
    background: rgba(128, 128, 128, 0.5);
    border: 0;
    color: inherit;
  }

  .text {
    flex-grow: 1;
    user-select: none;
  }
}
</style>
