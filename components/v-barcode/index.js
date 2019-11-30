import barcode from './barcode'

const defalutOptions = {
  number: true, // 是否显示数字
  prefix: true, // 是否显示国家前缀
  color: 'black', // 条形码的颜色
  debug: false, // 是否开启调试
  onValid() {}, // 验证条形码合法的回调函数
  onInvalid() {}, // 验证条形码不合法的回调函数
  onSuccess() {}, // 接口调用成功的回调函数
  onError() {}, // 接口调用失败的回调函数
}

Component({
  externalClasses: ['v-class'],
  properties: {
    // canvas 组件的宽度
    width: {
      type: Number,
      value: 200
    },
    // canvas 组件的高度
    height: {
      type: Number,
      value: 100
    },
    // 条形码的数值
    number: {
      type: String,
      value: '',
      observer(newVal) {
        this.draw({
          number: newVal
        })
      },
    },
    // 配置项
    options: {
      type: Object,
      value: defalutOptions
    },
    // canvas 组件的唯一标识符
    canvasId: {
      type: String,
      value: 'v-barcode'
    },
  },
  methods: {
    draw(opts = {}) {
      const {
        canvasId,
        number,
        width,
        height,
        options
      } = Object.assign({}, this.data, opts)
      new barcode(canvasId, number, Object.assign({
        width,
        height
      }, options), this)
    },
  },
})