<template>
  <link>
</template>

<script>
import * as debounce from 'debounce'
import { CancelToken } from 'axios'

export default {
  props: {
    src: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      source: null
    }
  },
  methods: {
    fetch: debounce(function (url) {
      const source = CancelToken.source()
      this.source = source

      this.$axios
        .get(url, {
          cancelToken: source.token
        })
        .then((res) => {
          this.$emit('success', res)
        })
        .catch((thrown) => {
          if (!this.$axios.isCancel(thrown)) {
            this.$emit('error', thrown)
          }
        })
    }, 300),
    cancel () {
      if (this.source) {
        this.source.cancel()
      }
    }
  },
  watch: {
    src (val, old) {
      if (val !== old) {
        if (this.source) {
          this.source.cancel()
        }

        if (val != null) {
          this.fetch(val)
        }
      }
    }
  },
  mounted () {
    if (this.src != null) {
      this.fetch(this.src)
    }
  },
  beforeDestroy () {
    if (this.source) {
      this.source.cancel()
    }
  }
}
</script>

<style>

</style>
