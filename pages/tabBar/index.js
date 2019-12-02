const app = getApp()

Page({
  data: {
    list: [{
      title: '基础组件',
      ls: [{
        title: 'Icon 图标',
        path: 'icon/index'
      }, {
        title: '箭头 三角形',
        path: 'arrow/index'
      }, {
        title: 'Btn 按钮',
        path: 'btn/index'
      }, ]
    }, {
      title: '导航组件',
      ls: [{
        title: 'Navbar 自定义导航栏',
        path: 'navbar/index'
      }, {
        title: 'IndexList 字母索引列表',
        path: 'index-list/index'
      }, {
        title: 'Tabs 选项卡',
        path: 'tabs/index'
      }, {
        title: 'Grid 宫格布局',
        path: 'grid/index'
      }, ]
    }, {
      title: '视图组件',
      ls: [{
        title: 'Avatar 头像',
        path: 'avatar/index'
      }, {
        title: 'Badge 徽章',
        path: 'badge/index'
      }, {
        title: 'Progress 进度条',
        path: 'progress/index'
      }, {
        title: 'Circle 环形进度条',
        path: 'circle/index'
      }, {
        title: 'Collapse 折叠面板',
        path: 'collapse/index'
      }, {
        title: 'CountDown 倒计时',
        path: 'count-down/index'
      }, {
        title: 'Countup 数字动画',
        path: 'countup/index'
      }, {
        title: 'Noticebar 通告栏',
        path: 'noticebar/index'
      }, {
        title: 'Tag 标签',
        path: 'tag/index'
      }, {
        title: 'Sticky 吸顶容器',
        path: 'sticky/index'
      }, {
        title: 'Timeago 多久之前',
        path: 'timeago/index'
      }, {
        title: 'Steps 步骤条',
        path: 'steps/index'
      }, ]
    }, {
      title: '表单组件',
      ls: [{
        title: 'Cell 列表/单元格 ',
        path: 'cell/index'
      }, {
        title: 'Input 输入框',
        path: 'input/index'
      }, {
        title: 'Rate 评分',
        path: 'rate/index'
      }, {
        title: 'Radio 单选/复选',
        path: 'radio/index'
      }, {
        title: 'Counter 加减输入框',
        path: 'counter/index'
      }, {
        title: 'Search 搜索栏',
        path: 'search/index'
      }, {
        title: 'Selecter 列表选择',
        path: 'selecter/index'
      }, {
        title: 'SwipeCell 滑动单元格',
        path: 'swipe-cell/index'
      }, {
        title: 'TreeSelect 分类选择',
        path: 'tree-select/index'
      }, {
        title: 'Upload 上传文件',
        path: 'upload/index'
      }, ]
    }, {
      title: '反馈组件',
      ls: [{
        title: 'Bottomtip 页底提示',
        path: 'bottomtip/index'
      }, {
        title: 'Toptip 顶部提示',
        path: 'toptip/index'
      }, ]
    }, {
      title: '业务组件',
      ls: [{
        title: 'Barcode 条形码',
        path: 'barcode/index'
      }, {
        title: 'Qrcode 二维码',
        path: 'qrcode/index'
      }, {
        title: 'GoodsDetail 商品详情 ',
        path: 'goods/detail'
      }, {
        title: 'OrderSubmit 提交订单',
        path: 'order/submit'
      }, {
        title: 'Refresher 下拉刷新',
        path: 'refresher/index'
      }, ]
    }]
  },
  onLoad() {
    wx.showShareMenu()
  },
})