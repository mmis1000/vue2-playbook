<template>
  <drag
    class="item"
    :left.sync="item.x"
    :top.sync="item.y"
    :options="options"
    @staticClick="$emit('delete', item)"
  >
    <i class="fa fa-trash-alt fa-2x" aria-hidden="true"></i>
  </drag>
</template>
<script>
import Drag from "@/components/Drag.vue";
export default {
  name: "Uml3ItemDelete",
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

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: red;
  }
}
</style>
