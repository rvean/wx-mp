import config from './config';

Page({
  data: {
    items: [{
      // 导航名称
      text: '所有城市',
      // 该导航下所有的可选项
      children: [...config.pro1, ...config.pro2]
    }, {
      text: config.pro1Name,
      children: config.pro1
    }, {
      text: config.pro2Name,
      children: config.pro2
    }, {
      text: config.pro3Name,
      children: config.pro3,
      disabled: true
    }],
    activeIndex: 0, // 一级 index
    activeId: 1, // 二级 id
  },

  onClickNav(e) {
    this.setData({
      activeIndex: e.detail.index || 0
    });
  },
  onClickItem(e) {
    this.setData({
      activeId: e.detail.id
    });
  }
})