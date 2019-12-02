Page({
  data: {
    fruit: [{
      id: 1,
      name: '香蕉',
    }, {
      id: 2,
      name: '苹果'
    }, {
      id: 3,
      name: '西瓜'
    }, {
      id: 4,
      name: '葡萄',
    }],
    current1: '苹果',
    current2: ['苹果', '葡萄'],

    position: 'right',
    // 单个
    animal: '熊猫',
    checked: false,
    disabled: false,
  },
  // 单选
  onChange1(e) {
    this.setData({
      current1: e.detail.value
    });
  },

  // 复选
  onChange2(e) {
    let cur = this.data.current2;
    let index = cur.indexOf(e.detail.value);
    index === -1 ? cur.push(e.detail.value) : cur.splice(index, 1);
    this.setData({
      current2: cur
    });
  },

  // 单个
  onChange3(e) {
    this.setData({
      checked: e.detail.current
    });
  },
  handleDisabled() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
})