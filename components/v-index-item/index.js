Component({
  externalClasses: ['v-class'],
  properties: {
    // 字母标题
    name: {
      type: String,
      value: ''
    }
  },
  relations: {
    '../v-index/index': {
      type: 'parent'
    }
  },
  data: {
    top: 0,
    height: 0,
    currentName: ''
  },
  methods: {
    updateDataChange() {
      wx.createSelectorQuery().in(this).select('.v-index-item').boundingClientRect(res => {
        this.setData({
          top: res.top,
          height: res.height,
          currentName: this.data.name
        })
      }).exec()
    }
  }
})