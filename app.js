const http = require('./utils/http.js')
const util = require('./utils/util.js')

App({
  // 小程序初始化完成（全局只触发一次）
  onLaunch() {
    wx.getSystemInfo({
      success: res => {
        this.globalData.system = res.system.substr(0, 3).toLowerCase();
        this.globalData.navH = res.statusBarHeight + (this.globalData.system == 'ios' ? 44 : 48);
      }
    })
  },
  // 常用函数
  http,
  util,
  msg: util.msg,
  vx: util.vx,
  // 全局数据
  globalData: {
    userInfo: null
  },

})