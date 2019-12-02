const config = require('./config.js')

const http = {
  // request 请求
  request(method, url, data, success, fail) {
    wx.request({
      url: config.apiURL + url,
      data: data || {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: method || 'GET',
      success(res) {
        if (res.errMsg != 'request:ok' || parseInt(res.statusCode) != 200) return false;
        success && success(res.data);
      },
      fail() {
        console.log('-- request fail --');
        wx.hideLoading();
        wx.stopPullDownRefresh();

        wx.showToast({
          title: '请求出错，请稍后重试',
          icon: 'none',
          image: '',
          duration: 3000,
          mask: true,
        });

        fail && fail();
      }
    })
  },
  // POST 请求
  post(url, data, success, fail) {
    this.request('POST', url, data, success, fail)
  },
  // GET 请求
  get(url, data, success, fail) {
    this.request('GET', url, data, success, fail)
  }
}

module.exports = http