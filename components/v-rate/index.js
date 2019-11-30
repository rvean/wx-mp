Component({
  externalClasses: ['v-class'],
  properties: {
    // 个数
    count: {
      type: Number,
      value: 5
    },
    // 当前个数
    value: {
      type: Number,
      value: 0
    },
    // 禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 大小
    size: {
      type: Number,
      value: 45
    },
    name: {
      type: String,
      value: ''
    }
  },
  data: {
    touchesStart: {
      pageX: 0
    },
    starSize: 0,
  },

  ready() {
    this.data.starSize = (wx.getSystemInfoSync().screenWidth / 750) * this.data.size;

    wx.createSelectorQuery().in(this).select('.v-rate').boundingClientRect(res => {
      this.data.touchesStart.pageX = res.left || 0
    }).exec();
  },

  methods: {
    // 点击选中
    handleClick(e) {
      if (this.data.disabled) return;

      this.triggerEvent('change', {
        index: e.currentTarget.dataset.index + 1
      })
    },
    // 滑动选中
    handleTouchMove(e) {
      const data = this.data;
      if (data.disabled) return;
      if (!e.changedTouches[0]) return;

      const movePageX = e.changedTouches[0].pageX;
      const space = movePageX - data.touchesStart.pageX;
      if (space <= 0) return;

      let setIndex = Math.ceil(space / data.starSize);
      setIndex = setIndex > data.count ? data.count : setIndex;
      this.triggerEvent('change', {
        index: setIndex
      })
    }
  }
});