Component({
  externalClasses: ['v-class'],

  options: {
    multipleSlots: true // 启用多slot支持
  },

  relations: {
    '../v-cell-group/index': {
      type: 'parent'
    }
  },

  properties: {
    // 左侧标题
    title: {
      type: String
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    // 只有点击 right 区域才触发 tab 事件
    onlyTapRight: {
      type: Boolean
    },
    // 是否展示右侧箭头并开启尝试以 url 跳转
    isLink: {
      type: null,
      value: ''
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    // 跳转链接
    url: {
      type: String,
      value: ''
    },
    // 默认没低线
    border: {
      type: Boolean,
      value: false
    }
  },

  data: {
    isLastCell: true
  },

  methods: {
    navigateTo() {
      const ta = this.data;
      const type = typeof ta.isLink;
      const url = ta.url;

      this.triggerEvent('click', {});

      if (!ta.isLink || !url || url === 'true' || url === 'false') return;
      if (type !== 'boolean' && type !== 'string') return;
      if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(ta.linkType) === -1) return;

      wx[ta.linkType].call(wx, {
        url
      });
    },
    // 点击箭头内容跳转
    handleTap() {
      if (!this.data.onlyTapRight) {
        this.navigateTo();
      }
    },
    // v-cell-group 给cell加上低线
    updateIsLastCell(isLastCell) {
      this.setData({
        isLastCell
      })
    }
  }
});