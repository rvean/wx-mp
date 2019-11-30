Component({
  properties: {
    // 是否可滚动
    scroll: Boolean,
    // 固定顶部
    fixed: Boolean,
    // 高度
    height: {
      type: Number,
      value: 90
    },
    // tab 列表
    list: {
      type: Array,
      value: []
    },
    // tab id
    tabId: {
      type: [String, Number],
      value: ''
    }
  },

  data: {
    scrollLeft: 0
  },

  methods: {
    // 点击切换
    onChange(e) {
      const tabId = e.currentTarget.dataset.id

      if (this.data.scroll) {
        this.onScroll(tabId)
      }

      this.setData({
        tabId: tabId
      })

      this.triggerEvent('tabchange', tabId)
    },
    // 点击自动滚动
    onScroll(tabId) {
      const _this = this;

      let query = wx.createSelectorQuery().in(this);
      query.select('#item-' + tabId).boundingClientRect();
      query.select('#scroll-view').boundingClientRect();
      query.select('#scroll-view').scrollOffset();
      query.exec(function(res) {
        _this.setData({
          scrollLeft: res[2].scrollLeft + res[0].left + res[0].width / 2 - res[1].width / 2
        })
      })
    }
  }
})