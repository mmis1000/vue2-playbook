<template>
  <div v-if="ready" class="m-infinite-table" :style="{ width: `${width}px`, height: `${height}px`}" @scroll.passive="handleScroll">
    <div class="m-infinite-table-inner" :style="{
      width: `${defaultData.size.left + defaultData.dimension.width * defaultData.size.width + defaultData.size.right}px`,
      height: `${defaultData.size.top + defaultData.dimension.height * defaultData.size.height + defaultData.size.bottom}px`
    }"
    >
      <!-- <template v-for="direction in DIRECTIONS">
        <template v-for="area in header[direction.name]">
          <div class="area" :key="direction + '-' + area.id" :style="area.style">
            <template v-for="slot in area.items">
              <slot :name="'header' + direction" v-bind="slot"/>
            </template>
          </div>
        </template>
      </template> -->

      <template v-for="area in bodyChunks">
        <div class="area" :key="area.id" :style="area.style">
          <template v-for="slot in area.items">
            <slot name="body" v-bind="slot" :class="slot.class" :data="slot.data" :style="slot.style">
              <div :class="slot.class" :style="slot.style" :key="slot.id">
                {{ slot.data }}
              </div>
            </slot>
          </template>
        </div>
      </template>
    </div>
  </div>
  <div v-else class="m-infinite-table loading">
    Loading...
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

/**
 * @typedef {{
 *   style: any,
 *   id: string,
 *   class: string | string[],
 *   items: {
 *     style: any,
 *     id: string,
 *     class: string | string[],
 *     data: any
 *   }[]
 * }} Area
 */

/**
 * @typedef {"unload|loading|load"} State
 */

const DIRECTIONS = Object.freeze([
  { name: 'left', type: 'side' , direction: 'y'},
  { name: 'right', type: 'side'  , direction: 'y'},
  { name: 'top', type: 'side'  , direction: 'x'},
  { name: 'bottom', type: 'side'  , direction: 'x'},
  { name: 'leftTop', type: 'edge' },
  { name: 'leftBottom', type: 'edge' },
  { name: 'rightTop', type: 'edge' },
  { name: 'rightBottom', type: 'edge' }
])

/**
 * @typedef {{
 *   data: unknown,
 *   style: { [key: string]: string },
 *   class: string | string[]
 * }} Data
 */

/**
 * @typedef {{
 *   height: number,
 *   width: number,
 *   top: number,
 *   bottom: number,
 *   left: number,
 *   right: number
 * }} HeaderAndSlotWidth
 */

/**
 * @typedef {{
 *   height: number,
 *   width: number
 * }} Dimension
 */

/**
 * @typedef {{
 *   getDefaultData (): Promise<{ table: any, body: Data, sides: { [key: string]: Data }, dimension: Dimension, size: HeaderAndSlotWidth }>
 *   getData (token: AbortSignal, range: {x: [number, number], y: [number, number]}): Promise<Data[][]>,
 *   getHeader (token: AbortSignal, type: string, range: [number, number]): Promise<Data[]> ,
 *   getEdge (token: AbortSignal, type: string): Promise<Data> 
 * }} Provider
 */

function isDimension (obj) {
  return typeof obj === 'object' && ('height' in obj || 'width' in obj)
}

