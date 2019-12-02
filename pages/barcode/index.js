Page({
  data: {
    number: '9787115335524',
    options: {
      onValid() {
        console.log('onValid')
      },
      onInvalid() {
        console.log('onInvalid')
      },
      onSuccess() {
        console.log('onSuccess')
      },
      onError() {
        console.log('onError')
      },
    }
  },
  bindinput(e) {
    this.setData({
      number: e.detail.value,
    })
  },
})