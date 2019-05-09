<template>
  <div>
    <input type="text" v-model="src">
    <pre>{{text}}</pre>
    <Ajax :src="src" @success="onAjaxFinish"></Ajax>
  </div>
</template>

<script>
import Ajax from '@/components/Ajax.vue'

export default {
  data () {
    return {
      src: '/assets/ajax-test.txt',
      text: ''
    }
  },
  components: {
    Ajax
  },
  methods: {
    onAjaxFinish (res) {
      this.text = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, 0, 4)
    }
  }
}
</script>