export default {
  props: {
    chunkLength: {
      type: Number,
      default: 5,
    },
    chunkPadding: {
      type: Number,
      default: 2,
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 500
    },
    dataProvider: /** @type {import("vue").PropOptions<Provider>} */({
      type: Object
    })
  },
  data () {
    return {
      DIRECTIONS,
      ready: false,
      /** @type {import('../interface').Await<ReturnType<Provider['getDefaultData']>>} */
      defaultData: null,
      /** @type {{[id: string]: import('../interface').Await<ReturnType<Provider['getData']>>}} */
      data: {},
      /** @type {{[id: string]: { controller: AbortController, promise: Promise<any> }}} */
      loadingState: {},
      scrollPosition: {
        top: 0,
        left: 0
      }
    }
  },
  computed: {
    /**
     * @returns {number}
     */
    xOrigin () {
      var scrollLeft = /** @type {any} */(this).scrollPosition.left
      var sectionWidth  = /** @type {any} */(this).defaultData.size.width * /** @type {any} */(this).chunkLength
      return Math.max(Math.floor(scrollLeft / sectionWidth) - this.chunkPadding, 0)
    },
    /**
     * @returns {number}
     */
    xLength () {
      var currentXOrigin = /** @type {any} */(this).xOrigin
      var width = /** @type {any} */(this).width
      var sectionWidth  = /** @type {any} */(this).defaultData.size.width * /** @type {any} */(this).chunkLength
      const desiredLength = Math.ceil(width / sectionWidth) + this.chunkPadding * 2
      const maxContentLength = Math.ceil((this.defaultData.dimension.width * this.defaultData.size.width) / sectionWidth) - currentXOrigin
      return Math.min(desiredLength, maxContentLength)
    },
    /**
     * @returns {number}
     */
    yOrigin () {
      var scrollTop = /** @type {any} */(this).scrollPosition.top
      var sectionHeight  = /** @type {any} */(this).defaultData.size.height * /** @type {any} */(this).chunkLength
      return Math.max(Math.floor(scrollTop / sectionHeight) - this.chunkPadding, 0)
    },
    /**
     * @returns {number}
     */
    yLength () {
      var currentYOrigin = /** @type {any} */(this).yOrigin
      var height = /** @type {any} */(this).height
      var sectionHeight  = /** @type {any} */(this).defaultData.size.height * /** @type {any} */(this).chunkLength
      const desiredLength = Math.ceil(height / sectionHeight) + this.chunkPadding * 2
      const maxContentLength = Math.ceil((this.defaultData.dimension.height * this.defaultData.size.height) / sectionHeight) - currentYOrigin
      return Math.min(desiredLength, maxContentLength)
    },
    bodyChunks () {
      var chunks = [];

      this.xOrigin

      for (let i = this.xOrigin; i < this.xOrigin + this.xLength; i++) {
        for (let j = this.yOrigin; j < this.yOrigin + this.yLength; j++) {
          /**
           * @type { any }
           */
          const chunk = {
            style: {
              'position': 'absolute',
              left: '0px',
              top: '0px',
                transform: `
                  translateX(${this.defaultData.size.left + i * this.chunkLength * this.defaultData.size.width}px)
                  translateY(${this.defaultData.size.top + j * this.chunkLength * this.defaultData.size.height}px)
                `.replace(/\n/, ' ')
            },
            id: (i % this.xLength) + '-' + (j % this.yLength),
            items: this.getBodyChunk(i, j)
          }

          chunks.push(chunk)
        }
      }

      return chunks
    },
    headerChunks () {
      var headerChunks = {}
      for (let direction of this.DIRECTIONS.filter(i => i.type === 'side')) {
        const chunks = []
        headerChunks[direction.name] = chunks

        if (direction.direction === 'x') {
          for (let i = this.xOrigin; i < this.xOrigin + this.xLength; i++) {
            chunks.push({
              style: {},
              id: direction.name + '-' + (i % this.xLength),
              items: this.getHeaderChunk(direction.name, i)
            })
          }
        } else if (direction.direction === 'y') {
          for (let i = this.yOrigin; i < this.yOrigin + this.yLength; i++) {
            chunks.push({
              style: {},
              id: direction.name + '-' + (i % this.yLength),
              items: this.getHeaderChunk(direction.name, i)
            })
          }
        }
      }
      return headerChunks
    },
    edges () {
      var edges = {}
      for (let direction of this.DIRECTIONS.filter(i => i.type === 'edge')) {
        edges[direction.name] = this.getEdge(direction.name)
      }

      return edges
    }
  },
  methods: {
    handleScroll (ev) {
      this.scrollPosition.top = ev.target.scrollTop
      this.scrollPosition.left = ev.target.scrollLeft
    },
    reSync () {

    },
    /**
     * @returns {Area['items']}
     */
    getBodyChunk (c_x, c_y) {
      /**
       * @type {Area['items']}
       */
      const area = []

      if (this.data[c_x + '-' + c_y]) {
        const data = this.data[c_x + '-' + c_y]

        for (let y = 0; y < data.length; y++) {
          for (let x = 0; x < data[y].length; x++) {
            area.push({
              style: Object.assign({}, data[y][x].style, {
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: this.defaultData.size.width + 'px',
                height: this.defaultData.size.height + 'px',
                transform: `
                  translateX(${x * this.defaultData.size.width}px)
                  translateY(${y * this.defaultData.size.height}px)
                `.replace(/\n/, ' ')
              }),
              data: data[y][x].data,
              class: data[y][x].class,
              id: x + '-' + y
            })
          }
        }
      } else {
        const xLimit = this.defaultData.dimension.width - c_x * this.chunkLength
        const yLimit = this.defaultData.dimension.height - c_y * this.chunkLength
        for (let y = 0; y < Math.min(this.chunkLength, yLimit); y++) {
          for (let x = 0; x < Math.min(this.chunkLength, xLimit); x++) {
            area.push({
              style: Object.assign({}, this.defaultData.body.style, {
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: this.defaultData.size.width + 'px',
                height: this.defaultData.size.height + 'px',
                transform: `
                  translateX(${x * this.defaultData.size.width}px)
                  translateY(${y * this.defaultData.size.height}px)
                `.replace(/\n/, ' ')
              }),
              data: this.defaultData.body.data,
              class: this.defaultData.body.class,
              id: x + '-' + y
            })
          }
        }

        if (!this.loadingState[c_x + '-' + c_y]) {
          this.updateData(c_x, c_y)
        }
      }

      return area
    },
    getHeaderChunk (side, x) {

    },
    getEdge (side) {
  
    },
    async updateData (x, y) {
      const xLimit = this.defaultData.dimension.width - x * this.chunkLength
      const yLimit = this.defaultData.dimension.height - y * this.chunkLength

      const controller = new AbortController
      const promise = this.dataProvider.getData(controller.signal, {
        x: [x * this.chunkLength, x * this.chunkLength + Math.min(this.chunkLength, xLimit)],
        y: [y * this.chunkLength, y * this.chunkLength + Math.min(this.chunkLength, yLimit)]
      })
      this.$set(this.loadingState, x + '-' + y, {
        controller,
        promise
      })

      try {
        const data = await promise
        this.$set(this.data, x + '-' + y, data)
      } finally {
        this.$delete(this.loadingState, x + '-' + y)
      }

      this.gc()
    },
    gc () {
      var minX = this.xOrigin - 2
      var maxX = this.xOrigin + this.xLength + 2
      var minY = this.yOrigin - 2
      var maxY = this.yOrigin + this.yLength + 2

      var reserved = new Set()

      for (let i = minX; i < maxX; i++) {
        for (let j = minY; j < maxY; j++) {
          reserved.add(i + '-' + j)
        }
      }

      for (let name in this.loadingState) {
        if (!reserved.has(name)) {
          this.loadingState[name].controller.abort()
        }
      }
      for (let name in this.data) {
        if (!reserved.has(name)) {
          this.$delete(this.data, name)
        }
      }
    }
  },
  async mounted () {
    this.defaultData = await this.dataProvider.getDefaultData()
    this.ready = true
    this.reSync()
  }
}
</script>

<style scoped>
.m-infinite-table {
  overflow: auto;
  background: red;
}
.m-infinite-table-inner {
  position: relative;
  overflow: hidden;
}
</style>