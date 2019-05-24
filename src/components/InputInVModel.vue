<template>
  <input type="text" v-model="text">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      text: this.value
    };
  },
  watch: {
    value(newVal) {
      this.text = newVal
    },
    text(newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style>

</style>
