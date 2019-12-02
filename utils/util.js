// 消息提示
const msg = {
  // 消息确认提示框
  confirm(content, confirm, cancel, title, showCancel = true) {
    wx.showModal({
      title: title || '提示',
      content: content || '',
      showCancel: showCancel,
      success(res) {
        if (res.confirm) {
          confirm && confirm()
        } else if (res.cancel) {
          cancel && cancel()
        }
      }
    })
  },
  // 消息提示框
  alert(content, confirm, title, cancel) {
    this.confirm(content, confirm, cancel, title, false);
  },
  // Toast 提示
  toast(title, duration = 2000, success, icon, image, mask = true) {
    wx.showToast({
      title: title || '',
      icon: icon || 'none',
      image: image || '',
      duration: duration,
      mask: mask,
      success() {
        success && success()
      }
    })
  },
  // 成功提示
  toastSuccess(title, duration, success) {
    this.toast(title, duration, success, 'success');
  },
  // loading  wx.hideLoading()可关闭
  loading(title) {
    wx.showLoading({
      title: title || '加载中...',
      mask: true
    })
  }
}

// 与时间有关
const dt = {
  // 获取今天日期
  getDate(sp, d) {
    d = d || new Date()
    const year = d.getFullYear()
    const mon = d.getMonth() + 1
    const day = d.getDate()

    const spArr = sp ? [sp, sp, ''] : ['年', '月', '日']
    return year + spArr[0] + (mon < 10 ? '0' + mon : mon) + spArr[1] + (day < 10 ? '0' + day : day) + spArr[2]
  },
  // 获取今天星期
  getWeek(d) {
    d = d || new Date()
    const w = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    return w[d.getDay()]
  },
  // 根据出生日期计算年龄
  getAge(str) {
    let r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
    if (r == null) return false;
    let d = new Date(r[1], r[3] - 1, r[4])
    if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
      let Y = new Date().getFullYear()
      return Number((Y - r[1]))
    }
    return ("输入的日期格式错误！");
  }
}

// 封装 wx原生方法
const vx = {
  // 支付
  pay(data, success, fail) {
    wx.requestPayment({
      timeStamp: data.timeStamp,
      nonceStr: data.nonceStr,
      package: data.package,
      signType: data.signType,
      paySign: data.paySign,
      success(res) {
        success && success(res)
      },
      fail(res) {
        if (res.errMsg == "requestPayment:fail cancel") {
          if (!fail) return msg.toast('支付取消');
          fail && fail(res);
        } else {
          return msg.toast('支付失败')
        }
      }
    })
  },
  // 停止下拉刷新
  stopPullRefresh(t = 300) {
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, t);
  },
}

module.exports = {
  msg,
  dt,
  vx
}