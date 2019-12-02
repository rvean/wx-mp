//获取应用实例
const app = getApp()

Page({
  data: {
    region: [] // 当前选中的 省市区
  },
  // 选中的省市区
  regionPicker(e) {
    this.setData({
      region: e.detail.region
    })
  }
})