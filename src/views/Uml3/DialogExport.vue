<template>
  <div v-if="value" class="dialog">
    <div class="title">Export</div>
    <div class="text">
      <textarea
        v-model="text"
        readonly
        @click.prevent="$event.target.select()"
      ></textarea>
    </div>
    <button class="close" @click="$emit('input', false)">Close</button>
  </div>
</template>
<script>
export default {
  name: "Uml3DialogExport",
  props: {
    value: Boolean,
    text: String,
  },
};
</script>
<style lang="scss" scoped>
.dialog {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  top: 16px;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.5);
  overflow: hidden;

  .title {
    line-height: 24px;
    padding: 8px;
    background: rgba(127, 127, 127);
  }
  .text {
    flex-grow: 1;
    position: relative;
    textarea {
      box-sizing: border-box;
      padding: 6px;
      overflow: scroll;
      width: 100%;
      height: 100%;
      background: rgba(95, 95, 95);
      color: white;
      border: 0;
      outline: none;
      resize: none;
    }
  }
  .close {
    height: 40px;
    background: rgba(63, 63, 63);
    color: white;
    border: 0;
  }
}
</style>
