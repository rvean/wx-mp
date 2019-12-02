Page({
  data: {
    value1: '123',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    // 获取验证码
    phone: '', // 手机号
    code: '', // 验证码
    isGetting: false, // 避免重复发送
    time: 120, // 倒计时
  },

  // 手机号 验证码 输入
  bindinput(e) {
    this.data[e.currentTarget.id] = e.detail.detail.value.replace(/\s+/g, '');
    this.setData(this.data)
  },
  // 获取验证码
  getCode() {
    let ta = this.data;
    if (ta.isGetting) return;
    if (!ta.phone) return app.msg.alert('请输入手机号');
    if (!(/^1[0-9]{10}$/.test(ta.phone))) return app.msg.alert('请输入正确格式的手机号');

    this.setData({
      isGetting: true,
      time: 120
    })
    this.timeCount()
  },
  //倒计时
  timeCount() {
    let that = this,
      ta = this.data;
    let timer = setInterval(() => {
      ta.time--;
      if (ta.time < 1) {
        clearInterval(timer);
        ta.isGetting = false;
      }
      that.setData(ta)
    }, 1000)
  },
})