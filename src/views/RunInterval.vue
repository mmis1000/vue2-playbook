<template>
  <div style="padding: 1em">
    {{num}}
    <input type="number" v-model.number="interval">
    <RunInterval @tick="add" :interval="intervalFiltered"></RunInterval>
  </div>
</template>

<script>
import RunInterval from '@/components/RunInterval.vue'

export default {
  components: {
    RunInterval
  },
  data () {
    return {
      num: 0,
      interval: 1000
    }
  },
  computed: {
    intervalFiltered () {
      return isNaN(this.interval) ? 100 : Math.max(this.interval, 100)
    }
  },
  methods: {
    add () {
      this.num++
    }
  }
}
</script>
