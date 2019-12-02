const app = getApp()

Page({
  data: {
    targetTime: new Date().getTime() + 500000,
    endDate: '2019-02-15 17:23:14',
    myFormat: ['天', '时', '分', '秒'],
    myFormat1: ['时', '分', '秒'],
    text: '进行中...'
  },
  onLoad() {

  },
  // 倒计时结束的回调函数
  endCallback() {
    this.setData({
      text: '已结束'
    })
  },
})