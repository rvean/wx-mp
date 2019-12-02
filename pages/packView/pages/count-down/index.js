const app = getApp()

Page({
  data: {
    targetTime: new Date().getTime() + 500000,
    endDate: '2019-12-25 17:23:14',
    myFormat: ['天', '时', '分', '秒'],
    myFormat1: ['时', '分', '秒'],
    text: '进行中...'
  },
  onLoad() {
    this.setData({
      endDate: this.getCurDate()
    })
  },
  // 获取日期
  getCurDate(n) {
    n = n || 2
    const d = new Date(new Date().getTime() + n * 24 * 60 * 60 * 1000)
    const year = d.getFullYear()
    const mon = d.getMonth() + 1
    const day = d.getDate()

    return year + '/' + (mon < 10 ? '0' + mon : mon) + '/' + (day < 10 ? '0' + day : day) + ' 12:26:18'
  },
  // 倒计时结束的回调函数
  endCallback() {
    this.setData({
      text: '已结束'
    })
  },
})