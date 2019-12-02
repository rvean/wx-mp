import $countUp from '../../components/v-countup/index'

Page({
  data: {
    c1: 1,
    c2: 0,
    c3: 0,
  },
  onLoad() {
    /**
     * new $countUp(startVal, endVal, decimals, duration, options)
     * startVal - 起始值
     * endVal - 结束值
     * decimals - 小数点位数，默认0
     * duration - 动画时长，默认0s
     * options - 配置项 {}
     * options.printValue - 渲染组件的回调函数
     * options.useEasing - 是否开启过渡动画，默认true
     * options.useGrouping - 是否分隔数值，默认true
     * options.separator - 分隔符
     * options.decimal - 小数点符号，默认.
     * options.easingFn - 自定义过渡动画
     * options.formattingFn - 自定义格式化函数
     */
    this.c1 = new $countUp(1, 1024, 0, 2, {
      printValue(value) {
        this.setData({
          c1: value
        })
      }
    })

    this.c2 = new $countUp(0, 88.88, 2, 2, {
      printValue(value) {
        this.setData({
          c2: value
        })
      }
    })

    this.c3 = new $countUp(0, 520, 0, 2, {
      printValue(value) {
        this.setData({
          c3: value
        })
      }
    })

    this.c1.start()
    this.c2.start()
  },

  start() {
    this.c3.start(() => {
      wx.showToast({
        title: '已完成'
      })
    })
  },
  reset() {
    this.c3.reset()
  },
  update() {
    this.c3.update(1314)
  },
  pauseResume() {
    this.c3.pauseResume()
  },
})