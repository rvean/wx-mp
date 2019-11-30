const app = getApp()

Page({
  data: {
    userInfo: {}
  },
  onLoad() {
    this.fnGetUserInfo()
  },
  // 已授权获取用户信息
  fnGetUserInfo() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  },
  // button获取用户信息
  getUserInfo(e) {
    app.globalData.userInfo = e.detail.userInfo

    this.setData({
      userInfo: e.detail.userInfo
    })
  },

})