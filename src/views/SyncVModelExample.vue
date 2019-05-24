<template>
  <div>
    <InputOutSync :aaaa.sync="text"></InputOutSync>
    <div>
      I am a buildin input component
      <input type="text" v-model="text">
    </div>
    current Text: {{text}}
  </div>
</template>

<script>
import InputOutSync from "@/components/InputOutSync"
export default {
  components: {
    InputOutSync
  },
  data () {
    return {
      text: "dsd"
    }
  }
}
</script>

<style>

</style>
