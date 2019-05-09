<template>
  <div>
    <RequestAnimationFrame v-slot="{current}">
      <div class="run">
        <div class="filled" :style="{width: (current / 50) % 300 + 'px'}">
          {{current}}
        </div>
      </div>
    </RequestAnimationFrame>
    <RequestAnimationFrame v-slot="{current}">
      <div class="run">
        <div class="filled" :style="{opacity: Math.sin(current / 1000) * 0.5 + 0.5 + ''}">
          {{current}}
        </div>
      </div>
    </RequestAnimationFrame>
    <RequestAnimationFrame v-slot="{current}">
      <div class="run">
        <div class="filled" :style="{background: 'hsl(' + (current / 10) % 360 + ', 50%, 50%'}">
          {{current}}
        </div>
      </div>
    </RequestAnimationFrame>
    <RequestAnimationFrame v-slot="{current}">
      <div class="board">
        <div class="item" :style="{background: 'hsl(' + (current / 10) % 360 + ', 50%, 50%', left: Math.sin(current / 1000) * 40 + 50 + '%', top: Math.cos(current / 1000) * 40 + 50 + '%'}">
          {{current}}
        </div>
        <div class="item" :style="{background: 'hsl(' + (current / 10 + 180) % 360 + ', 50%, 50%', left: -Math.sin(current / 1000) * 40 + 50 + '%', top: -Math.cos(current / 1000) * 40 + 50 + '%'}">
          {{current}}
        </div>
      </div>
    </RequestAnimationFrame>
  </div>
</template>

<script>
import RequestAnimationFrame from '@/components/RAF'

export default {
  components: {
    RequestAnimationFrame
  }
}
</script>

<style lang="scss" scoped>
.run {
  background: blue;
  color: white;
  border-radius: 4px;
  width: 300px;
  overflow: hidden;
  .filled {
    background: red;
  }
}

.board {
  width: 300px;
  height: 300px;
  position: relative;
  background: blue;
  color: white;

  .item {
    position: absolute;
    width: 10px;
    height: 10px;
    background: red;
    margin-left: -5px;
    margin-top: -5px;
    border-radius: 5px;
  }
}
</style>