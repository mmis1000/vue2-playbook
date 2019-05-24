<template>
  <div>
    I am a custom input component
    <InputInVModel v-model="text"/>
  </div>
</template>

<script>
import InputInVModel from './InputInVModel.vue'

export default {
  components: {
    InputInVModel
  },
  props: {
    aaaa: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      text: this.aaaa
    };
  },
  watch: {
    aaaa(newVal) {
      this.text = newVal
    },
    text(newVal) {
      this.$emit('update:aaaa', newVal)
    }
  }
}
</script>

<style>

</style>
