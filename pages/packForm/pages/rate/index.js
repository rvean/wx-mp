Page({
  data: {
    starIndex1: 3,
    starIndex2: 1,
    starIndex3: 2,
  },
  onChange(e) {
    this.data[e.currentTarget.dataset.id] = e.detail.index
    this.setData(this.data)
  },
})