const app = getApp()

Page({
  data: {
    ls: [{
      title: '自定义导航栏 navbar',
      path: 'navbar/index'
    }, {
      title: '箭头 三角形',
      path: 'arrow/index'
    }, {
      title: '头像 avatar',
      path: 'avatar/index'
    }, {
      title: '徽章 badge',
      path: 'badge/index'
    }, {
      title: '条形码 barcode',
      path: 'barcode/index'
    }, {
      title: '二维码 qrcode',
      path: 'qrcode/index'
    }, {
      title: '页底提示 bottomtip',
      path: 'bottomtip/index'
    }, {
      title: '按钮 btn',
      path: 'btn/index'
    }, {
      title: '列表/单元格 cell',
      path: 'cell/index'
    }, {
      title: '环形进度条 circle',
      path: 'circle/index'
    }, {
      title: '折叠面板 collapse',
      path: 'collapse/index'
    }, {
      title: '倒计时 count-down',
      path: 'count-down/index'
    }, {
      title: '加减输入框 counter',
      path: 'counter/index'
    }, {
      title: '数字动画 countup',
      path: 'countup/index'
    }, {
      title: '宫格布局 grid',
      path: 'grid/index'
    }, {
      title: '图标 icon',
      path: 'icon/index'
    }, {
      title: '字母索引列表 index-list',
      path: 'index-list/index'
    }, {
      title: '输入框 input',
      path: 'input/index'
    }, {
      title: '通告栏 noticebar',
      path: 'noticebar/index'
    }, {
      title: '进度条 progress',
      path: 'progress/index'
    }, {
      title: '评分 rate',
      path: 'rate/index'
    }, {
      title: '下拉刷新 refresher',
      path: 'refresher/index'
    }, {
      title: '单选/复选 radio',
      path: 'radio/index'
    }, {
      title: '搜索栏 search',
      path: 'search/index'
    }, {
      title: '列表选择 selecter',
      path: 'selecter/index'
    }, {
      title: '步骤条 steps',
      path: 'steps/index'
    }, {
      title: '吸顶容器 sticky',
      path: 'sticky/index'
    }, {
      title: '滑动单元格 swipe-cell',
      path: 'swipe-cell/index'
    }, {
      title: '选项卡 tabs',
      path: 'tabs/index'
    }, {
      title: '标签 tag',
      path: 'tag/index'
    }, {
      title: '多久之前 timeago',
      path: 'timeago/index'
    }, {
      title: '顶部提示 toptip',
      path: 'toptip/index'
    }, {
      title: '分类选择 tree-select',
      path: 'tree-select/index'
    }, {
      title: '上传 upload',
      path: 'upload/index'
    }, {
      title: '商品详情 goods/detail',
      path: 'goods/detail'
    }, {
      title: '提交订单 order/submit',
      path: 'order/submit'
    }]
  },
  onLoad() {
    wx.showShareMenu()
  },
})