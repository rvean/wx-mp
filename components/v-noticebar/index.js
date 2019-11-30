Component({
  properties: {
    text: {
      type: String,
      value: '',
      observer(newVal) {
        this.setData({}, this._init);
      }
    },
    mode: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: 'navigate'
    },
    delay: {
      type: Number,
      value: 0
    },
    speed: {
      type: Number,
      value: 40
    },
    scrollable: {
      type: Boolean,
      value: false
    },
    leftIcon: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#f60'
    },
    bgColor: {
      type: String,
      value: '#fff7cc'
    }
  },
  data: {
    show: true,
    width: undefined,
    wrapWidth: undefined,
    elapse: undefined,
    animation: null,
    resetAnimation: null,
    timer: null
  },
  detached() {
    let timer = this.data.timer;
    timer && clearTimeout(timer);
  },
  methods: {
    // 初始化
    _init() {
      let _this = this;

      wx.createSelectorQuery().in(this).select('.v-noticebar__content').boundingClientRect(rect => {
        if (!rect || !rect.width) {
          return;
        }
        _this.setData({
          width: rect.width
        });

        wx.createSelectorQuery().in(_this).select('.v-noticebar__content-wrap').boundingClientRect(rect => {
          if (!rect || !rect.width) {
            return;
          }

          let wrapWidth = rect.width;
          let _data = _this.data,
            width = _data.width,
            speed = _data.speed,
            scrollable = _data.scrollable,
            delay = _data.delay;

          if (scrollable && wrapWidth < width) {
            let elapse = width / speed * 1000;
            let animation = wx.createAnimation({
              duration: elapse,
              timeingFunction: 'linear',
              delay: delay
            });
            let resetAnimation = wx.createAnimation({
              duration: 0,
              timeingFunction: 'linear'
            });

            _this.setData({
              elapse: elapse,
              wrapWidth: wrapWidth,
              animation: animation,
              resetAnimation: resetAnimation
            }, () => {
              _this._scroll();
            });
          }
        }).exec();
      }).exec();
    },
    // 滚动
    _scroll() {
      let _this2 = this;

      let _data2 = this.data,
        animation = _data2.animation,
        resetAnimation = _data2.resetAnimation,
        wrapWidth = _data2.wrapWidth,
        elapse = _data2.elapse,
        speed = _data2.speed;

      resetAnimation.translateX(wrapWidth).step();
      let animationData = animation.translateX(-(elapse * speed) / 1000).step();
      this.setData({
        animationData: resetAnimation.export()
      });
      setTimeout(() => {
        _this2.setData({
          animationData: animationData.export()
        });
      }, 100);

      let timer = setTimeout(() => {
        _this2._scroll();
      }, elapse);

      this.setData({
        timer: timer
      });
    },
    // 关闭
    _handleButtonClick() {
      let timer = this.data.timer;
      timer && clearTimeout(timer);
      this.setData({
        show: false,
        timer: null
      });
    }
  }
})