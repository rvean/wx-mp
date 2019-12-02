const app = getApp()

Page({
  data: {
    // 导航栏高度
    navH: 64,
    // 操作系统
    system: '',
    // 首页地址
    homeUrl: '/pages/tabBar/index',
    // 返回的页面数
    delta: 1,
  },
  onLoad() {
    this.setData({
      navH: app.globalData.navH,
      system: app.globalData.system
    })
  },
  // 返回上一页
  navBack() {
    wx.navigateBack({
      delta: this.data.delta
    })
  },
  // 关闭所有页面，返回首页
  backHome() {
    wx.reLaunch({
      url: this.data.homeUrl
    })
  },
})