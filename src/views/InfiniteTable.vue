<template>
  <div>
    <MyTable :dataProvider="dataProvider"/>
  </div>
</template>

<script>
import MyTable from '../components/InfiniteTable'

export default {
  name: 'app',
  components: {
    MyTable
  },
  data () {
    return {
      dataProvider: {
        async getDefaultData () {
          return {
            body: {
              style: {
                'border-right': 'white 2px solid',
                'border-bottom': 'white 2px solid',
                'background': 'black',
                'color': 'white',
                'line-height': '36px',
                'box-sizing': 'border-box'
              },
              class: '',
              data: 'Loading...'
            },
            sides: {},
            dimension: {
              height: 19998,
              width: 20000
            },
            size: {
              left: 100,
              right: 100,
              width: 100,
              top: 40,
              bottom: 40,
              height: 40
            }
          }
        },
        /**
         * @argument {AbortSignal} token
         */
        getData (token, {x: [x1, x2], y: [y1, y2]}) {
          return new Promise((resolve, reject) => {
            const timer = setTimeout(function () {
              const table = []

              for (let y = y1; y < y2; y++) {
                const row = []
                table.push(row)
                for (let x = x1; x < x2; x++) {
                  const sum = x + y
                  const color = `hsl(${(360 / 36 * sum) % 360}, 50%, 50%)`
                  const borderColor = `hsl(${(360 / 36 * sum + 120) % 360}, 50%, 50%)`
                  const textColor = `hsl(${(360 / 36 * sum + 180) % 360}, 50%, 50%)`
                  row.push({
                    data: x + '-' + y,
                    style: {
                      'background': color,
                      'border-right': `${borderColor} 2px solid`,
                      'border-bottom': `${borderColor} 2px solid`,
                      'line-height': '36px',
                      'box-sizing': 'border-box',
                      'color': textColor
                    },
                    class: ''
                  })
                }
              }

              resolve(table)
            }, 100 + Math.random() * 800)

            token.onabort = () => {
              clearTimeout(timer)
              reject(new Error('aborted'))
            }
          })
        }
      }
    }
  }
}
</script>

<style>
</style>
