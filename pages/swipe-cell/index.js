const app = getApp()

Page({
  data: {
    actions: [{
        name: '喜欢',
        color: '#fff',
        fontsize: '20',
        width: 80,
        background: '#2ad'
      },
      {
        name: '删除',
        color: '#fff',
        fontsize: '20',
        width: 80,
        background: '#f44'
      }
    ],
    toggle: false,
  },
  onLoad() {

  },
  handlerCloseButton(e) {
    let _index = e.detail.index
    console.log(_index)
  },
  // 删除
  del() {
    let that = this;
    app.msg.confirm('确认要删除吗？', () => {
      app.msg.toast('删除了')
      that.setData({
        toggle: true
      })
    })
  },
})