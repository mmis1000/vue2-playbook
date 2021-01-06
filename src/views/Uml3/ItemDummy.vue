<template>
  <drag class="item" :left.sync="item.x" :top.sync="item.y" :options="options">
    Loading...
  </drag>
</template>
<script>
import Drag from "@/components/Drag.vue";
export default {
  name: "Uml3ItemDummy",
  components: {
    Drag,
  },
  props: {
    item: Object,
    options: Object,
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
</style>
