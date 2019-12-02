Page({
  data: {
    val1: 1,
    value2: 0.1
  },
  onLoad(options) {

  },
  handleChange(e) {
    this.data[e.currentTarget.dataset.id] = e.detail.value
    this.setData(this.data)
  },
})