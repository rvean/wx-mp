Component({
  externalClasses: ['v-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../v-sticky/index': {
      type: 'parent'
    }
  },
  data: {
    top: 0,
    height: 0,
    isFixed: false,
    index: -1,
  },
  methods: {
    updateScrollTopChange(scrollTop) {
      const top = this.data.top,
        height = this.data.height;
      this.setData({
        isFixed: (scrollTop >= top && scrollTop < top + height) ? true : false
      })
    },
    updateDataChange(index) {
      wx.createSelectorQuery().in(this).select('.v-sticky-item').boundingClientRect(res => {
        res && this.setData({
          top: res.top,
          height: res.height,
          index: index
        })
      }).exec()
    }
  }
})