Page({
  data: {
    items: [{
        value: '2',
        name: '选项一',
      },
      {
        value: '5',
        name: '选项二',
      },
    ],
    // 当前选中
    checked: {
      base: '2',
      color: -1
    },
  },
  // 选择
  select(e) {
    const type = e.currentTarget.dataset.type;

    this.setData({
      [`checked.${type}`]: e.detail.value
    });
  },
})