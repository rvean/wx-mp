Component({
  externalClasses: ['v-class'],

  properties: {
    // 图片 mode
    mode: {
      type: String,
      value: 'aspectFill'
    },
    // 背景
    bgColor: {
      type: String,
      value: '#abc'
    },
    // 字体颜色
    color: {
      type: String,
      value: '#fff'
    },
    // 字体大小
    fontSize: {
      type: String,
      value: '40'
    },
    // 图片大小
    size: {
      type: String,
      value: '100'
    },
    // 圆角大小 % rpx px
    radius: {
      type: String,
      value: '50%'
    },
    // 图片路径
    src: {
      type: String,
      value: ''
    },
    // 名字
    name: {
      type: String,
      value: '',
      observer: 'getFirstName'
    }
  },
  data: {
    firstName: ''
  },
  methods: {
    // 获取首个字
    getFirstName() {
      const name = this.data.name.replace(/\s+/g, '');
      if (!name.length) return;

      let _name = name.substr(0, 1).toUpperCase();

      this.setData({
        firstName: _name
      })
    }
  }
});