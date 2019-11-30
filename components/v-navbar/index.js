const app = getApp()

Component({
  externalClasses: ['v-class'],
  options: {
    multipleSlots: true // 启用多slot支持
  },
  properties: {
    // 标题
    title: {
      type: String,
      value: ''
    },
    // 返回的页面数
    delta: {
      type: Number,
      value: 1
    },
    // 首页地址
    homeUrl: {
      type: String,
      value: '/pages/tabBar/index'
    },
    // 是否自定义右边图标
    rightSlot: Boolean,
    // 背景色
    bg: {
      type: String,
      value: '#fff'
    },
    // 字体颜色
    color: {
      type: String,
      value: '#000'
    },
    // 图标颜色
    iconColor: {
      type: String,
      value: '#000'
    },
  },
  data: {
    // 导航栏高度
    navH: 64,
    // 操作系统
    system: '',
  },
  created() {
    this.setData({
      navH: app.globalData.navH,
      system: app.globalData.system
    })
  },
  methods: {
    // 返回上一页
    navBack() {
      wx.navigateBack({
        delta: this.data.delta
      })
    },
    // 点击右边
    onTapRight() {
      // 关闭所有页面，返回首页
      wx.reLaunch({
        url: this.data.homeUrl
      })
    },
  }
})