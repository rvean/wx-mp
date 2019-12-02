const app = getApp()

Page({
  data: {
    list: [{
      title: '基础组件',
      ls: [{
        title: 'Icon 图标',
        path: '/pages/packBase/pages/icon/index'
      }, {
        title: '箭头 三角形',
        path: '/pages/packBase/pages/arrow/index'
      }, {
        title: 'Btn 按钮',
        path: '/pages/packBase/pages/btn/index'
      },]
    }, {
      title: '导航组件',
      ls: [{
        title: 'Navbar 自定义导航栏',
        path: '/pages/packNav/pages/navbar/index'
      }, {
        title: 'IndexList 字母索引列表',
        path: '/pages/packNav/pages/index-list/index'
      }, {
        title: 'Tabs 选项卡',
        path: '/pages/packNav/pages/tabs/index'
      }, {
        title: 'Grid 宫格布局',
        path: '/pages/packNav/pages/grid/index'
      },]
    }, {
      title: '视图组件',
      ls: [{
        title: 'Avatar 头像',
        path: '/pages/packView/pages/avatar/index'
      }, {
        title: 'Badge 徽章',
        path: '/pages/packView/pages/badge/index'
      }, {
        title: 'Progress 进度条',
        path: '/pages/packView/pages/progress/index'
      }, {
        title: 'Circle 环形进度条',
        path: '/pages/packView/pages/circle/index'
      }, {
        title: 'Collapse 折叠面板',
        path: '/pages/packView/pages/collapse/index'
      }, {
        title: 'CountDown 倒计时',
        path: '/pages/packView/pages/count-down/index'
      }, {
        title: 'Countup 数字动画',
        path: '/pages/packView/pages/countup/index'
      }, {
        title: 'Noticebar 通告栏',
        path: '/pages/packView/pages/noticebar/index'
      }, {
        title: 'Tag 标签',
        path: '/pages/packView/pages/tag/index'
      }, {
        title: 'Sticky 吸顶容器',
        path: '/pages/packView/pages/sticky/index'
      }, {
        title: 'Timeago 多久之前',
        path: '/pages/packView/pages/timeago/index'
      }, {
        title: 'Steps 步骤条',
        path: '/pages/packView/pages/steps/index'
      },]
    }, {
      title: '表单组件',
      ls: [{
        title: 'Cell 列表/单元格 ',
        path: '/pages/packForm/pages/cell/index'
      }, {
        title: 'Input 输入框',
        path: '/pages/packForm/pages/input/index'
      }, {
        title: 'Rate 评分',
        path: '/pages/packForm/pages/rate/index'
      }, {
        title: 'Radio 单选/复选',
        path: '/pages/packForm/pages/radio/index'
      }, {
        title: 'Counter 加减输入框',
        path: '/pages/packForm/pages/counter/index'
      }, {
        title: 'Search 搜索栏',
        path: '/pages/packForm/pages/search/index'
      }, {
        title: 'Selecter 列表选择',
        path: '/pages/packForm/pages/selecter/index'
      }, {
        title: 'SwipeCell 滑动单元格',
        path: '/pages/packForm/pages/swipe-cell/index'
      }, {
        title: 'TreeSelect 分类选择',
        path: '/pages/packForm/pages/tree-select/index'
      }, {
        title: 'Upload 上传文件',
        path: '/pages/packForm/pages/upload/index'
      },]
    }, {
      title: '反馈组件',
      ls: [{
        title: 'Bottomtip 页底提示',
        path: '/pages/packFeedback/pages/bottomtip/index'
      }, {
        title: 'Toptip 顶部提示',
        path: '/pages/packFeedback/pages/toptip/index'
      },]
    }, {
      title: '业务组件',
      ls: [{
        title: 'Barcode 条形码',
        path: '/pages/packBusiness/pages/barcode/index'
      }, {
        title: 'Qrcode 二维码',
        path: '/pages/packBusiness/pages/qrcode/index'
      }, {
        title: 'GoodsDetail 商品详情 ',
        path: '/pages/packBusiness/pages/goods/detail'
      }, {
        title: 'OrderSubmit 提交订单',
        path: '/pages/packBusiness/pages/order/submit'
      }, {
        title: 'Refresher 下拉刷新',
        path: '/pages/packBusiness/pages/refresher/index'
      },]
    }]
  },
  onLoad() {
    wx.showShareMenu()
  },
})